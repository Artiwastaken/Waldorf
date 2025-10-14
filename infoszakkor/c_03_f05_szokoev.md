## probléma

Találtál egy programhibát a telefonod Naptár alkalmazásában. Valamiért a fejlesztők nem vették figyelembe a szökőéveket. A szökőévekben van egy plusz, 29. nap február hónapban.

Szeretnénk kijavítani a hibát, ezért írunk egy programot ami eldönti egy megadott évről, hogy szökőév-e vagy sem.

A szökőévek a következő feltételeknek tesznek eleget:
- néggyel osztható, de százzal nem
- vagy négyszázzal osztható

## feladat

Írj egy programot, amely beolvassa az évet egész számként a standard inputról:

Írd ki a megfelelő üzenetet a standard kimenetre. A lehetséges kimenetelek:
- "szokoev",
- "nem szokoev"

Egy példa futás:
```
Input: ev= 2024
Output: szokoev
```