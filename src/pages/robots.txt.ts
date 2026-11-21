import type { APIRoute } from 'astro';
import { adres, firma } from '../config';

/** W wersji roboczej strona jest zamknięta dla wyszukiwarek; po publikacji wskazuje mapę strony. */
export const GET: APIRoute = ({ site }) => {
  const tresc = firma.wersjaRobocza
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL(adres('sitemap-index.xml'), site)}\n`;

  return new Response(tresc, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
