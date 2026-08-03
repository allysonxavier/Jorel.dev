# TDD — Jorelverso (Technical Design Document)

> Fase 2 do fluxo: **Discovery → Planejamento (TDD) → SPEC → Desenvolvimento**

## Contexto

Este documento é a Fase 2 do fluxo, construído sobre o [`docs/discovery.md`](./discovery.md) já aprovado (também publicado no Linear). O objetivo aqui é decidir e registrar a arquitetura técnica antes de qualquer código: como o backend separado, o banco, o storage e o frontend existente se conectam, e como o débito técnico atual é resolvido nessa transição.

Decisões já fechadas com o usuário nesta fase:
- **Backend**: serviço separado em **NestJS** (TypeScript), vive no **mesmo repositório** (monorepo), não em repo próprio.
- **Infraestrutura**: **Supabase usado só como Postgres + Storage gerenciados** — autenticação é **implementada do zero no NestJS** (JWT, hash de senha, roles), não a Auth pronta do Supabase. Escolha deliberada para maximizar a demonstração de backend autoral no portfólio.
- **Papéis**: apenas `USER` (faz upload) e `ADMIN` (CRUD de blog/projetos) — sem papéis extras por enquanto.
- **Conteúdo fictício** (Aumigos/Humanos): permanece como está por enquanto; a troca para dados reais acontece como um passo explícito *depois* que banco+API existirem, não como parte do mesmo corte.

---

## 1. Visão geral da arquitetura

```
apps/web (Next.js, App Router)  →  apps/api (NestJS)  →  Supabase Postgres
        │                                  │
        └── Server Actions (proxy) ────────┘
                                            └──→ Supabase Storage (fotos)
```

- O frontend **nunca** fala diretamente com Supabase ou Postgres. Toda leitura/escrita passa pela API Nest.
- Server Actions no Next.js funcionam como **proxy fino autenticado**: recebem a ação do usuário, chamam a API Nest (com o JWT do usuário), e nunca expõem a URL interna da API nem chaves de serviço no client bundle.
- O `SUPABASE_SERVICE_ROLE_KEY` (acesso privilegiado ao Storage/DB) existe **só** no ambiente do `apps/api`, nunca no frontend.

## 2. Estrutura de repositório (monorepo)

Migração do layout atual (tudo na raiz) para workspaces:

```
/
├── apps/
│   ├── web/          ← código atual do Next.js migra pra cá (src/, public/, etc.)
│   └── api/           ← novo projeto NestJS
├── docs/
│   ├── discovery.md
│   └── tdd.md          ← este documento
└── package.json         ← npm workspaces raiz
```

- **npm workspaces** é suficiente para dois apps — não introduzir Turborepo/Nx agora (over-engineering para o escopo atual).
- Tipos compartilhados (DTOs de request/response) começam duplicados entre `apps/web` e `apps/api`; só extrair para `packages/shared` se a duplicação virar dor real — não adiantar isso.
- Essa migração (mover `src/` atual para `apps/web/`) é o primeiro passo do Dev, numa PR dedicada, sem misturar com feature nova.

## 3. Modelagem de dados (Postgres via Prisma)

| Entidade | Campos principais | Observação |
|---|---|---|
| `User` | id, name, email (único), passwordHash, role (`USER`\|`ADMIN`), createdAt | Senha com bcrypt, nunca retornada pela API |
| `Aumigo` | id, userId (FK), petName, breed, story, photoUrl, createdAt | É o conteúdo enviado pela comunidade — a "vitrine dinâmica" do Discovery é a listagem paginada desta tabela |
| `BlogPost` | id, authorId (FK, admin), title, slug (único), content, coverImageUrl, publishedAt, createdAt, updatedAt | Só admin escreve; leitura pública |
| `ContactMessage` | id, name, email, message, read (bool), createdAt | Só admin lê |

- **Prisma** como ORM (padrão de fato em stacks TS+Postgres hoje, boa tooling de migration).
- Seção "Humanos" do Discovery **não é modelada nesta fase** — continua fictícia, fora de escopo até haver decisão própria sobre ela.

## 4. Design da API (REST, NestJS)

Mantém a convenção de versionamento que o projeto já usa (`/api/v1/...`).

| Rota | Método | Acesso | Descrição |
|---|---|---|---|
| `/api/v1/auth/register` | POST | público | Cria usuário |
| `/api/v1/auth/login` | POST | público | Retorna access + refresh token |
| `/api/v1/auth/refresh` | POST | público (refresh token) | Renova access token |
| `/api/v1/users/me` | GET | autenticado | Perfil do usuário logado |
| `/api/v1/aumigos` | GET | público | Lista paginada (a vitrine) |
| `/api/v1/aumigos` | POST | autenticado (USER) | Upload de foto + informações |
| `/api/v1/aumigos/:id` | DELETE | ADMIN | Moderação básica |
| `/api/v1/blog/posts` | GET | público | Lista paginada |
| `/api/v1/blog/posts/:slug` | GET | público | Post individual |
| `/api/v1/blog/posts` | POST/PATCH/DELETE | ADMIN | CRUD do blog |
| `/api/v1/contact` | POST | público | Salva mensagem de contato |
| `/api/v1/contact` | GET | ADMIN | Lista mensagens recebidas |

