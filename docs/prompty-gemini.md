# Prompty do Gemini – logo i grafiki czujka24

Prompty są po angielsku, bo generator obrazów w Gemini trzyma się ich wtedy dokładniej.
Każdy prompt wklej w całości. Jeśli wynik odbiega od opisu, dopisz poprawkę jednym zdaniem
(np. „same image, but remove the text” albo „same image, cooler white balance”).

## Zasady wspólne

**Paleta strony** – podawaj ją w promptach, żeby grafiki pasowały do reszty:

| Nazwa           | Kolor     | Do czego                         |
| --------------- | --------- | -------------------------------- |
| Biel sufitu     | `#F2F4F3` | tło                              |
| Tusz            | `#17212B` | tekst, linie                     |
| Granat munduru  | `#14304E` | ciemne sekcje                    |
| Czerwień wozu   | `#C5221F` | dioda czujki, główne przyciski   |
| Zieleń wyświetlacza | `#1B725F` | czujka czadu, „sprawne”      |

**Czego unikać na zdjęciach**

- Twarzy. Wygenerowana twarz udaje konkretną osobę, której nie ma – kadruj dłonie, plecy, sylwetki.
- Herbów i emblematów PSP/OSP, naszywek, numerów operacyjnych. To znaki prawnie chronione.
- Napisów i logotypów na urządzeniach – generator i tak je przekręca.
- Ognia i dramatycznego dymu. Strona nie straszy, tylko pokazuje spokojną, fachową robotę.

**Uczciwość wobec klienta:** zdjęcia z Gemini są ilustracjami. Gdy tylko pojawią się prawdziwe zdjęcia
z montażu albo szkolenia, warto je podmienić – prawdziwe zdjęcie zawsze sprzedaje lepiej.

**Gdzie wgrać pliki:** do folderu `public/img/` pod dokładnie taką nazwą jak niżej. Strona sama
wykryje plik i pokaże go zamiast zakreskowanej ramki. Konwersja do WebP: <https://squoosh.app>
(jakość ok. 78) albo `npx sharp-cli -i wejscie.png -o public/img/nazwa.webp -f webp -q 78`.

---

## 1. Logo

Na stronie działa już znak roboczy (krążek czujki z czerwoną diodą + napis `czujka24`), narysowany
w SVG w pliku `src/components/Logo.astro`. Poniższe prompty służą do poszukania lepszej wersji.
Gemini zwraca obraz rastrowy, więc wybrany wariant trzeba potem zwektoryzować (np. w Inkscape:
Ścieżka → Wektoryzuj bitmapę) i podmienić w tym pliku oraz w `public/favicon.svg`.

### 1a. Logo poziome (znak + nazwa)

```text
Design a flat vector logo for a Polish home fire-safety brand named "czujka24".
Layout: horizontal lockup, symbol on the left, wordmark on the right, lots of empty space around.
Symbol: a round household smoke detector seen straight from below, drawn as a simple circle outline
with one inner ring of short dashes (the air vents) and a single small solid red dot in the centre
(the status LED). Geometric, minimal, no shading.
Wordmark: the exact text "czujka24", all lowercase, one word, no space, set in a bold condensed
grotesque sans-serif (similar to Sofia Sans Condensed ExtraBold or Barlow Condensed Bold), tight tracking.
Colours: dark navy-graphite #17212B for the outline and the text, fire-engine red #C5221F only for the
centre dot, plain off-white background #F2F4F3.
Style: flat, two colours, crisp edges, professional, trustworthy, works at 24 px height.
No gradients, no shadows, no 3D, no flames, no shield, no house icon, no tagline, no extra text.
Aspect ratio 3:1.
```

### 1b. Sam znak (favicon, ikona profilu)

```text
Design a flat vector app-icon style symbol, no text at all.
A round household smoke detector seen straight from below: one bold circle outline, one inner ring made
of evenly spaced short dashes, and one solid red dot exactly in the centre.
Colours: outline and dashes in dark navy-graphite #17212B, centre dot in red #C5221F, the inside of the
circle white, background off-white #F2F4F3.
Perfectly centred, symmetrical, thick lines that stay readable at 16 px.
No gradients, no shadows, no letters, no numbers, no flames. Aspect ratio 1:1.
```

### 1c. Wersja na ciemne tło

```text
Same logo as before (symbol: round smoke detector seen from below with a dashed inner ring and a red
centre dot; wordmark "czujka24" in bold condensed lowercase sans-serif), but inverted for dark
backgrounds: outline and text in pure white, centre dot in red #C5221F, solid dark navy background #14304E.
Flat vector, no gradients, no shadows, no extra text. Aspect ratio 3:1.
```

### 1d. Wariant do sprawdzenia: „24” w znaku

```text
Design a flat vector logo for "czujka24", a home fire-safety brand.
Idea: the wordmark "czujka24" in bold condensed lowercase sans-serif, where the dot of the letter "j"
is replaced by a small red circle with a thin ring around it, like the blinking LED of a smoke detector.
Everything else in dark navy-graphite #17212B on an off-white background #F2F4F3; the dot is red #C5221F.
One line, tight tracking, no symbol next to the text, no tagline.
Flat, two colours, no gradients, no shadows. Aspect ratio 3:1.
```

---

## 2. Zdjęcia na stronę

Wspólny dopisek stylu – jest już wklejony w każdy prompt, tu tylko dla porządku:

> documentary photo, natural daylight, cool neutral white balance, muted colours, realistic ordinary
> Polish apartment, no faces, no text, no logos, shallow depth of field, shot on 35 mm lens

