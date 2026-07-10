# Ayudamigos — sitio web

Front-end estático hecho con **Astro** + **Tailwind CSS** para el proyecto social Ayudamigos.

## Requisitos

- Node.js 18 o superior

## Cómo correrlo en tu computadora

```bash
npm install
npm run dev
```

Esto abre el sitio en `http://localhost:4321`. Cada vez que guardes un archivo, el navegador se actualiza solo.

## Cómo generar la versión final (para subir a tu dominio)

```bash
npm run build
```

Esto crea la carpeta `dist/` con el sitio ya listo para publicarse. Esa es la carpeta que subes a tu hosting (Netlify, Vercel, etc.) para que `ayudamigos.org` la muestre.

## Estructura del proyecto

```
src/
  components/     Piezas reutilizables: Nav, Footer, tarjetas, olas decorativas, etc.
  layouts/
    Layout.astro  Estructura base de toda página (head, nav, footer)
  pages/
    index.astro          Inicio
    proyectos.astro      Proyectos
    donaciones.astro     Donaciones
    rifamigos.astro      Rifamigos
    inspiramigos.astro   Inspiramigos
    ayudamigos.astro     Equipo / miembros
    ser-ayudamigo.astro  Formulario para sumarse como voluntario
  styles/
    global.css    Estilos base y clases de botones reutilizables
tailwind.config.mjs  Colores, tipografías y tokens de diseño
```

## Paleta de colores

| Color | Uso |
|---|---|
| `sky` `#2EA8E0` | Color principal, secciones y enlaces activos |
| `sun` `#FFC845` | Acentos cálidos, fondos de CTA |
| `coral` `#FF6F59` | Botones principales y llamados a la acción |
| `leaf` `#4CB963` | Acentos de apoyo, sección de donaciones |
| `cream` `#FFFBF0` | Fondo general del sitio |
| `ink` `#1E2A47` | Texto principal y footer |

## Tipografías

- **Baloo 2** — títulos, botones y elementos destacados (redondeada y amigable, ideal para un proyecto dirigido también a niños).
- **Nunito** — texto de párrafo, legible y cálida.

Ambas se cargan desde Google Fonts en `src/layouts/Layout.astro`.

## Para editar contenido

Todo el texto vive directamente en cada archivo `.astro` dentro de `src/pages/`. Puedes editarlo como si fuera HTML normal. Los formularios (`ser-ayudamigo.astro`) están armados pero **no envían correo todavía**: para eso necesitarás conectarlos a un servicio como Formspree, Netlify Forms o tu propio backend.

## Siguientes pasos sugeridos

- Reemplazar los íconos y bloques de color por fotos reales de los proyectos y del equipo.
- Conectar el formulario de "Ser ayudamigo" a un servicio de envío de correos.
- Agregar Google Analytics o Plausible si quieren medir visitas.
# ayudamigos-web
