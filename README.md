# LabHub-UNITEC

Panel de acceso a los sistemas del **Área de Laboratorios de Ingeniería de
UNITEC**. No es un sistema con login: es un hub de tarjetas que lleva a cada
proyecto en un clic, para no tener que recordar las URLs.

| Proyecto | Área | Stack original |
| --- | --- | --- |
| Reservas de Laboratorios | Coordinación de laboratorios | React + Vite + Supabase |
| Control de Horas | Gestión de auxiliares | React + Vite + Supabase |
| Asistencias de Laboratorios | Académico | Next.js + Supabase |

Cada tarjeta permite **abrir el sistema en una pestaña nueva** o **copiar su
enlace** al portapapeles.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4 (loader de Turbopack, sin `postcss.config`)
- lucide-react para iconos
- Sin backend, sin base de datos, sin variables de entorno

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`.

Verificación antes de subir cambios:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Agregar o cambiar un proyecto

Todo vive en **`lib/proyectos.ts`**. No hay que tocar la página ni los
componentes:

```ts
{
  id: "reportes",                 // identificador único (key de React)
  nombre: "Reportes",
  descripcion: "Una o dos líneas de qué hace el sistema.",
  href: "https://mi-proyecto.app",
  area: "Coordinación",           // etiqueta del pie de la tarjeta
  acento: "cielo",                // "cielo" | "violeta" | "esmeralda"
  icono: "calendario",            // "calendario" | "reloj" | "portapapeles"
}
```

Las URLs de producción están agrupadas en las constantes `URL_RESERVAS`,
`URL_HORAS` y `URL_ASISTENCIAS` al inicio del archivo.

## Estructura

```text
app/
  layout.tsx                    # Metadata y viewport
  page.tsx                      # Header (logo UNITEC), hero y footer
  globals.css                   # Paleta, fondo y estilos de las tarjetas
  icon.png                      # Favicon (logo UNITEC sobre azul)
  apple-icon.png                # Icono para iOS
components/
  project-search.tsx            # Buscador (client) + estado de "copiado"
  project-card.tsx              # Tarjeta: acento, área, copiar enlace
lib/
  proyectos.ts                  # Fuente de datos
public/
  unitec-logo.png               # Isotipo UNITEC en blanco (navbar)
```

## Diseño

- Paleta institucional: `#04042e` (fondo), `#06065c` (fondo medio),
  `#08084a` (superficie), `#0f49b6` (acento), `#6ea2ff` (acento claro).
- Tema oscuro únicamente.
- El acento de cada tarjeta se define con `data-accent` y variables CSS
  (`--project-accent`), no con clases generadas dinámicamente: Tailwind no
  detecta clases construidas con plantillas de texto.
- Respeta `prefers-reduced-motion`.

## Notas de la integración desde v0

El diseño se generó en v0.dev y se adaptó al proyecto:

- Se eliminaron dependencias sin uso del export (`shadcn`, `@base-ui/react`,
  `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`,
  `@vercel/analytics`) y el `components/ui/button.tsx` que no se importaba.
- Los datos de ejemplo que venían dentro de `app/page.tsx` se movieron a
  `lib/proyectos.ts` (`url` → `href`, se añadieron `id` e `icono`).
- `ProjectSearch` ahora renderiza las tarjetas directamente en vez de recibirlas
  como `children` e indexarlas por posición.
- El botón "Copiar" pasó de estar superpuesto al pie de la tarjeta (con un
  `margin-right` fijo para esquivarlo) a la esquina superior derecha.
- El favicon PNG de v0 se reemplazó por el isotipo de UNITEC: `app/icon.png`
  (blanco sobre azul marino) para el navegador y `public/unitec-logo.png`
  (blanco, fondo transparente) para el navbar.
