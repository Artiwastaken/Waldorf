# Tojáskeresés

## Probléma

Szeretnénk egy programot készíteni olyan gyerekek számára, akik bizonyos körülmények vagy adottságok miatt nem mehetnek el húsvéti tojásvadászatra, viszont így ők is átélhetik ennek a játéknak az izgalmát.

## Feladat

Írj egy programot ciklust használva, amely egy 5×5-ös területen „elrejt” egy tojást véletlenszerűen. A felhasználótól kérjen be tippet addig, amíg meg nem találja a tojást.

Adj segítséget a tojás megtalálásához az alábbi módon:
- Ha megtalálta a tojást, akkor megjelenik az "Gratulalok! Megtalaltad a tojast <X> probalkozas utan!" üzenet, X helyén a próbálkozások számával,
- Ha a két koordinátának a távolsága pontosan 1, akkor megjelenik a "Forro! Nagyon kozel vagy a kincshez!" üzenet,
- Ha a két koordinátának a távolsága legfeljebb 3, akkor megjelenik a "Meleg! A kincs mar nincs messze!" üzenet,
- Egyébként pedig megjelenik a "Hideg! Tavol vagy a kincstol!" üzenet.

A koordináták távolságát így számoljuk:
- (2, 3) (1, 5) esetén a távolság 3 (x távolság: 1 + y távolság: 2)
- (2, 3) (2, 8) esetén a távolság 5 (x távolság: 0 + y távolság: 5)
- (3, 4) (3, 4) esetén a távolság 0 (x távolság: 0 + y távolság: 0)

Ügyelj arra, hogy a beolvasott sor és az oszlop száma számot CSAK 1 és 5 közötti egész szám lehessen!

Egy példa futás:
```
Udvozollek a husveti kincskereso jatekban!
Egy tojas van elrejtve egy 5x5-os terkepen.
Probald meg megkeresni!

Adj meg egy koordinatat (sor oszlop): 1 1
Hideg! Tavol vagy a kincstol!

Adj meg egy koordinatat (sor oszlop): 2 3
Meleg! A kincs mar nincs messze!

Adj meg egy koordinatat (sor oszlop): 2 2
Meleg! A kincs mar nincs messze!

Adj meg egy koordinatat (sor oszlop): 3 2
Hideg! Tavol vagy a kincstol!

Adj meg egy koordinatat (sor oszlop): 2 4
Forro! Nagyon kozel vagy a kincshez!

Adj meg egy koordinatat (sor oszlop): 3 4
Meleg! A kincs mar nincs messze!

Adj meg egy koordinatat (sor oszlop): 2 5
Gratulalok! Megtalaltad a tojast 7 probalkozas utan!
```