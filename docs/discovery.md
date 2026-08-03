# Discovery — Jorelverso

> Fase 1 do fluxo: **Discovery → Planejamento (TDD) → SPEC → Desenvolvimento (tasks/Linear/implementação/testes)**

## Contexto

O Jorelverso é hoje um site simples sobre o cachorro Jorel. O objetivo é transformá-lo em uma peça de portfólio full-stack, construída inteiramente com um fluxo assistido por IA, seguindo boas práticas de engenharia. Esta etapa é o Discovery: entender o estado real do projeto (o README estava desatualizado) e alinhar a visão de produto antes de planejar tecnicamente.

Esta etapa não gera código — o objetivo é o documento abaixo, que serve de insumo para a próxima fase (Planejamento/TDD).

---

## 1. Estado atual do projeto (fatos, via exploração de código em 2026-08-03)

**Stack real (README divergia disso):**
- Next.js 15.5.9 (App Router), React 19, TypeScript estrito no frontend (`strict: true`)
- Estilização: **CSS Modules + design tokens em CSS custom properties** — Tailwind está configurado (`tailwind.config.ts`) mas **não instalado nem usado em lugar nenhum**; README afirmava incorretamente que o projeto usa Tailwind
- Estrutura atomic-design (`atoms/`, `organisms/`) já iniciada em `src/components`
- Backend: um único endpoint `/api/v1/status` (Postgres via `pg`), sem pooling de conexão (abre/fecha client a cada query), loga credenciais e queries no console
- `.env.development` com credenciais placeholder está **commitado no git**
- Zero autenticação, zero persistência real para as features "vivas": formulário de envio de foto (`EnvioSection`) só faz `alert()`; seção de doação (`PetiscoSection`) tem QR code estático (emoji)
- Testes: 1 teste de integração frágil (depende de servidor rodando + estado exato do banco); zero testes de componente/unidade
- Sem CI/CD, sem ESLint/Prettier configurados de fato (dependências existem no `package.json` mas sem arquivo de config), `eslint-config-next` (16.1.6) descasado da versão do Next (15.5.9)
- Inconsistência de identidade: `package.json` diz `"jorelzinho"`, README dizia `Jorel.dev`, UI diz `Jorelverso`
- Conteúdo hoje é uma mistura de fotos reais do Jorel com dados fictícios/stock (seções "Aumigos" e "Humanos")

## 2. Visão de produto

- **Essência**: portfólio/site pessoal — usa o Jorel (cachorro) como mascote/tema, mas a função real é ser vitrine profissional do desenvolvedor.
- **O que precisa provar**: stack full-stack sólida, boas práticas de engenharia (testes, CI, arquitetura, documentação), o próprio processo de uso de IA no desenvolvimento, e um design/UX cuidado.
- **Backend**: será um **serviço separado** do Next.js (não API Routes/Server Actions) — decisão já tomada; a stack específica (Nest, Express/Fastify, outra linguagem) fica em aberto para a fase de Planejamento/TDD.
- **Ponto de partida**: aproveitar a base visual/estrutural atual (Header/Hero/Sobre/Momentos/Aumigos/Humanos/Petisco/Envio/Footer) — Discovery expande a partir daqui, não recomeça do zero.
- **Prazo**: sem prazo fixo — prioridade é qualidade do processo sobre velocidade.
- **Restrição de custo**: hospedar API + banco online, mas **sem custo alto** — requisito não-funcional para o Planejamento (influencia escolha de stack/hosting).

## 3. Escopo funcional levantado

1. **Upload autenticado de foto** — usuários logados podem enviar uma foto com informações associadas (transforma o mockup atual do `EnvioSection`, hoje só um `alert()`, em uma feature real com persistência).
2. **Vitrine de projetos com dados dinâmicos** — lista vinda do backend/banco, não mais cards estáticos.
3. **Blog técnico** — posts sobre o aprendizado do desenvolvedor.
4. **Área de contato com persistência** — formulário que salva no backend (não apenas `mailto`).
5. **Área administrativa/autenticada** — para editar projetos/posts/conteúdo sem mexer em código; implica auth com pelo menos dois níveis (usuário comum vs. admin).

**Resolvido**: "Vitrine de projetos" e "upload de foto por usuários logados" são a mesma coisa — não há separação entre "portfólio de código do dev" e "comunidade de pets". O Jorelverso é um site único: os "projetos" na vitrine dinâmica são o próprio conteúdo da comunidade (fotos/pets enviados pelos usuários), e é o site como um todo — produto + engenharia por trás dele — que funciona como portfólio profissional do desenvolvedor.

## 4. Ferramental de processo

- **Linear**: nenhum workspace/board configurado ainda — nasce na fase de Planejamento (estrutura de épicos, states, labels).
- **TDD/SPEC**: não existiam documentos de planejamento antes deste arquivo.

## 5. Dívidas técnicas identificadas (a carregar para o Planejamento, não resolver agora)

- README precisa ser reescrito para refletir a realidade (stack, estrutura, features)
- Remover config órfã do Tailwind ou decidir se será adotado de fato
- Corrigir identidade do projeto (nome único: `Jorelverso` em todo lugar — package.json, README, repo)
- Adicionar connection pooling e remover logs de credenciais/queries no `database.js`
- Remover `.env.development` do controle de versão e girar as credenciais locais
- Configurar ESLint/Prettier de fato (arquivos de config ausentes) e alinhar versão do `eslint-config-next`
- Estabelecer cobertura de testes real (unidade para componentes/hooks, integração não-frágil para API) e CI/CD
- Decidir se conteúdo fictício (Aumigos/Humanos com fotos stock) vira dado real, gerado por usuários, ou é removido

## 6. Questões em aberto para a próxima fase (Planejamento/TDD)

- Stack do backend separado (Nest, Express/Fastify, ou outra linguagem) — a decidir depois de mapear requisitos
- Onde hospedar API + banco com custo baixo/zero
- Nível de autenticação necessário (usuário comum que só faz upload vs. admin que edita blog/projetos) — provavelmente precisa de roles
- O que fazer com o conteúdo fictício atual (Aumigos/Humanos) antes de lançar: vira conteúdo real gerado por usuários, ou é removido

## 7. Insumo técnico para a próxima fase (não decidir agora)

Existe um padrão de arquitetura frontend já validado pelo desenvolvedor em outros projetos (App Router com split Server/Client, camada `domain/` para regras puras, `infra/` com adapters/services/store/cache, Atomic Design, React Query + Zustand, validação com Zod). É um padrão atual e sólido — a decisão de **quais partes adotar no Jorelverso** (provavelmente adoção seletiva, não a árvore completa) fica para a fase de Planejamento/TDD, junto da definição da stack de backend.

---

## Próximos passos

1. Revisar este Discovery e ajustar o que estiver errado.
2. Seguir para a fase de **Planejamento**, onde este documento vira insumo para o TDD (Technical Design Document) — aí sim se decide stack de backend, hospedagem, modelagem de dados e arquitetura.
3. A partir do TDD, gerar a SPEC funcional e quebrar em tasks/épicos para o board no Linear.