O antigo endpoint `/api/v1/status` (health-check do Postgres, hoje dentro do Next.js) é **descontinuado** — ver seção 7.

## 5. Autenticação e autorização

- **JWT**: access token de vida curta (~15min) + refresh token (httpOnly cookie, ~7 dias). Senhas com bcrypt.
- Implementado com Passport-JWT (padrão do ecossistema Nest) + Guards + decorator `@Roles('ADMIN')` para proteger rotas administrativas.
- **Regra de segurança**: nenhuma checagem de permissão no frontend substitui a checagem no backend — o `domain/` do frontend (ver seção 6) só controla o que é *mostrado na UI*, a autorização real sempre é decidida pela API Nest.

## 6. Integração com o frontend existente

Adoção seletiva do padrão de arquitetura do usuário (conforme já registrado no Discovery — não a árvore completa):

- **`infra/services/`**: cliente HTTP (`serverFetch`) apontando pra URL da API Nest via env var — usado dentro de Server Components e Server Actions.
- **`actions/`**: Server Actions como proxy autenticado (login, upload de foto, envio de contato, CRUD do admin) — mantém segredos/URL da API fora do bundle do client.
- **`infra/cache/`**: hooks de React Query só onde há valor real de paginação/refetch — feed de Aumigos (infinite scroll), lista de posts no admin, lista de mensagens de contato.
- **`domain/`**: funções puras de permissão (`canModerate(user)`, `canEditPost(user)`) — usadas só para UX (esconder/mostrar botões), não como gate de segurança.
- **Atomic design**: mantém `atoms/` + `organisms/` como já está; `molecules/` só nasce quando um padrão composto se repetir de fato (ex: card de Aumigo usado no feed público e na lista do admin).
- **Zustand**: não entra nesta fase — só se surgir estado de UI cross-component real (ex: modal de progresso de upload).
- `EnvioSection` (hoje só `alert()`) passa a chamar a Server Action de upload real.

## 7. Infraestrutura e deploy

| Peça | Onde | Observação |
|---|---|---|
| Postgres | Supabase (free tier) | Acessado só pelo `apps/api` via Prisma |
| Storage de fotos | Supabase Storage (free tier) | Bucket com escrita só via service role (backend), leitura pública |
| API (`apps/api`) | Render (free tier) | Cold start após inatividade é aceitável nesta fase (baixo tráfego); Fly.io como alternativa se isso incomodar |
| Frontend (`apps/web`) | Vercel | Assumindo que é onde já hospeda hoje — **confirmar** |
| CI | GitHub Actions | Lint + typecheck + test em PR para os dois apps; deploy da API no merge à master (auto-deploy do Render); Vercel já faz preview deploy automático |

## 8. O que acontece com o débito técnico do Discovery

| Item do Discovery | Resolução nesta migração |
|---|---|
| `src/infra/database.js` sem pooling, logando credenciais | **Removido** — acesso a Postgres deixa de existir no Next.js; tudo passa pela API Nest |
| `/api/v1/status` | Descontinuado junto com o acesso direto ao banco |
| `.env.development` commitado | Removido do versionamento; credenciais novas (Supabase, JWT secrets) nunca commitadas |
| Sem ESLint/Prettier configurados | Configurado no bootstrap do monorepo, compartilhado entre `apps/web` e `apps/api` |
| Teste de integração frágil | Substituído: testes unitários (Jest) nos services do Nest, testes de integração de API (supertest), testes de componente no frontend |
| Identidade inconsistente (`jorelzinho`/`Jorel.dev`/`Jorelverso`) | Padronizar para `Jorelverso` em `package.json` de ambos os apps, nos READMEs e no repo |
| README desatualizado | Reescrito na fase de Dev, já refletindo o monorepo |
| Tailwind configurado mas não usado | Removido (`tailwind.config.ts`, `postcss.config.js`) já que CSS Modules é o padrão real |

## 9. Fora de escopo deste TDD (fica para SPEC/backlog)

- Seção "Humanos" (fictícia) — sem decisão de produto ainda.
- Moderação/aprovação de uploads antes de publicar (só existe DELETE por admin por ora).
- Corte de fato do conteúdo fictício de Aumigos para dados reais — acontece depois que a feature estiver no ar, como task própria.
- Qualquer papel de acesso além de USER/ADMIN.

---

## Próximos passos

1. Revisar este TDD e ajustar o que estiver errado (em especial: confirmar hospedagem do frontend no Vercel).
2. Publicar este documento no Linear (mesmo projeto do Discovery).
3. Seguir para a **SPEC**: quebrar cada seção deste TDD em requisitos funcionais detalhados, critérios de aceite, e criar os épicos/issues correspondentes no Linear (time `JOR`), incluindo a migração do monorepo como a primeira issue.
