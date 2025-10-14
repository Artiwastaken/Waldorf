## probléma

Blackjack játékot szeretnénk szimulálni.

## feladat

A szabály a következő:

- Az osztó egy véletlenszámot kap, ami 13 és 21 közötti.
- A játékos kap két véletlenszámot, 1 és 11 között.
- A 11 az ászt szimbolizálja. Az ász 1-et és 11-et is érhet, attól függően hogy a játékos lapjainak összege meghaladná-e a 21-et. Ha igen, 1-nek vesszük, ha nem akkor 11-nek.
- Az nyer akinek több pontja lesz a végén, kivéve ha meghaladja a 21-et. Akinek 21-nél több pontszáma van, automatikusan veszít.

Ezután attól függ mi történik, hogy a játékos lapjainak összege mennyi:
- Ha a játékos lapjainak összege 17-nél kisebb, még egy véletlenszámot generálunk, 1 és 11 között. Az így kapott összeg lesz a játékos végeredménye.
- Ellenkező esetben a játékos megáll, az összeg lesz a végeredménye.

A játékos végső összegének meghatározása után a program hirdessen győztest! Három eset lehetséges:
- "oszto nyert"
- "jatekos nyert"
- "dontetlen"

Írj egy programot, ami Blackjack játékot szimulál véletlenszámok előállításával.

Két példa futás:
```
Output: oszto: 16
Output: jatekos: 3 + 8 + 10 = 21
Output: jatekos nyert
```

```
Output: oszto: 17
Output: jatekos: 7 + 10 = 17
Output: dontetlen
```
