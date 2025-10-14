## probléma

Egy futást nyomon követő alkalmazáson dolgozol. A beépített GPS percenként küld adatokat a megtett távolságról. A feladatod az átlagsebesség és a céltávolság ismeretében percenként frissíteni a kijelzőt, amíg el nem éri a futó a célját.

## feladat

Írd egy függvényt, amely megkapja paraméterként a céltávolságot kilométerben (valós számként), valamint az átlagsebességet, km/h mértékegységben (valós számként).

A függvény írja ki a standard outputra percenként az aktuálisan megtett távolságot, egészen addig amíg a futó el nem éri a célját.

Ezután a függvény egy egész számmal tér vissza: hány percig tartott elérni a célt.

Egy példa futás:
```
Std. Input:	
tav (km): 2.5
sebesseg (km/h): 12.7

Std. Output:
 1. perc: 0.21 km
 2. perc: 0.42 km
 3. perc: 0.63 km
 4. perc: 0.85 km
 5. perc: 1.06 km
 6. perc: 1.27 km
 7. perc: 1.48 km
 8. perc: 1.69 km
 9. perc: 1.91 km
10. perc: 2.12 km
11. perc: 2.33 km
12. perc: 2.54 km
futas vege: 13. perc
```
