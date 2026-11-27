/**
 * Jedno miejsce na wszystkie dane firmy.
 * Przed publikacją uzupełnij cennik (src/data/cennik.ts) i ustaw `wersjaRobocza: false`.
 */
export const firma = {
  marka: 'czujka24',
  domena: 'czujka24.pl',

  /**
   * true  = strona ma baner "wersja robocza" i jest ukryta przed wyszukiwarkami (noindex).
   * false = strona publiczna. Przełącz dopiero po uzupełnieniu cennika i przejrzeniu treści.
   */
  wersjaRobocza: false,

  // Numer w formacie międzynarodowym bez spacji oraz wersja do wyświetlania.
  telefon: '+48721096734',
  telefonWyswietlany: '721 096 734',

  // Skrzynka w Hostingerze (plan Starter Business Email).
  email: 'kontakt@czujka24.pl',

  // Numer WhatsApp bez plusa i spacji (inny niż telefon do rozmów).
  whatsapp: '48538579392',

  // UZUPEŁNIJ (opcjonalnie): nazwa użytkownika lub strony w Messengerze, np. "czujka24". Puste = przycisk ukryty.
  messenger: '',

  /**
   * Klucz Web3Forms (https://web3forms.com – darmowy, podajesz tylko adres e-mail odbiorcy).
   * Pusty = formularz otwiera gotową wiadomość w programie pocztowym klienta.
   * Klucz Web3Forms jest publiczny z założenia, można go trzymać w repozytorium.
   */
  web3formsKlucz: 'bc3e7002-03f1-418d-9543-eb94aff1cd19',

  /**
   * Identyfikator tagu Google (statystyki Google Analytics), np. "GTM-XXXXXXXX".
   * Tag jest w nagłówku każdej strony (src/components/TagGoogle.astro), a o tym, co mierzy,
   * decyduje belka cookies (src/components/Zgoda.astro).
   * Pusty = strona bez statystyk, bez belki cookies i bez plików cookies.
   */
  tagGoogle: 'GTM-MX95F8RT',

  /**
   * Identyfikator pomiaru Google Analytics ("G-..."), do którego tag wysyła dane.
   * Potrzebny, żeby po kliknięciu "Odrzucam" wyłączyć pomiar całkowicie.
   * W Google Analytics: Administracja → Strumienie danych → strumień strony.
   */
  pomiarGoogle: 'G-NMMSC7BZZY',

  // Administrator danych – widoczny tylko w polityce prywatności.
  // NIP pokazuje się w polityce prywatności i w stopce.
  administrator: {
    nazwa: 'Tomasz Jóźków',
    adres: 'ul. Główna 60, 59-180 Gaworzyce',
    nip: '502-001-54-50',
  },

  // Miejscowość siedziby dla wyszukiwarek (dane strukturalne, src/seo.ts). Bez ulicy – usługa jest u klienta.
  siedziba: {
    miejscowosc: 'Gaworzyce',
    kod: '59-180',
    wojewodztwo: 'dolnośląskie',
    szer: 51.628,
    dl: 15.882,
  },

  zasieg: {
    promienKm: 100,
    baza: 'Gaworzyce i Głogów',
    // Środek okręgu zasięgu: Głogów. Z tych współrzędnych korzysta mapa zasięgu i dane strukturalne.
    srodek: { szer: 51.663, dl: 16.085 },
    wojewodztwa: ['dolnośląskie', 'lubuskie', 'wielkopolskie'],
  },
} as const;

/** Pod tą nazwą przeglądarka pamięta decyzję z belki cookies. */
export const kluczZgody = 'czujka24-zgoda';

export const nawigacja = [
  { href: 'szkolenia/', etykieta: 'Szkolenia' },
  { href: 'montaz-czujnikow/', etykieta: 'Jak zamontować czujniki' },
  { href: 'wspolnoty/', etykieta: 'Dla wspólnot i spółdzielni' },
] as const;

/** Buduje adres wewnętrzny z uwzględnieniem ścieżki bazowej (GitHub Pages vs własna domena). */
export function adres(sciezka = ''): string {
  const baza = import.meta.env.BASE_URL.replace(/\/$/, '');
  const czysta = sciezka.replace(/^\//, '');
  return `${baza}/${czysta}`;
}

export const linkTelefon = `tel:${firma.telefon}`;
export const linkEmail = `mailto:${firma.email}`;
export const linkWhatsapp = `https://wa.me/${firma.whatsapp}`;
export const linkMessenger = firma.messenger ? `https://m.me/${firma.messenger}` : '';
