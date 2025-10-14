## probléma

Márton egyetemista, és éppen a féléves projektjeinek eredményeit nézi át. Szeretné gyorsan megtudni, hogy az egyes projektek esetén mennyi pontot ért el a szükségeshez képest, és sikeresen teljesítette-e azokat.

## feladat

Írj egy programot, amely beolvas két egész számot a standard inputról:
- a hallgató által a projektért elért pontszámot,
- a projekt sikeres teljesítéséhez szükséges minimális pontszámot.

Írd ki a megfelelő üzenetet a standard kimenetre. A lehetséges kimenetelek:
- ha a hallgató pontszáma meghaladta a szükséges pontszámot: "Sikeresen teljesítetted: <ELÉRT_TÖBBLET> ponttal",
- ha a hallgató pontszáma kevesebb volt, mint a szükséges pontszám: "Hiányzó pontok a teljesítéshez: <HIÁNYZÓ_PONTOK> pont",
- ha pontosan a szükséges pontszámot érte el: "Éppen elégséges a teljesítéshez"

Egy példa futás:
```
Input: Projekt pontszama= 75
Input: Teljesiteshez szukseges pontszam= 60
Output: Sikeresen teljesitetted: 15 ponttal
```