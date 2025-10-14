# Parkoló automata

## Probléma
Egy parkolóházban automata működik, ami a parkolási idő alapján számolja ki a fizetendő összeget. A parkolási díj a következőképpen alakul:

- Az első óra 500 Ft.
- Minden további megkezdett óra 300 Ft.
- Ha a parkolási idő meghaladja a 4 órát, akkor a teljes díjból 10% kedvezményt ad az automata.

## Feladat
Írj egy programot, ami kiszámolja a fizetendő parkolási díjat. A program kérdezze meg a felhasználótól, hogy hány percig parkolt.

## Egy példa futás:
```
Input: parkolasi ido (perc) = 120
Output: fizetendo osszeg: 800 Ft
Input: parkolasi ido (perc) = 250
Output: fizetendo osszeg: 1530 Ft
```