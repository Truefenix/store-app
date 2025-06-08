# Configurações e Instalações do Projeto

## 1. Next.js
```
npx create-next-app .

y em todos menos o tailwindcss e alias.
```
---
---

## 2. ESLint

Já vem com o Next.js, mas pode atualizar:

```bash
npm install --save-dev eslint @eslint/eslintrc eslint-config-next
```
---

## 3. Prettier

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### .prettierrc


```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

### No seu eslint.config.mjs, adicione "plugin:prettier/recommended" nos extends:


```json
...compat.extends(
  "next/core-web-vitals",
  "plugin:prettier/recommended"
)
```

### .prettierignore

```
node_modules
.next
out
```
---

## 4. Styled-Components
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

## 5. ts-node (opcional para executar .ts direto)
```
npm install --save-dev ts-node
```

---