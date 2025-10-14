## probléma

Anna egy új akváriumot szeretne vásárolni a halainak. Az akváriumok űrtartalmát literben adják meg, de Anna a rendelkezésre álló hely miatt az akvárium méreteit (hosszúság, szélesség, magasság) szeretné figyelembe venni.

Segíts neki kiszámolni, hogy a különböző méretű, téglatest alakú akváriumokat hány liter vízzel kell feltöltenie.

Az eladó javaslata alapján célszerű az akváriumokat a űrtartalom 75%-ig megtölteni vízzel.

$$ V = hosszúság * szélesség * magasság $$

1 liter = 1000 cm3

## feladat

Írj egy függvényt, amelynek paraméterei az akvárium méretei cm-ben megadva (hosszúság, szélesség, magasság).

A függvény térjen vissza a szükséges víz mennyiségével literben.

A főprogramban teszteljük a függvény működését, legalább 3, különböző méretű akvárium esetén. Az akváriumok méreteit olvashatjuk a standard bemenetről vagy használhatunk tetszőleges tört literálokat is.

Egy példa futás:
```
Input: akvarium hossza (cm)= 50
Input: akvarium szelessege (cm)= 30
Input: akvarium magassaga (cm)= 40
Output: szukseges viz: 45.00 liter
Input: akvarium hossza (cm)= 80
Input: akvarium szelessege (cm)= 35
Input: akvarium magassaga (cm)= 45
Output: szukseges viz: 94.50 liter
Input: akvarium hossza (cm)= 100
Input: akvarium szelessege (cm)= 50
Input: akvarium magassaga (cm)= 60
Output: szukseges viz: 225.00 liter
```