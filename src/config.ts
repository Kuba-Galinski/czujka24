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
  wersjaRobocza: true,

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

  // Administrator danych – widoczny tylko w polityce prywatności.
  // NIP jest opcjonalny: pusty = polityka go nie pokazuje.
  administrator: {
    nazwa: 'Tomasz Jóźków',
    adres: 'ul. Główna 60, 59-180 Gaworzyce',
    nip: '',
  },

  zasieg: {
    promienKm: 100,
    baza: 'Gaworzyce i Głogów',
    wojewodztwa: ['dolnośląskie', 'lubuskie', 'wielkopolskie'],
  },
} as const;

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
