# netaniasferreira-site

Site oficial do Netanias Ferreira — Copywriter Estrategista.

Domínio de produção: **https://netaniasferreira.vercel.app**

Página principal de conversão: **https://netaniasferreira.vercel.app/serviço-de-copy/**

---

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (PostCSS)
- Deploy: Vercel

## Rodar localmente

```bash
npm install
npm run dev
```

Abrir:
- Home: http://localhost:3000
- Landing: http://localhost:3000/serviço-de-copy/

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
app/
├── layout.tsx              # layout raiz, fontes (Inter + Fraunces)
├── page.tsx                # home (link para /serviço-de-copy/)
├── globals.css             # Tailwind + tokens de design
└── serviço-de-copy/
    └── page.tsx            # ★ landing page principal (9 blocos)
public/
└── cases/                  # imagens dos cases (adicionar depois)
    ├── renata.jpg
    ├── dr-thiago.jpg
    ├── tobias.jpg
    ├── thiago-siqueira.jpg
    └── netanias.jpg
```

## Personalização rápida

### 1. Trocar o WhatsApp

Abrir `app/serviço-de-copy/page.tsx`, linha ~5:

```ts
const WHATSAPP_URL =
  "https://wa.me/SEU_NUMERO?text=" + …
```

Substituir `SEU_NUMERO` pelo número com DDI/DDD (ex.: `5511999998888`, sem `+`, sem espaços).

### 2. Adicionar imagens dos cases

Colocar em `public/cases/`:
- `renata.jpg`
- `dr-thiago.jpg`
- `tobias.jpg`
- `thiago-siqueira.jpg`
- `netanias.jpg`

Recomendado: 1200×750 (16:10) para os 4 cases, 800×1000 (4:5) para a foto do Netanias.

### 3. Trocar paleta de cores

Editar tokens em `app/globals.css`:

```css
@theme {
  --color-accent: #c9a24a;       /* dourado dos CTAs */
  --color-bg: #0a0a0a;           /* preto das seções escuras */
  --color-bg-soft: #fafaf7;      /* off-white de fundo */
}
```

## Deploy na Vercel

### Opção A — Via GitHub (recomendado)

1. Criar repo no GitHub e fazer push:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page serviço de copy"
   git branch -M main
   git remote add origin git@github.com:netanias/netaniasferreira-site.git
   git push -u origin main
   ```
2. Em https://vercel.com/new, importar o repo.
3. Manter as configurações padrão (Next.js detectado automaticamente).
4. Deploy.
5. Em **Project Settings → Domains**, garantir que `netaniasferreira.vercel.app` aponta para esse projeto.

### Opção B — Via Vercel CLI

```bash
npm i -g vercel
vercel              # deploy de preview
vercel --prod       # deploy de produção
```

## Notas

- A rota `/serviço-de-copy/` usa o caractere `ç`. A Vercel serve em UTF-8 automaticamente; o navegador exibe como `https://netaniasferreira.vercel.app/serviço-de-copy/` e internamente roteia para `/servi%C3%A7o-de-copy/`. Funciona nativamente.
- FAQ usa `<details>`/`<summary>` nativos — zero JavaScript no cliente.
- Botão sticky de WhatsApp aparece só em mobile.
