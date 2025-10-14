## probléma

Készíteni szeretnél egy egyszerű játékot, a következő szabályokkal:

- a számítógép "gondol" egy számra 1 és 20 között
- a játékos megtippeli a számot
- a játékos 100 pontot szerezhet, ha eltalálja a számot
- ha nem talál a tipp, távolságonként 10 pont levonás jár
- 0-nál kevesebb pontot nem lehet szerezni

## példák
szám: 1  
tipp: 19  
pont: 0

szám: 20  
tipp: 18  
pont: 80

szám: 17  
tipp: 10  
pont: 30

szám: 5  
tipp: 5  
pont: 100

## feladat

Írj egy programot, ami generál egy véletlenszámot, aztán beolvas egy egész számot a standard inputról.

Írd a *számot*, a *tippet* és a *pontszámot* a standard outputra.

Egy példa futás:
```
Std. Input:	
Gondoltam egy szamra 1 es 20 kozott. A tipped: 5

Std. Output:
szam: 6
tipp: 5
90 pontot szereztel!
```