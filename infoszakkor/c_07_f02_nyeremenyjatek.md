## probléma

Egy telefonszolgáltató nyereményjátékot hirdet. Véletlenszerűen kiválasztanak néhány előfizetőt minden nap. Az a kiválasztott előfizető, aki egy napon először pontosan 1000 másodpercet telefonált, 1 millió forintos díjban részesül.

## feladat

Írj egy függvényt, amely megkapja paraméterként az előfizetők által telefonálással töltött másodperceket (egészeket tartalmazó tömb) és az előfizetők számát (egész szám).

A függvény kétféle egészértékkel térhet vissza:
- ha volt legalább 1 ilyen előfizető, akkor a sorszámával,
- különben a -1 értékkel.

A főprogramban írd a standard outputra a tömb összes elemét, majd teszteld a függvény működését! 

A tömböt feltöltheted inicializációval, beolvasással, vagy véletlenszámokkal is.

Példa futás:
```
Std. Input:
Előfizetők száma: 7

Std. Output:
Telefonalt mp-ek: 431 0 1000 912 1230
Nyertes elofizeto sorszama: 3
```