### 2a. `montaz-sufit.webp` – strona główna, sekcja „Kto przyjedzie do Twojego domu”

Proporcje 4:5 (pion), docelowo 960 × 1200 px.

```text
Documentary photo, vertical 4:5. Close view from slightly below: two hands of a tradesperson in a plain
dark navy work sweatshirt fitting a white round smoke detector onto a white ceiling in an ordinary
Polish apartment hallway. One hand holds the detector, the other twists it onto its mounting base.
A small cordless screwdriver hangs from the belt, the top of an aluminium step ladder is visible at the
bottom edge. Soft natural daylight from a window on the left, cool neutral white balance, muted colours,
the only strong colour is a tiny red LED on the detector. No face visible, no badges, no emblems,
no text or logos on clothing or on the device. Shallow depth of field, 35 mm lens, realistic, calm.
```

### 2b. `szkolenie.webp` – nagłówek strony „Szkolenia”

Proporcje 4:5 (pion), docelowo 960 × 1200 px.

```text
Documentary photo, vertical 4:5. A small practical fire-safety training outdoors in the courtyard of a
Polish housing estate, overcast daylight. Seen from behind: an adult participant in everyday clothes
holds a red powder fire extinguisher with both hands and aims the hose low at a small metal training
tray on the ground; a light cloud of white powder drifts away. Next to them, also from behind, stands an
instructor in a plain dark navy jacket with no markings, pointing at the base of the tray. Two or three
other residents watch from a few metres away, out of focus. Apartment blocks in the soft background.
No faces visible, no real flames, no emblems or badges, no text. Muted colours, cool neutral white
balance, the extinguisher is the only red element. 35 mm lens, realistic, calm, instructive mood.
```

### 2c. `blok.webp` – nagłówek strony „Dla wspólnot i spółdzielni”

Proporcje 4:5 (pion), docelowo 960 × 1200 px.

```text
Documentary architectural photo, vertical 4:5. The clean, renovated stairwell of a typical Polish
apartment block from the 1970s–1980s: terrazzo stairs, a painted steel handrail, light walls, a row of
apartment doors on a landing, a notice board near the entrance, daylight coming through a tall window
with frosted glass. On the ceiling of the landing, clearly visible, one small white round smoke detector.
Nobody in the frame. Cool neutral white balance, muted colours, tidy and cared-for, not gloomy.
No text readable anywhere, no door numbers, no logos. Straight verticals, 24 mm lens, realistic.
```

### 2d. `test-czujki.webp` – strona „Jak zamontować czujniki”, sekcja „Test i konserwacja”

Proporcje 3:2 (poziom), docelowo 1200 × 800 px.

```text
Documentary close-up photo, horizontal 3:2. One index finger pressing the round test button in the
centre of a white smoke detector mounted on a white ceiling; the arm reaches up from the bottom-right
corner of the frame, sleeve of a plain grey sweater. A tiny red LED glows on the detector.
Lots of clean empty ceiling on the left side of the frame. Soft natural daylight, cool neutral white
balance, very muted palette. No face, no text or logo on the device. Shallow depth of field, 50 mm lens,
realistic.
```

### 2e. `og.png` – obrazek przy udostępnianiu linku (Facebook, WhatsApp, Messenger)

Proporcje 1.91:1, docelowo 1200 × 630 px. Ten plik wgraj do `public/og.png` (nie do `img/`).

```text
Minimal flat graphic, horizontal 1.91:1, solid dark navy background #14304E.
Left half: the text "Dym nie budzi." on the first line and "Czujka tak." on the second line, in white,
bold condensed sans-serif, large, left-aligned, exactly these Polish words with correct diacritics.
Below, much smaller, in white: "czujka24.pl".
Right half: a simple white line drawing of an apartment floor plan seen from above, thin white walls,
with four small white circles marking smoke detectors, each with a tiny red dot #C5221F in the centre.
Flat, two colours plus the red dots, no gradients, no shadows, no photos, generous margins.
```

Gemini czasem przekręca polskie znaki. Jeśli napis wyjdzie z błędem, wygeneruj wersję bez tekstu
(usuń z promptu akapit o „Left half”) i dodaj napis ręcznie, np. w Canvie, krojem Sofia Sans Condensed.

---

## 3. Dodatkowe grafiki (opcjonalnie)

### 3a. Zdjęcie do wizytówki Google / Facebooka (kwadrat)

```text
Documentary still-life photo, square 1:1, seen from above on a light grey workbench: a white round smoke
detector, a white carbon monoxide detector with a small LCD screen, two wall plugs with screws, a pencil
and a folded tape measure, arranged neatly with even spacing. Soft daylight, cool neutral white balance,
muted colours, the only accent is a small red LED on the smoke detector. No text, no logos, no hands.
50 mm lens, sharp, realistic.
```

### 3b. Ilustracja do ulotki na klatkę schodową

```text
Flat vector illustration, vertical A4 proportions, off-white background #F2F4F3. A simple cross-section
of a four-storey apartment block drawn with thin dark navy lines #17212B: on every floor one flat with a
small round smoke detector on the ceiling, each with a red dot #C5221F. One flat on the second floor has
a light grey cloud of smoke under the ceiling and small sound-wave arcs coming from its detector.
Large empty area at the top for a headline and at the bottom for contact details. No text in the image,
no people, no flames. Two colours plus red and light grey, no gradients, no shadows.
```
