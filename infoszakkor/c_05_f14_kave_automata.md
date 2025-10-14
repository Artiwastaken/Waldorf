# Kávéautomata

## Probléma

Készítsünk kávégépet! Ez az automata 200, 100, 50, 20 és 10 Ft-os érméket fogad el. Négyfajta terméket árul:

- Espresso, kódja: 1, ára: 280 Ft
- Cappuccino, kódja: 2, ára: 310 Ft
- Forró csoki, kódja: 3, ára: 320 Ft
- Citromos tea, kódja: 4, ára: 350 Ft.

## Feladat

Írj egy programot, amely addig olvassa be a bedobott érméket, amíg meg nem kapja valamelyik ital kódját! A kód megadása után írjuk a standard kimenetre a visszajárót és a „Az ital elkeszult.” feliratot.

Amennyiben a bedobott érmék száma túl kevés, a hiányzó összeget írjuk a kimenetre! 

Egy példa futás:
```
Output: 1 - Espresso: 280 Ft
Output: 2 - Cappuccino: 310 Ft
Output: 3 - Forro csoki: 320 Ft
Output: 4 - Citromos tea: 350 Ft
Input: Apro vagy kod: 200
Output: bedobott penz: 200 Ft
Input: Apro vagy kod: 100
Output: bedobott penz: 300 Ft
Input: Apro vagy kod: 50
Output: bedobott penz: 350 Ft
Input: Apro vagy kod: 3
Visszajaro: 30 Ft
Az ital elkeszult.
```

Egy másik példa futás:
```
Output: 1 - Espresso: 280 Ft
Output: 2 - Cappuccino: 310 Ft
Output: 3 - Forro csoki: 320 Ft
Output: 4 - Citromos tea: 350 Ft
Input: Apro vagy kod: 200
Output: bedobott penz: 200 Ft
Input: Apro vagy kod: 4
Output: ERROR!
Output: Hianyzo osszeg: 150 Ft
```