import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public');

const font = "Segoe UI, Arial, sans-serif";

/*
 * Inter se embebe en el SVG como @font-face en base64 para acercar la tarjeta
 * a la tipografía tipo iPhone del sitio. Si el renderizador la ignora, la pila
 * de respaldo (Segoe UI/Arial) mantiene el mismo registro.
 */
const interFile = path.resolve(
  'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
);
const interB64 = (await readFile(interFile)).toString('base64');
const sans = "'Inter Variable', 'Segoe UI', Arial, sans-serif";

const fontFace = `@font-face { font-family: 'Inter Variable'; src: url(data:font/woff2;base64,${interB64}) format('woff2'); font-weight: 100 900; font-style: normal; }`;

/** Fondo y luces compartidos por todas las tarjetas OG del sitio (azul institucional). */
const backdrop = `
  <defs>
    <style>${fontFace}</style>
    <radialGradient id="glow" cx="84%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#1e56a0" stop-opacity="0.4"/>
      <stop offset="60%" stop-color="#1e56a0" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="6%" cy="0%" r="62%">
      <stop offset="0%" stop-color="#10293f" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="#10293f" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cool" cx="52%" cy="118%" r="55%">
      <stop offset="0%" stop-color="#7fa9e3" stop-opacity="0.12"/>
      <stop offset="70%" stop-color="#7fa9e3" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.1" fill="#ffffff" opacity="0.08"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#0a1f33"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#cool)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>
`;

/** Marca «A» con nodo, la misma del favicon y del nav. */
const mark = (accent) => `
  <g transform="translate(0, -29) scale(1.4)">
    <path d="M5 19.5 12 4.5l7 15" fill="none" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M7.7 13.7h8.6" stroke="${accent}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="12" cy="9.9" r="1.6" fill="${accent}"/>
  </g>
`;

const wordmark = (accent) => `
  <g transform="translate(72, 96)">
    ${mark(accent)}
    <text x="46" y="0" font-family="${sans}" font-size="30" font-weight="600" fill="#ffffff">Soy <tspan fill="${accent}">arquitecto</tspan> digital</text>
  </g>
`;

const ogDefault = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${backdrop}
  ${wordmark('#7fa9e3')}

  <g transform="translate(72, 208)">
    <text font-family="${sans}" font-size="56" font-weight="700" fill="#ffffff">Arquitectura de ecosistemas</text>
    <text y="76" font-family="${sans}" font-size="56" font-weight="700" fill="#ffffff">digitales y <tspan fill="#7fa9e3">CTO-as-a-Service</tspan></text>
    <text y="152" font-family="${sans}" font-size="56" font-weight="700" fill="#ffffff">para empresas en crecimiento.</text>
  </g>

  <g transform="translate(72, 472)">
    <text font-family="${font}" font-size="25" fill="#b9c6d6">Auditoría de 5 días · Implementación 4–12 semanas · CTO externo</text>
    <text y="42" font-family="${font}" font-size="22" fill="#7d8fa5">Oswaldo González Lucena · +600 proyectos · CTO en EE.UU.</text>
  </g>

  <g transform="translate(72, 560)">
    <rect x="0" y="0" width="14" height="14" rx="7" fill="#4c86d8"/>
  </g>
</svg>`;

const ogSalud = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  ${backdrop}
  ${wordmark('#7fa9e3')}

  <g transform="translate(936, 76)">
    <rect x="0" y="0" width="192" height="46" rx="23" fill="#86efac" fill-opacity="0.12" stroke="#86efac" stroke-opacity="0.4"/>
    <text x="96" y="29" text-anchor="middle" font-family="${font}" font-size="19" font-weight="600" fill="#86efac">3 plazas fundadoras</text>
  </g>

  <g transform="translate(72, 200)">
    <text font-family="${sans}" font-size="54" font-weight="700" fill="#ffffff">Tu <tspan fill="#86efac">presencia digital</tspan></text>
    <text y="74" font-family="${sans}" font-size="54" font-weight="700" fill="#ffffff">merece ser tan profesional</text>
    <text y="148" font-family="${sans}" font-size="54" font-weight="700" fill="#ffffff">como la atención que das.</text>
  </g>

  <g transform="translate(72, 472)">
    <text font-family="${font}" font-size="25" fill="#b9c6d6">Médicos · Odontólogos · Psicólogos · Nutricionistas · Fisioterapeutas</text>
    <text y="42" font-family="${font}" font-size="22" fill="#7d8fa5">Clínicas y consultorios · soyarquitectodigital.info/salud</text>
  </g>

  <g transform="translate(72, 560)">
    <rect x="0" y="0" width="14" height="14" rx="7" fill="#86efac"/>
  </g>
</svg>`;

const images = [
  { file: 'og-default.png', svg: ogDefault },
  { file: 'og-salud.png', svg: ogSalud },
];

await mkdir(outDir, { recursive: true });

for (const { file, svg } of images) {
  const outFile = path.join(outDir, file);
  await sharp(Buffer.from(svg)).png().toFile(outFile);
  console.log(`OG image generada en ${outFile}`);
}
