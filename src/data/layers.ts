export interface Layer {
  number: string;
  name: string;
  description: string;
  icon: 'identity' | 'experience' | 'growth' | 'infra';
}

export const layers: Layer[] = [
  {
    number: '01',
    name: 'Capa física e infraestructura',
    description: 'Servidores, redes, cableado y sistemas locales que sostienen la operación.',
    icon: 'infra',
  },
  {
    number: '02',
    name: 'Capa de aplicación y automatización',
    description:
      'Cloud, arquitecturas backend/frontend, integraciones, automatización con n8n e IA generativa.',
    icon: 'experience',
  },
  {
    number: '03',
    name: 'Capa de negocio',
    description:
      'Alineación con OKRs, optimización de entregas y retorno de inversión medible.',
    icon: 'growth',
  },
];
