/**
 * Stawki używane przez kalkulator oferty (strona /wycena/). Kwoty brutto, w złotych.
 * Kalkulator zawsze pokazuje sumę jako cenę "od" – dokładna wycena jest indywidualna.
 */
export const cennik = {
  // true = przy kalkulatorze wyświetla się informacja, że stawki są robocze.
  przykladowe: false,

  // Cena jednej czujki z baterią – "od".
  czujkaDymu: 59,
  czujkaCzadu: 99,

  // Montaż: wizyta obejmuje dojazd i montaż pierwszej czujki, każda kolejna czujka jest doliczana.
  wizyta: 100,
  montazKolejna: 29,

  // Szkolenie – zawsze komunikowane jako "od", bez konkretnej kwoty.
  szkolenieOd: 300,
} as const;

export type Cennik = typeof cennik;
