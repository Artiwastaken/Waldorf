## probléma

Kockapóker játékot szeretnénk programozni. Az első lépés, hogy a kockadobást szimuláljuk a játékban.

## feladat

A szabály a következő:

- 5 db hatoldalú kockával kell dobni.
- A dobások közül bármennyit újradobhatunk.
- Az újradobást legfeljebb kétszer ismételhetjük.

Írj egy programot, ami kockapóker kört szimulál véletlenszámok előállításával.

Az újradobásnál a 0 jelenti, hogy megtartjuk a kockát, az 1 pedig hogy újradobjuk.

Egy példa futás:
```
Output: 1 1 2 4 6
Input: ujradobas: 0 0 1 1 0
Output: 1 1 3 5 6
Input: ujradobas: 0 0 0 0 0
```
