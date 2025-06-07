# Configurações e Instalações do Projeto

## 1. Next.js
```
npx create-next-app .

y em todos menos o tailwindcss e alias.
```
---

## 2. Styled-Components
```
npm install styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```
### next.config.ts

```
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;

```

---

## ts-node (opcional para executar .ts direto)
```
npm install --save-dev ts-node
```

---