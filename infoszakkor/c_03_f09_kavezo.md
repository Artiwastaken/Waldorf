# Kávézó rendelés

## Probléma

Egy kávézóban a rendelések árát a kávé mérete és típusa alapján határozzák meg. A következő szabályok érvényesek:
- **Espresso:**
	- Kicsi: 500 Ft
	- Közepes: 700 Ft
	- Nagy: 900 Ft
- **Cappuccino:**
	- Kicsi: 650 Ft
	- Közepes: 850 Ft
	- Nagy: 1050 Ft
- **Latte:**
	- Kicsi: 700 Ft
	- Közepes: 900 Ft
	- Nagy: 1100 Ft


## Feladat

Írj egy programot, ami kiszámolja a fizetendő kávé árát. A program kérdezze meg a felhasználótól a **kávé típusát** (espresso: 0, cappuccino: 1, latte: 2) és a **méretét** (kicsi: 0, közepes: 1, nagy: 2).

## Egy példa futás:
```
Input: Milyen tipusu kavet szeretne? (espresso=0/cappuccino=1/latte=2) 1
Input: Milyen meretu kavet szeretne? (kicsi=0/kozepes=1/nagy=2) 1
Output: Fizetendo: 850 Ft
```