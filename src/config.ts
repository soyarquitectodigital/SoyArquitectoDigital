// Agenda real (Calendly). El CTA de auditoría y el de diagnóstico apuntan aquí.
// primary_color hace que Calendly use el azul de la marca.
export const calendarAuditUrl =
  'https://calendly.com/soyarquitectodigital/auditoria-de-ecosistema-digital?primary_color=2563eb';
const calendarUrl: string = calendarAuditUrl;

export const site = {
  url: 'https://soyarquitectodigital.info',
  name: 'Soy Arquitecto Digital',
  studio: 'Olah · Arquitectura Digital',
  person: 'Oswaldo González Lucena',
  role: 'Arquitecto de Ecosistemas Digitales',
  email: 'ayuda@soyarquitectodigital.info',
  linkedin: 'https://www.linkedin.com/in/soyarquitectodigital',
  location: 'Venezuela · Remoto',
  calendarUrl,
} as const;

// WhatsApp real (Colombia). Formato wa.me: código de país + número, sin "+" ni espacios.
export const whatsappNumber = '573246454048';

export function whatsapp(message: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappDefault = whatsapp(
  'Hola Oswaldo, vi tu landing y quiero contarte qué se está atascando en mi negocio.',
);

export interface Social {
  label: string;
  handle: string;
  url: string;
  icon: 'linkedin' | 'tiktok' | 'youtube' | 'instagram';
}

export const socialHandle = '@soyarquitectodigital';

export const socials: Social[] = [
  {
    label: 'LinkedIn',
    handle: socialHandle,
    url: 'https://www.linkedin.com/in/soyarquitectodigital',
    icon: 'linkedin',
  },
  {
    label: 'TikTok',
    handle: socialHandle,
    url: 'https://www.tiktok.com/@soyarquitectodigital',
    icon: 'tiktok',
  },
  {
    label: 'YouTube',
    handle: socialHandle,
    url: 'https://www.youtube.com/@soyarquitectodigital',
    icon: 'youtube',
  },
  {
    label: 'Instagram',
    handle: socialHandle,
    url: 'https://www.instagram.com/soyarquitectodigital',
    icon: 'instagram',
  },
];

export function bookingUrl(message: string): string {
  return site.calendarUrl || whatsapp(message);
}
