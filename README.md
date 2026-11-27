# czujka24.pl

Strona wizytówkowa: sprzedaż i montaż czujek dymu i czadu, szkolenia przeciwpożarowe,
oferta dla wspólnot i spółdzielni. Statyczna strona w [Astro](https://astro.build), hosting na GitHub Pages.

## Uruchomienie

```bash
npm install
npm run dev      # podgląd na http://localhost:4321
npm run build    # gotowa strona w folderze dist/
```

## Co gdzie jest

| Plik                                 | Zawartość                                                        |
| ------------------------------------ | ---------------------------------------------------------------- |
| `src/config.ts`                      | telefon, e-mail, WhatsApp, zasięg, klucz formularza, tag Google, tryb roboczy |
| `src/data/cennik.ts`                 | stawki „od” dla kalkulatora oferty                               |
| `src/seo.ts`                         | dane strukturalne dla wyszukiwarek (firma, cennik, usługi, pytania) |
| `src/pages/index.astro`              | strona główna                                                    |
| `src/pages/szkolenia.astro`          | oferta szkoleń                                                   |
| `src/pages/montaz-czujnikow.astro`   | poradnik montażu czujek                                          |
| `src/pages/wspolnoty.astro`          | oferta dla wspólnot i spółdzielni                                |
| `src/pages/wycena.astro`             | kalkulator, formularz, kontakt                                   |
| `src/pages/polityka-prywatnosci.astro` | polityka prywatności                                           |
| `src/styles/global.css`              | kolory, typografia, przyciski                                    |
| `public/img/`                        | zdjęcia (nazwy plików: patrz `docs/prompty-gemini.md`)           |
| `docs/prompty-gemini.md`             | prompty do wygenerowania logo i zdjęć                            |

## Stan strony

Strona jest opublikowana: bez paska roboczego, otwarta dla wyszukiwarek (`robots.txt`, `sitemap-index.xml`).
Tryb roboczy wraca po ustawieniu `wersjaRobocza: true` w `src/config.ts` – strona dostaje wtedy żółty pasek
i blokadę indeksowania.

Wpisane: cennik w `src/data/cennik.ts`, telefon, WhatsApp i dane administratora w `src/config.ts`,
skrzynka `kontakt@czujka24.pl` (Hostinger), zdjęcia i `og.png`, formularz zapytań przez
[Web3Forms](https://web3forms.com) – konto na `kontakt@czujka24.pl`, darmowy plan do 250 zgłoszeń
miesięcznie. Klucz formularza jest publiczny z założenia i leży w `src/config.ts`.

Opcjonalnie do uzupełnienia w `src/config.ts`: profil Messengera.

## Wyszukiwarki (SEO)

- Tytuł i opis każdej podstrony to atrybuty `tytul` i `opis` w `<Base>` na górze pliku strony.
  Tytuł razem z dopiskiem „| czujka24” powinien mieć około 60 znaków, opis do około 160.
- Dane strukturalne (schema.org) generuje `src/seo.ts` z `src/config.ts` i `src/data/cennik.ts`:
  firma z zasięgiem i cennikiem na każdej stronie, do tego usługi, instrukcje montażu i pytania
  z odpowiedziami na właściwych podstronach. Zmiana ceny lub telefonu w konfiguracji poprawia je sama.
- Pytania i odpowiedzi na stronie głównej to lista `faq` w `src/pages/index.astro`.
- Strona błędu 404 ma `indeksuj={false}` i nie trafia do wyszukiwarek ani do mapy strony.
- Po wdrożeniu wynik można sprawdzić w <https://search.google.com/test/rich-results>.

## Wdrożenie

Każdy `git push` na gałąź `main` buduje stronę i publikuje ją na GitHub Pages
(`.github/workflows/deploy.yml`) pod adresem <https://czujka24.pl>.

### Domena czujka24.pl (Hostinger)

Domena jest podpięta. Strefa DNS w Hostingerze zawiera:

| Typ   | Nazwa | Wartość                    |
| ----- | ----- | -------------------------- |
| A     | @     | 185.199.108.153            |
| A     | @     | 185.199.109.153            |
| A     | @     | 185.199.110.153            |
| A     | @     | 185.199.111.153            |
| CNAME | www   | kuba-galinski.github.io    |

W ustawieniach repozytorium (Settings → Pages) domena własna to `czujka24.pl`, z wymuszonym HTTPS.
Adres `www.czujka24.pl` i stary `kuba-galinski.github.io/czujka24` przekierowują na `czujka24.pl`.
Workflow sam pobiera adres strony z ustawień Pages, więc w kodzie nie ma nic do zmiany.

## Projekt graficzny

- Kierunek: „rzut i sufit” – chłodna biel sufitu, granat munduru, czerwień wozu strażackiego
  tylko dla alarmu i głównego przycisku. Okrąg jest zarezerwowany dla czujki.
- Kroje: Sofia Sans Condensed (nagłówki) i Sofia Sans (tekst), hostowane lokalnie – bez Google Fonts.
- Bez reklam. Jedyny zewnętrzny skrypt to tag Google (statystyki Google Analytics) w nagłówku każdej
  strony (`src/components/TagGoogle.astro`). O zakresie pomiaru decyduje belka cookies na dole strony
  (`src/components/Zgoda.astro`):
  - brak decyzji – pomiar uproszczony, bez plików cookies,
  - „Akceptuję” – pełne statystyki z plikami cookies,
  - „Odrzucam” – pomiar wyłączony całkowicie, pliki cookies usunięte.

  Poza domeną `czujka24.pl` (podgląd lokalny) pomiar jest wyłączony. Identyfikatory `tagGoogle`
  i `pomiarGoogle` są w `src/config.ts`; pusty `tagGoogle` usuwa tag i belkę.

Przy projektowaniu użyto skilli Claude Code `frontend-design` oraz
[`ui-ux-pro-max`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill). Drugi z nich instaluje się
lokalnie w `.claude/skills/` (folder jest poza repozytorium).

## Źródła merytoryczne

- Rozporządzenie MSWiA z 21 listopada 2024 r. – [Dz.U. 2024 poz. 1716](https://eli.gov.pl/eli/DU/2024/1716/ogl/pol/pdf)
- Zalecenia montażowe PSP – [KP PSP Żary: „Czujka – co, gdzie i jak”](https://www.gov.pl/web/kppsp-zary/czujka---co-gdzie-i-jak)
