## probléma

János születésnapi zsúrt szervez a kisfiának. Az unatkozás elkerülésére rengeteg játékkal, vetélkedővel készül a gyerekeknek. Az egyik ilyen játék a héliumos lufik körül forog.

Megkért, hogy segíts neki kiszámolni, hogy a különböző méretű, gömb alakú lufik felfújásához mennyi héliumgázra lesz szüksége.

$$ V = \frac{4R^3\pi}{3} $$

## feladat

Írj egy függvényt, amelynek paramétere a lufi átmérője cm-ben megadva (float vagy double).

A függvény térjen vissza a lufi térfogatával.

A főprogramban teszteljük a függvény működését, legalább 3, különböző méretű lufi esetén. A lufik átmérőjét olvashatjuk a standard bemenetről vagy használhatunk tetszőleges tört literálokat is.

Egy példa futás:
```
Input: lufi atmeroje (cm)= 10
Output: szukseges helium: 523.59 cm3
Input: lufi atmeroje (cm)= 7.5
Output: szukseges helium: 220.89 cm3
Input: lufi atmeroje (cm)= 23
Output: szukseges helium: 6370.62 cm3
```