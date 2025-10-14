## probléma

Egy online cikk szerint néhány szám *szebbnek* tűnik nekünk a többinél. A szép számokra a következő szabályok vonatkoznak:
- csak 1 és 1000 közötti egész számok lehetnek,
- 5-re vagy 0-ra végződnek

```
tipp: érdemes megnézni mire valók a % és == operátorok
```

## feladat

Írj egy programot, amely beolvas egy egész számot a standard inputról.

Írd ki a standard kimenetre a megfelelő üzenetet. A lehetséges kimenetelek:
- ha a megadott szám a tartományon kívülre esik: "nem megfelelo szam!",
- ha a megadott szám a tartományon belülre esik és *szép szám*: "szep szam",
- ha a megadott szám a tartományon belülre esik és NEM *szép szám*: "nem szep szam"

Egy példa futás:
```
Input: szam= 25
Output: szep szam
```