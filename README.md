# Parlem!

Aplicación para aprender català orientada a hispanohablantes que quieren vivir y trabajar en Cataluña.

## Stack

- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS
- ESLint (flat config)

## Requisitos

- Node.js 18.18 o superior

## Instalación local

```bash
npm install
npm run dev
```

La app queda disponible en `http://localhost:3000`.

## Variables de entorno

La profesora IA (Laia) necesita una API key de Anthropic en el servidor. Copia el archivo de ejemplo:

```bash
cp .env.local.example .env.local
```

Y rellena:

```
ANTHROPIC_API_KEY=sk-ant-...
```

Sin esta variable, el resto de la app funciona con normalidad; solo el chat con Laia devolverá un aviso indicando que falta configurar la key.

## Scripts

- `npm run dev` — entorno de desarrollo
- `npm run build` — build de producción
- `npm run start` — servidor de producción (tras build)
- `npm run lint` — ESLint

## Despliegue en Vercel

1. Sube el repositorio a GitHub/GitLab/Bitbucket.
2. Importa el proyecto en Vercel.
3. Define la variable de entorno `ANTHROPIC_API_KEY` en la configuración del proyecto (Settings → Environment Variables).
4. Despliega. No requiere configuración adicional: no hay base de datos ni servicios externos más allá de la API de Anthropic.

## Arquitectura

- El progreso del usuario (XP, racha, lecciones completadas, onboarding) se guarda en `localStorage` mediante un Context (`lib/context/UserProgressContext.tsx`) y no requiere backend propio.
- Las lecciones son contenido estático tipado en `lib/data/lessons.ts`.
- El chat con Laia llama a `app/api/chat/route.ts`, una API route server-side que es la única que tiene acceso a `ANTHROPIC_API_KEY`. El cliente nunca ve la key.
- Componentes organizados por dominio en `components/` (`ui`, `layout`, `onboarding`, `home`, `lessons`, `laia`, `profile`), cada uno con una única responsabilidad.

## Estructura de carpetas

```
app/                  Rutas (App Router)
  ├─ page.tsx          Inicio
  ├─ onboarding/        Flujo de onboarding (3 pasos)
  ├─ home/              Pantalla principal
  ├─ learn/             Listado y detalle de lecciones
  ├─ laia/              Chat con la profesora IA
  ├─ profile/           Perfil del usuario
  └─ api/chat/          Endpoint server-side hacia Anthropic
components/            Componentes reutilizables por dominio
lib/                   Tipos, datos, hooks, contexto y lógica de negocio
```

## Nota de seguridad

`npm audit` reporta 2 vulnerabilidades moderadas asociadas a una dependencia interna de `next` (versión de `postcss` empaquetada dentro de Next.js, no controlada por este proyecto). No tienen fix disponible sin forzar un downgrade incompatible de Next. No afectan a la build ni al runtime de la aplicación.
