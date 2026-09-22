# Soy Arquitecto Digital — Landing

Landing page profesional de **Oswaldo González Lucena**, arquitecto de ecosistemas digitales y CTO-as-a-Service.
Diseño full-width, mobile-first, con animaciones propias (sin librerías) y foco en conversión por WhatsApp y agenda.

> Firma: **Olah · Arquitectura Digital** — `@soyarquitectodigital` en todas las redes.

---

## Estado actual

- **Hero** dinámico: auroras en movimiento, barrido de luz, retícula en deriva, red de nodos en canvas con pulsos de datos, titular palabra por palabra, texto typewriter y paralaje con el cursor.
- **Secciones**: autoridad (marquesinas), problema (4 dolores), solución (3 servicios), enfoque integral (3 capas), trayectoria y resultados (contadores + timeline), CTA de cierre, FAQ y footer.
- **Conversión**: botón flotante de WhatsApp, CTAs con mensaje prellenado por servicio y **agenda con Calendly** para la auditoría.
- **SEO**: metadatos, Open Graph + imagen OG generada con `sharp`, `sitemap`, `robots.txt`, `canonical` y datos estructurados (`Person`, `ProfessionalService`, `WebSite`, `FAQPage`).
- **Accesibilidad**: navegación por teclado, foco visible, `skip link`, contraste cuidado y respeto total a `prefers-reduced-motion` (con interruptor de desarrollo para forzar animaciones).
- **Entrega**: contenedor de desarrollo con hot-reload y contenedor de producción con nginx (gzip, cache de assets y cabeceras de seguridad).

---

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | Astro 7 (salida estática) |
| Estilos | Tailwind CSS 4 (tokens propios en `src/styles/global.css`) |
| Tipografía | Space Grotesk (títulos), Inter (texto), IBM Plex Mono (etiquetas) vía `@fontsource` |
| Animación | CSS + JavaScript vanilla (canvas, IntersectionObserver, sin librerías) |
| Imagen OG | `sharp` (`scripts/generate-og.mjs`) |
| Servidor | nginx 1.29 (Docker) |
| Hosting sugerido | Vercel / Netlify o Docker propio |

---

## Puesta en marcha

Requisitos: **Node 20+** y **npm**.

```bash
npm install       # dependencias
npm run dev       # http://localhost:4321 (hot reload)
npm run check     # tipos y diagnóstico de Astro
npm run build     # genera dist/ estático
npm run preview   # sirve dist/ localmente
npm run og        # regenera public/og-default.png
```

---

## Docker

### Desarrollo (hot-reload, recomendado para iterar)

```bash
npm run dev:docker        # levanta en http://localhost y http://localhost:4321
npm run dev:docker:logs   # ver el log del servidor
npm run dev:docker:down   # detener
```

Monta la carpeta del proyecto como volumen: cada guardado se refleja al instante (sin rebuild).
Usa `CHOKIDAR_USEPOLLING=true` para que el *file watching* funcione sobre el montaje de Windows.
El badge inferior muestra `DEV · VERSIÓN hh:mm:ss` y permite **forzar animaciones** cuando el sistema pide movimiento reducido.

### Producción (nginx optimizado)

```bash
npm run prod:docker       # detiene el dev y construye la imagen final
npm run prod:docker:down  # detener
```

Ambos usan el puerto 80; los scripts se detienen entre sí automáticamente.
El puerto es configurable con `APP_PORT` (ej. `$env:APP_PORT=8080; npm run prod:docker`).

---

## Configuración (un solo sitio)

Casi todo el contenido editable vive en dos lugares:

### `src/config.ts`

| Constante | Qué controla |
| --- | --- |
| `whatsappNumber` | Número de WhatsApp en formato `wa.me` (país + número, sin `+`). Actual: `573246454048`. |
| `calendarAuditUrl` | Enlace de Calendly de la auditoría (incluye `primary_color` de marca). |
| `site.email` | Correo público de contacto. |
| `site.linkedin` | Perfil de LinkedIn. |
| `socials` | LinkedIn, TikTok, YouTube e Instagram (`@soyarquitectodigital`). |
| `bookingUrl(mensaje)` | Devuelve Calendly si está configurado; si no, WhatsApp con el mensaje. |

### `src/data/`

| Archivo | Contenido |
| --- | --- |
| `services.ts` | Los 3 servicios, entregables, metadatos y si el CTA agenda (`booking: true`). |
| `signals.ts` | Dolores de la sección "El problema". |
| `layers.ts` | Las 3 capas del enfoque integral. |
| `faq.ts` | Preguntas frecuentes (también alimentan el schema `FAQPage`). |
| `cv.ts` | Experiencia, educación, docencia, stack, certificaciones y principios. |
| `stats.ts` | Cifras del hero y capacidades/entornos de la barra de autoridad. |

