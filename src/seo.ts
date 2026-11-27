/**
 * Dane strukturalne (schema.org, JSON-LD) dla wyszukiwarek.
 * Wszystko bierze się z src/config.ts i src/data/cennik.ts – tu nie ma nic do ręcznego uzupełniania.
 */
import { adres, firma } from './config';
import { cennik } from './data/cennik';

export type Wezel = Record<string, unknown>;

/** Pełny adres strony lub pliku, z uwzględnieniem ścieżki bazowej. */
export const pelnyAdres = (site: URL | undefined, sciezka = '') => new URL(adres(sciezka), site).href;

export const idFirmy = (site: URL | undefined) => `${pelnyAdres(site)}#firma`;
const idWitryny = (site: URL | undefined) => `${pelnyAdres(site)}#witryna`;

/** Cena "od" – w schema.org zapisuje się ją jako cenę minimalną. */
const cenaOd = (kwota: number): Wezel => ({
  priceSpecification: { '@type': 'PriceSpecification', minPrice: kwota, priceCurrency: 'PLN' },
});
const cena = (kwota: number): Wezel => ({ price: kwota, priceCurrency: 'PLN' });

const obszar = (): Wezel[] => [
  {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: firma.zasieg.srodek.szer,
      longitude: firma.zasieg.srodek.dl,
    },
    geoRadius: firma.zasieg.promienKm * 1000,
  },
  ...firma.zasieg.wojewodztwa.map((w) => ({ '@type': 'AdministrativeArea', name: `województwo ${w}` })),
];

const cennikOfert = (): Wezel => ({
  '@type': 'OfferCatalog',
  name: 'Cennik',
  itemListElement: [
    {
      '@type': 'Offer',
      name: 'Czujka dymu z baterią',
      itemOffered: { '@type': 'Product', name: 'Autonomiczna czujka dymu' },
      ...cenaOd(cennik.czujkaDymu),
    },
    {
      '@type': 'Offer',
      name: 'Czujka czadu z baterią',
      itemOffered: { '@type': 'Product', name: 'Autonomiczna czujka tlenku węgla (czadu)' },
      ...cenaOd(cennik.czujkaCzadu),
    },
    {
      '@type': 'Offer',
      name: 'Wizyta z montażem pierwszej czujki',
      itemOffered: { '@type': 'Service', name: 'Montaż czujek dymu i czadu' },
      ...cena(cennik.wizyta),
    },
    {
      '@type': 'Offer',
      name: 'Montaż każdej kolejnej czujki',
      itemOffered: { '@type': 'Service', name: 'Montaż czujek dymu i czadu' },
      ...cena(cennik.montazKolejna),
    },
    {
      '@type': 'Offer',
      name: 'Szkolenie przeciwpożarowe',
      itemOffered: { '@type': 'Service', name: 'Szkolenie przeciwpożarowe' },
      ...cenaOd(cennik.szkolenieOd),
    },
  ],
});

/** Firma jako lokalny usługodawca. Ulicy celowo nie ma – usługa jest wykonywana u klienta. */
const firmaLokalna = (site: URL | undefined): Wezel => ({
  '@type': 'LocalBusiness',
  '@id': idFirmy(site),
  name: firma.marka,
  url: pelnyAdres(site),
  description:
    'Sprzedaż i montaż czujek dymu i czadu oraz szkolenia przeciwpożarowe dla mieszkańców, wspólnot i spółdzielni. Prowadzi strażak OSP.',
  telephone: firma.telefon,
  email: firma.email,
  image: pelnyAdres(site, 'og.png'),
  logo: pelnyAdres(site, 'favicon.svg'),
  priceRange: `od ${cennik.czujkaDymu} zł`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: firma.siedziba.miejscowosc,
    postalCode: firma.siedziba.kod,
    addressRegion: firma.siedziba.wojewodztwo,
    addressCountry: 'PL',
  },
  geo: { '@type': 'GeoCoordinates', latitude: firma.siedziba.szer, longitude: firma.siedziba.dl },
  areaServed: obszar(),
  hasOfferCatalog: cennikOfert(),
});

const witryna = (site: URL | undefined): Wezel => ({
  '@type': 'WebSite',
  '@id': idWitryny(site),
  name: firma.marka,
  alternateName: firma.domena,
  url: pelnyAdres(site),
  inLanguage: 'pl-PL',
  publisher: { '@id': idFirmy(site) },
});

/** Wspólny graf każdej strony + węzły dopisane przez konkretną podstronę. */
export const graf = (site: URL | undefined, dodatkowe: Wezel[] = []): Wezel => ({
  '@context': 'https://schema.org',
  '@graph': [firmaLokalna(site), witryna(site), ...dodatkowe],
});

/** Usługa świadczona przez firmę (szkolenie, montaż w budynku). */
export const usluga = (
  site: URL | undefined,
  dane: { nazwa: string; opis: string; rodzaj: string; sciezka: string; dlaKogo?: string; cenaOd?: number },
): Wezel => ({
  '@type': 'Service',
  name: dane.nazwa,
  description: dane.opis,
  serviceType: dane.rodzaj,
  url: pelnyAdres(site, dane.sciezka),
  provider: { '@id': idFirmy(site) },
  areaServed: obszar(),
  ...(dane.dlaKogo ? { audience: { '@type': 'Audience', audienceType: dane.dlaKogo } } : {}),
  ...(dane.cenaOd ? { offers: { '@type': 'Offer', ...cenaOd(dane.cenaOd) } } : {}),
});

/** Instrukcja krok po kroku (poradnik montażu). */
export const instrukcja = (dane: {
  nazwa: string;
  opis: string;
  adres: string;
  kroki: readonly { tytul: string; opis: string }[];
}): Wezel => ({
  '@type': 'HowTo',
  name: dane.nazwa,
  description: dane.opis,
  url: dane.adres,
  inLanguage: 'pl-PL',
  step: dane.kroki.map((k, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: k.tytul,
    text: k.opis,
  })),
});

/** Pytania i odpowiedzi – tylko te, które są widoczne na stronie. */
export const pytania = (lista: readonly { pytanie: string; odpowiedz: string }[]): Wezel => ({
  '@type': 'FAQPage',
  mainEntity: lista.map((p) => ({
    '@type': 'Question',
    name: p.pytanie,
    acceptedAnswer: { '@type': 'Answer', text: p.odpowiedz },
  })),
});

/** JSON bezpieczny do wstawienia w <script>. */
export const jakoJson = (wezel: Wezel) => JSON.stringify(wezel).replace(/</g, '\\u003c');
