# Raktárkészlet

## Probléma

Egy kisbolt tulajdonosa, Erika, szeretné optimalizálni a raktárkészletét, hogy elkerülje a túltelítettséget és a felesleges raktározási költségeket. Ehhez szüksége van egy programra, amely segít neki nyomon követni a beérkező áruk mennyiségét.

## Feladat

Írj egy programot, amely beolvassa a standard bemenetről a **raktár maximális befogadóképességét** darabszámban. Ezután a program addig olvassa a standard bemenetről a **különböző termékek beérkezett darabszámát**, amíg a felhasználó 0-t nem ír be, vagy a beérkezett áruk összdarabszáma el nem éri a maximális befogadóképességet.

A program írja ki a standard kimenetre, végkifejlettől függően: 
- a **raktárban lévő termékek összdarabszámát**, vagy
- a **maximális befogadóképesség túllépése esetén a túllépés mértékét** (hány darabbal több, mint amennyi befért volna).

Ügyelj arra, hogy **negatív számot NE lehessen megadni** a termékek darabszámának! 


Egy példa futás:
```
Input: Mennyi a raktar max kapacitasa (db)? 200
Input: Hany darab termek erkezett? (0 a befejezeshez) 50
Input: Hany darab termek erkezett? (0 a befejezeshez) 75
Input: Hany darab termek erkezett? (0 a befejezeshez) 40
Input: Hany darab termek erkezett? (0 a befejezeshez) 30
Input: Hany darab termek erkezett? (0 a befejezeshez) 0
Output: A raktarban levo termekek osszdarabszama: 195 db.
```