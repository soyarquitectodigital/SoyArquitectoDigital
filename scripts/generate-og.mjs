import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public');
const outFile = path.join(outDir, 'og-default.png');

const font = "Segoe UI, Arial, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="84%" cy="0%" r="70%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.45"/>
      <stop offset="60%" stop-color="#2563eb" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="6%" cy="0%" r="62%">
      <stop offset="0%" stop-color="#123a6b" stop-opacity="0.95"/>
      <stop offset="70%" stop-color="#123a6b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="cyan" cx="52%" cy="118%" r="55%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.18"/>
      <stop offset="70%" stop-color="#22d3ee" stop-opacity="0"/>
    </radialGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.5" cy="1.5" r="1.1" fill="#ffffff" opacity="0.09"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="#071b3a"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#cyan)"/>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <g transform="translate(72, 96)">
    <text x="0" y="0" font-family="${font}" font-size="30" font-weight="600" fill="#ffffff">Soy <tspan fill="#7cb4ff">arquitecto</tspan> digital</text>
  </g>

  <g transform="translate(72, 208)">
    <text font-family="${font}" font-size="56" font-weight="700" fill="#ffffff">Arquitectura de ecosistemas</text>
    <text y="76" font-family="${font}" font-size="56" font-weight="700" fill="#ffffff">digitales y <tspan fill="#7cb4ff">CTO-as-a-Service</tspan></text>
    <text y="152" font-family="${font}" font-size="56" font-weight="700" fill="#ffffff">para empresas en crecimiento.</text>
  </g>

  <g transform="translate(72, 472)">
    <text font-family="${font}" font-size="25" fill="#b4c6e0">Auditoría de 5 días · Implementación 4–12 semanas · CTO externo</text>
    <text y="42" font-family="${font}" font-size="22" fill="#7e93b4">Oswaldo González Lucena · +600 proyectos · CTO en EE.UU.</text>
  </g>

  <g transform="translate(72, 556)">
    <rect x="0" y="0" width="14" height="14" rx="7" fill="#7cb4ff"/>
  </g>
</svg>`;

await mkdir(outDir, { recursive: true });
await sharp(Buffer.from(svg)).png().toFile(outFile);

console.log(`OG image generada en ${outFile}`);
