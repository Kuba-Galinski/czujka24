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

1. `src/config.ts` – wpisz prawdziwy telefon, numer WhatsApp i dane do polityki prywatności.
2. `src/data/cennik.ts` – wpisz swoje stawki i ustaw `przykladowe: false`.
3. Załóż skrzynkę `kontakt@czujka24.pl` (albo zmień adres w `src/config.ts`).
4. Formularz: załóż darmowy klucz na <https://web3forms.com> i wklej go w `web3formsKlucz`.
   Bez klucza formularz otwiera gotową wiadomość w programie pocztowym klienta.
5. Wgraj zdjęcia do `public/img/` i obrazek `public/og.png`.
6. Przeczytaj treści – szczególnie program szkoleń i sekcję „Kto przyjedzie do Twojego domu”.
7. Daj politykę prywatności do sprawdzenia.
8. W `src/config.ts` ustaw `wersjaRobocza: false`.

## Wdrożenie

Każdy `git push` na gałąź `main` buduje stronę i publikuje ją na GitHub Pages
(`.github/workflows/deploy.yml`). Podgląd: <https://kuba-galinski.github.io/czujka24/>.

### Podpięcie domeny czujka24.pl (Hostinger)

1. W panelu Hostingera, w strefie DNS domeny, ustaw:

   | Typ   | Nazwa | Wartość                    |
   | ----- | ----- | -------------------------- |
   | A     | @     | 185.199.108.153            |
   | A     | @     | 185.199.109.153            |
   | A     | @     | 185.199.110.153            |
   | A     | @     | 185.199.111.153            |
   | CNAME | www   | kuba-galinski.github.io    |

   Usuń domyślne rekordy A i AAAA wskazujące na parking Hostingera.
2. Na GitHubie: repozytorium → Settings → Pages → Custom domain → `czujka24.pl` → Save.
3. Gdy GitHub potwierdzi DNS (zwykle do godziny), zaznacz „Enforce HTTPS”.

Adresy w kodzie przestawią się same – workflow pobiera adres strony z ustawień Pages.

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
