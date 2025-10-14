## probléma

Lucskos József hamburgerezője már évek óta nagyon népszerű. Rendelkezésünkre bocsájtotta az elmúlt évek értekesítési statisztikáit a különböző burgerekre vonatkozóan, hónapokra lebontva. Megkért, hogy elemezzük az eladási adatokat, hogy még sikeresebb évet zárhasson!

## feladat

Írj egy programot, ami kimutatást készít József eladásairól. Az alábbi kérdésekre keressük a választ:

- Hány hónapban adott el több, mint 200 csibeburgert?
- Átlagosan melyik burgerből mennyit vettek havonta?
- Ha egy dupla sajtburger anyagköltsége átlagosan 2000 Ft, mennyi volt a teljes anyagköltsége az összes ilyen burgernek?
- Mennyi volt a legkevesebb burger, amit egy fajtából eladott?

A feladatban csak a kérdésekre kell válaszolnod. A beolvasásra és az adatok tárolására vonatkozó kódot megtalálod a c_07_f05_hamburgerezo.c fájlban. A példa bemenetet megtalálod a c_07_hamburgerezo_teszt.txt szövegfájlban.

A 4 kérdésből 2 tetszőleges kérdésre válaszolj! Plusz pontért a másik 2 feladatot is megoldhatod.

Példa futás:
```
Hany honapnyi adatunk van? 14
Add meg az eladasi adatokat.
A formatum:
(csibe) (sajt) (dupla) (vega)
 1. ev  1. honap = 127 201 164 32
 1. ev  2. honap = 178 190 129 17
 1. ev  3. honap = 201 224 131 8
 1. ev  4. honap = 279 314 144 29
 1. ev  5. honap = 455 521 129 21
 1. ev  6. honap = 421 142 176 45
 1. ev  7. honap = 500 400 300 40
 1. ev  8. honap = 721 569 201 73
 1. ev  9. honap = 632 507 152 66
 1. ev 10. honap = 579 198 121 102
 1. ev 11. honap = 1 920 11 83
 1. ev 12. honap = 542 334 176 94
 2. ev  1. honap = 186 217 235 18
 2. ev  2. honap = 198 404 100 21

9 honapban adtak el tobb, mint 200 csibeburgert.
Atlag eladasok:
Csibeburger: 358.57, sajtburger: 367.21, dupla sajtburger: 154.93, vega burger: 46.36
Osszes dupla sajtburger koltsege: 4338000 Ft
Legkevesebb eladott burger egy honapban: 1 db
```