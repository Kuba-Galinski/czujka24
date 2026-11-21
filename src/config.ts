/**
 * Jedno miejsce na wszystkie dane firmy.
 * Przed publikacją uzupełnij pola oznaczone "UZUPEŁNIJ" i ustaw `wersjaRobocza: false`.
 */
export const firma = {
  marka: 'czujka24',
  domena: 'czujka24.pl',

  /**
   * true  = strona ma baner "wersja robocza" i jest ukryta przed wyszukiwarkami (noindex).
   * false = strona publiczna. Przełącz dopiero po uzupełnieniu telefonu, e-maila i cennika.
   */
  wersjaRobocza: true,

  // UZUPEŁNIJ: numer w formacie międzynarodowym bez spacji oraz wersja do wyświetlania.
  telefon: '+48000000000',
  telefonWyswietlany: '000 000 000',

  // UZUPEŁNIJ: skrzynka musi istnieć (np. poczta w Hostingerze albo przekierowanie na prywatny adres).
  email: 'kontakt@czujka24.pl',

  // UZUPEŁNIJ: numer WhatsApp bez plusa i spacji (zwykle ten sam co telefon).
  whatsapp: '48000000000',

  // UZUPEŁNIJ (opcjonalnie): nazwa użytkownika lub strony w Messengerze, np. "czujka24". Puste = przycisk ukryty.
  messenger: '',

  /**
   * Klucz Web3Forms (https://web3forms.com – darmowy, podajesz tylko adres e-mail odbiorcy).
   * Pusty = formularz otwiera gotową wiadomość w programie pocztowym klienta.
   * Klucz Web3Forms jest publiczny z założenia, można go trzymać w repozytorium.
   */
  web3formsKlucz: '',

  // Dane do polityki prywatności – UZUPEŁNIJ przed publikacją.
  administrator: {
    nazwa: '[UZUPEŁNIJ: nazwa działalności z CEIDG]',
    adres: '[UZUPEŁNIJ: adres działalności]',
    nip: '[UZUPEŁNIJ: NIP]',
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