---

## Estructura

```
src/
  components/        # Nav, Hero, AuthorityBar, ProblemSection, ServicesSection,
                     # ApproachSection, ExperienceSection, CtaSection, FaqSection,
                     # Footer, Button, Wordmark, Eyebrow, SocialLinks, WhatsAppFloat
  data/              # contenido editable (servicios, FAQ, CV, capas…)
  layouts/
    BaseLayout.astro # <head>, SEO, schema, badge dev, scripts globales
  pages/
    index.astro      # ensambla la landing y declara los schemas
    404.astro        # página de error brandeada (noindex)
  styles/global.css  # tokens, utilidades y todas las animaciones
docker/nginx/        # configuración de nginx para producción
scripts/generate-og.mjs
public/              # favicon.svg, og-default.png, robots.txt
```

---

## Despliegue

**Vercel / Netlify** — ya existe `vercel.json` (clean URLs + cabeceras). Conecta el repositorio y publica `main`; el framework se detecta solo (Astro).

**Docker propio** — `npm run prod:docker` deja nginx sirviendo `dist/` en el puerto 80 con gzip, cache inmutable para `/_astro/` y HTML siempre revalidado.

**Dominio** — pendiente de decisión: reemplazar `soyarquitectodigital.info` por esta landing o publicarla en un subdominio. Afecta `astro.config.mjs` (`site`), `robots.txt` y el `canonical`.

---

## Roadmap / Pendientes

### Alto impacto en conversión

- [ ] **Testimonios reales** (Adrirodrigo, Bestlifecoin, ViralSolutions, M&M) + franja de logos de clientes.
- [ ] **Casos de éxito con cifras**: "problema → qué hice → resultado" (+600 proyectos, −35% tiempos, −40% incidentes, Kamgus).
- [ ] **Rangos de inversión** por servicio (hoy los tres dicen "A convenir"), con qué incluye y formas de pago.
- [ ] **Sección "para quién no es esto"** — refuerza el posicionamiento "cero humo" y filtra leads.
- [ ] **Preview del entregable**: mock del informe de auditoría y del roadmap de 90 días.
- [ ] **Video de presentación** de 30–60 s (reutilizable del canal de YouTube).
- [ ] **Comparativa** freelancer vs agencia vs arquitecto de ecosistemas.
- [ ] **Retrato profesional** (se decidió sin foto; en B2B la cara sube confianza).
- [ ] **Newsletter + lead magnet** (checklist "7 señales de que tu ecosistema necesita arquitectura").
- [ ] **Quiz interactivo** "¿qué necesita tu ecosistema?" para capturar leads cualificados.

### Conversión e infraestructura

- [ ] **Formulario de contacto** + página `/gracias` (autoresponder y checkbox de privacidad).
- [ ] **Analítica sin cookies** (Plausible/Umami) + eventos por CTA, servicio y profundidad de scroll.
- [ ] **Páginas legales**: aviso legal, política de privacidad y cookies.
- [ ] **Versión en inglés** (`/en`) para el mercado de EE.UU.
- [ ] **Core Web Vitals**: preconnect a Calendly/WhatsApp, preload de fuentes y auditoría Lighthouse + accesibilidad (axe).
- [x] **Email profesional del dominio** — contacto público: `ayuda@soyarquitectodigital.info`.
- [ ] **Google Business Profile + Search Console + Bing Webmaster** y envío del `sitemap`.
- [ ] **Monitoreo de uptime** (UptimeRobot / BetterStack).
- [ ] **Publicación automática**: `git push` a `main` con deploy en Vercel.
- [ ] **Decisión de dominio** (ver sección Despliegue).
- [ ] **Pruebas A/B** de titulares y CTAs (requiere analítica primero).

### Negocio (fuera del sitio)

- [ ] Pedir **recomendaciones en LinkedIn** y reseñas en Google.
- [ ] **Publicar** en TikTok/YouTube/Instagram (una landing con redes vacías resta).
- [ ] **Secuencia de nurturing** por email para leads que no compran de inmediato.

---

## Convenciones del proyecto

- **Contenido separado del diseño**: casi todo el texto vive en `src/data/` y `src/config.ts`; evita escribir contenido directamente en los componentes.
- **Nada de librerías de animación**: el movimiento se hace con CSS y JavaScript propio, siempre condicionado a `prefers-reduced-motion` (clase `reduce-motion` en `<html>`).
- **Codificación UTF-8**: los archivos se editan con herramientas UTF-8. No usar `Set-Content`/`Out-File` de PowerShell 5.1 sobre el código fuente (corrompe acentos).
- **Idioma**: todo el contenido está en español neutro, con el tono directo de la marca.

---

## Licencia

Contenido y marca © Oswaldo González Lucena · Olah · Arquitectura Digital. Código privado.
