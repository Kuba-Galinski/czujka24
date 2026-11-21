/**
 * Ceny "od" używane przez kalkulator oferty (strona /wycena/).
 *
 * UWAGA: poniższe kwoty są PRZYKŁADOWE – wstawione, żeby kalkulator działał.
 * Wpisz swoje stawki i ustaw `przykladowe: false`; dopóki jest `true`,
 * przy kalkulatorze wyświetla się informacja, że ceny są orientacyjne i robocze.
 */
export const cennik = {
  przykladowe: true,

  // Cena jednej czujki z baterią, brutto, zł.
  czujkaDymu: 79,
  czujkaCzadu: 129,

  // Montaż jednej czujki u klienta, zł.
  montazSztuka: 30,

  // Minimalny koszt wizyty z montażem (dojazd w zasięgu działania), zł.
  wizytaMinimum: 120,

  // Szkolenie – cena "od" za jedno spotkanie, zł.
  szkolenie: {
    dom: 300,
    wspolnota: 600,
    firma: 800,
  },

  // Rabat ilościowy na czujki i montaż: od ilu sztuk łącznie i ile procent.
  rabaty: [
    { odSztuk: 20, procent: 8 },
    { odSztuk: 50, procent: 12 },
    { odSztuk: 100, procent: 15 },
  ],
} as const;

export type Cennik = typeof cennik;
