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
| `src/config.ts`                      | telefon, e-mail, WhatsApp, zasięg, klucz formularza, tryb roboczy |
| `src/data/cennik.ts`                 | stawki „od” dla kalkulatora oferty                               |
| `src/pages/index.astro`              | strona główna                                                    |
| `src/pages/szkolenia.astro`          | oferta szkoleń                                                   |
| `src/pages/montaz-czujnikow.astro`   | poradnik montażu czujek                                          |
| `src/pages/wspolnoty.astro`          | oferta dla wspólnot i spółdzielni                                |
| `src/pages/wycena.astro`             | kalkulator, formularz, kontakt                                   |
| `src/pages/polityka-prywatnosci.astro` | polityka prywatności                                           |
| `src/styles/global.css`              | kolory, typografia, przyciski                                    |
| `public/img/`                        | zdjęcia (nazwy plików: patrz `docs/prompty-gemini.md`)           |
| `docs/prompty-gemini.md`             | prompty do wygenerowania logo i zdjęć                            |

## Przed publikacją

Strona startuje w trybie roboczym: ma żółty pasek u góry i jest ukryta przed wyszukiwarkami.

1. `src/data/cennik.ts` – wpisz swoje stawki i ustaw `przykladowe: false`.
2. `src/config.ts` – opcjonalnie NIP (polityka prywatności) i profil Messengera.
3. Przeczytaj treści – szczególnie program szkoleń i sekcję „Kto przyjedzie do Twojego domu”.
4. Daj politykę prywatności do sprawdzenia.
5. W `src/config.ts` ustaw `wersjaRobocza: false`.

Już zrobione: telefon, WhatsApp i dane administratora w `src/config.ts`, skrzynka `kontakt@czujka24.pl` (Hostinger), zdjęcia i `og.png`, formularz zapytań
przez [Web3Forms](https://web3forms.com) – konto na `kontakt@czujka24.pl`, darmowy plan
do 250 zgłoszeń miesięcznie. Klucz formularza jest publiczny z założenia i leży w `src/config.ts`.

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
- Bez cookies, bez analityki, bez zewnętrznych skryptów.

Przy projektowaniu użyto skilli Claude Code `frontend-design` oraz
[`ui-ux-pro-max`](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill). Drugi z nich instaluje się
lokalnie w `.claude/skills/` (folder jest poza repozytorium).

## Źródła merytoryczne

- Rozporządzenie MSWiA z 21 listopada 2024 r. – [Dz.U. 2024 poz. 1716](https://eli.gov.pl/eli/DU/2024/1716/ogl/pol/pdf)
- Zalecenia montażowe PSP – [KP PSP Żary: „Czujka – co, gdzie i jak”](https://www.gov.pl/web/kppsp-zary/czujka---co-gdzie-i-jak)
