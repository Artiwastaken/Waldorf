## probléma

Egy barátod cikkeket ír egy online sportmagazinnak. Megkért arra, hogy írj egy programot, ami segít neki összefoglalókat generálni csapatsportokhoz.

## feladat

Írj egy programot, amely 4 információt olvas a standard bemenetről: a két csapat nevét, valamint a pontszámaikat. A csapatok nevei legfeljebb 100 karakter hosszúak lehetnek.

A program a következő üzenetet írja a standard outputra:

```
A tegnapi meccs eredmenye:
<CSAPAT1> ⁠vs. <CSAPAT2>
<PONTSZAM1> : <PONTSZAM2>
A(z) <GYOZTES_CSAPAT> nyert!
```

Egy példa futás:
```
Input: 1. csapat neve: Golden State Warriors
Input: 1. csapat pontszama: 132
Input: 2. csapat neve: Los Angeles Lakers
Input: 2. csapat pontszama: 121
Output: A tegnapi meccs eredmenye:
Output: Golden State Warriors vs. Los Angeles Lakers
Output: 132 : 121
Output: A(z) Golden State Warriors nyert!
```