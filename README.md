# Meu site pessoal

Meu site de portfólio pessoal foi projetado para ser simplista e limpo, ao mesmo tempo que inclui recursos como postagens de blog MDX com contagens de visualizações, página sobre e muito mais.

## Pilha de tecnologia

Back-end:
- [Next.js](nextjs.org) / TypeScript
- [MDX](https://mdxjs.com) / [Contentlayer](https://contentlayer.dev/) (Postagens do blog)

front-end:
- [Tailwind CSS](https://tailwindcss.com) (Estilo)
- [Radix Primitives](https://www.radix-ui.com/primitives) (componentes de UI sem cabeça)
- [Cores da UI Radix](https://www.radix-ui.com/colors) (Sistema de cores)
- [Framer Motion](https://www.framer.com/motion/) (Animações)

## Começando

Criação da imagem:
```bash
docker docker build -t nicolasalan .
```
Executar o container:
```bash
docker run -p 3000:3000 nicolasalan
```

## Implantação

Este projeto pode ser facilmente implantado no [Vercel](https://vercel.com/new/clone). Basta conectar sua conta Vercel ao repositório GitHub e o Vercel construirá e implantará automaticamente seu aplicativo a cada novo push para o branch principal.