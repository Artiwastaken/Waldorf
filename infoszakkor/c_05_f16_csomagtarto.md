# Csomagtartó

## Probléma

Béla el akar utazni, de a kocsijába nem tehet bele mindent, mert ha túlpakolja, az autó túl nehéz lesz. Ezért minket kért meg, hogy írjunk egy programot, amely segít neki nyomon követni a csomagtartó terhelését.

## Feladat

Írj egy programot, amely beolvassa a standard bemenetről a csomagtartó maximális terhelhetőségét kilogrammban. Ezután a program addig olvassa a standard bemenetről a különböző csomagok súlyát, amíg a felhasználó 0-t nem ír be, vagy a csomagok össztömege el nem éri a maximális terhelhetőséget.

A program kiírja végkifejlettől függően a 
- a csomagot összsúlyát, vagy a
- maximális súly túllépése esetén a túllépés mértékét.

Ügyelj arra, hogy negatív számot NE lehessen megadni a csomagok súlyának!

Egy példa futás:
```
Input: Mennyi a csomagtarto max kapacitasa (kg)? 50.0
Input: Mekkora a csomag sulya kg-ban? (0 a befejezeshez) 17.5
Input: Mekkora a csomag sulya kg-ban? (0 a befejezeshez) 17.5
Input: Mekkora a csomag sulya kg-ban? (0 a befejezeshez) 10.0
Input: Mekkora a csomag sulya kg-ban? (0 a befejezeshez) 5.0
Output: A csomagtartoban levo csomagok sulyanak osszege: 50.00 kg.
```