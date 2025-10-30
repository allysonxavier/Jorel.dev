# 🐕 Jorelverso

Uma experiência interativa e fofa para conhecer o Jorel, o melhor cachorro do mundo!

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 📖 Sobre o Projeto

O **Jorelverso** é uma aplicação web simples e divertida desenvolvida em Next.js 15 que revela fotos do Jorel acompanhadas de frases fofas aleatórias. Perfeito para compartilhar com amigos e família e mostrar o quanto seu cachorro é incrível!

## ✨ Funcionalidades

- 🎨 Design moderno com gradientes coloridos vibrantes
- 🎲 Frases fofas aleatórias a cada revelação
- 🖼️ **Slider de fotos interativo** com 5 fotos do Jorel
- ⬅️➡️ Navegação intuitiva com setas laterais
- 🔘 Indicadores clicáveis para acesso direto às fotos
- ✨ Animações suaves e transições agradáveis
- 📱 Totalmente responsivo (mobile e desktop)
- ⚡ Performance otimizada com Next.js 15
- 🚀 Zero dependências externas para o slider
- 🎯 Deploy fácil na Vercel

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para maior segurança
- **Tailwind CSS** - Framework CSS utilitário

## 🎯 Como Rodar Localmente

```bash
# Clone o repositório
git clone git@github.com:allysonxavier/Jorel.dev.git

# Entre na pasta do projeto
cd Jorel.dev

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:3000


## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint
```

## 🌐 Deploy na Vercel

Este projeto está otimizado para deploy na Vercel:

1. Faça fork ou clone este repositório
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. A Vercel detectará automaticamente as configurações
5. Clique em Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/allysonxavier/Jorel.dev)

## 📁 Estrutura do Projeto

```
jorelverso/
├── src/
│   └── app/
│       ├── globals.css      # Estilos globais + Tailwind
│       ├── layout.tsx        # Layout raiz da aplicação
│       └── page.tsx          # Página principal com slider
├── public/                   # Fotos do Jorel (5 imagens)
│   ├── aquajorel.jpeg       # Foto principal
│   ├── 20250916_165021.jpg
│   ├── 20251003_134941.jpg
│   ├── 20251004_212139.jpg
│   └── Screenshot_20250911_111559_Instagram.jpg
├── tailwind.config.ts        # Configuração do Tailwind
├── next.config.js            # Configuração do Next.js
└── package.json              # Dependências do projeto
```

## 🎨 Personalização

### Adicionar Mais Fotos do Jorel

1. Adicione as imagens na pasta `/public`
2. Edite o array `jorelPhotos` em `src/app/page.tsx`:

```tsx
const jorelPhotos = [
  '/aquajorel.jpeg',
  '/sua-nova-foto.jpg',
  // Adicione mais fotos aqui...
];
```

### Adicionar Novas Frases

Edite o array `cutePhrases` em `src/app/page.tsx`:

```tsx
const cutePhrases = [
  "Sua frase fofa aqui! 🐶",
  "Adicione quantas quiser! 💕",
  // ...
];
```

### Mudar Cores do Gradiente

Edite as classes do Tailwind em `src/app/page.tsx`:

```tsx
className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-4"
```

### Ajustar Altura das Fotos

No `src/app/page.tsx`, linha 77, altere os valores:

```tsx
<div className="relative w-full h-[500px] md:h-[600px]">
  // h-[500px] = altura mobile
  // md:h-[600px] = altura desktop
</div>
```

## 💝 Sobre o Jorel

Jorel é o protagonista deste projeto e o beagle mais fofo que você vai conhecer hoje! Este projeto foi criado com muito carinho para compartilhar a fofura do Jorel com o mundo.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commitar suas mudanças (`git commit -m 'Add: nova feature incrível'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## 📧 Contato

Allyson Xavier - [@allysonxavier](https://github.com/allysonxavier)

Link do Projeto: [https://github.com/allysonxavier/Jorel.dev](https://github.com/allysonxavier/Jorel.dev)

---

Feito com ❤️ para o Jorel 🐕
