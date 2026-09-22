// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dentro de Docker (Windows) los eventos del sistema de archivos no siempre
// llegan al contenedor: con CHOKIDAR_USEPOLLING=true Vite sondea y el hot-reload
// funciona igual. En local se deja desactivado para no gastar CPU.
const usePolling = process.env.CHOKIDAR_USEPOLLING === 'true';

// En desarrollo ningún recurso se cachea: siempre ves la última versión.
/** @type {import('vite').Plugin} */
const devNoStore = {
  name: 'dev-no-store',
  apply: 'serve',
  configureServer(server) {
    server.middlewares.use((_req, res, next) => {
      res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
      next();
    });
  },
};

// https://astro.build/config
export default defineConfig({
  site: 'https://soyarquitectodigital.info',
  trailingSlash: 'ignore',
  redirects: {
    '/herramientas': '/soluciones',
    '/herramientas/diagnostico-ecosistema-digital': '/soluciones/diagnostico-ecosistema-digital',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/gracias'),
    }),
  ],
  vite: {
    plugins: [tailwindcss(), devNoStore],
    server: usePolling
      ? { watch: { usePolling: true, interval: 250 } }
      : {},
  },
});
