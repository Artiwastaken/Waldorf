## probléma

Kockapóker játékot szeretnénk programozni. Az első lépés, hogy a kockadobást szimuláljuk a játékban.

Írj egy programot, ami 5 db kockadobást szimulál véletlenszámok előállításával.
A szabályok szerint bármelyik kocka újradobható, legfeljebb kétszer (akár az összes kocka is).

## feladat

Írd az 5 db kocka dobásának eredményét a standard outputra. A dobások után olvasd be a standard inputról, hogy hanyadik kockákat akarja a játékos újradobni.
A 0 jelzi az input végét.

A 2 3 4 0 input sorozat azt jelenti, hogy a 2., 3. és a 4. kockákat dobjuk újra.
A 0 input azt jelenti, hogy egyik kockát sem dobjuk újra.

Két példa futás:

```
Output: 1 1 2 4 6
Input:  2 3 4 0
Output: 1 5 6 3 6
Input:  0
Output: 1 5 6 3 6
```

```
Output: 2 5 1 3 1
Input:  1 6 0
Output: 5 5 1 3 6
Input:  4 0
Output: 5 5 1 5 6
```