## probléma

Egy robot egyenes vonalon mozog egy akadálypályán. A pályán 10 mérési pont van kijelölve. A program beolvassa a robot által megtett távolságot az egyes mérési pontok között.

## feladat

Írj egy programot, amely a standard inputról beolvassa a robot által megtett távolságot az egyes mérési pontok között. Összesen 9 távolságot kell beolvasni, mivel az első mérési pontnál a megtett távolság 0-nak tekinthető. A beolvasott távolságok egész számok (centiméterben).

A program írja a standard kimenetre azon mérési pontok sorszámát és az addig megtett összesített távolságot, ahol az összesített távolság meghaladja az 500 centimétert. A kiírás a legutolsó mérési ponttól az első felé történjen!

Példa futás:
```
Std. Input:
1. es 2. pont kozott (cm): 100
2. es 3. pont kozott (cm): 75
3. es 4. pont kozott (cm): 50
4. es 5. pont kozott (cm): 75
5. es 6. pont kozott (cm): 100
6. es 7. pont kozott (cm): 110
7. es 8. pont kozott (cm): 90
8. es 9. pont kozott (cm): 130
9. es 10. pont kozott (cm): 20

Std. Output:
10. meresi pont: 750 cm
 9. meresi pont: 730 cm
 8. meresi pont: 600 cm
 7. meresi pont: 510 cm
```