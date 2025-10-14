Henriett iskolás gyereke most tanulja a négy alapműveletet, ezért akar neki írni egy programot, ami segít a gyakorlásban.

1. A program a futtatáskor 3 sorszámozott lehetőséget kínál fel: összeadás, kivonás és szorzás. A felhasználó választáskor a standard bemeneten megadja a kívánt sorszámot.

2. Ezután a program a kiválasztott műveletből generál egy véletlenszerű feladványt, amit a felhasználó megválaszolhat. A műveletekben használt véletlenszámok 1 és 10 közé eshetnek. A felhasználó a műveletek eredményét a standard bemeneten tudja megválaszolni. Helyesen megválaszolt kérdések után a "Helyes válasz!", egyébként a "Hibás válasz!" üzenet tájékoztassa a felhasználót!

3. Addig a program addig generáljon újabb és újabb feladatokat, amíg a felhasználó 5 helyes választ nem ad.

4. Az öt helyes válaszolás után a standard kimeneten jelenjen meg az összesített statisztika.

Minta a kimenet kialakításához és a beolvasáshoz:
```
Milyen műveletet szeretne gyakorolni?
 1. Összeadás
 2. Kivonás
 3. Szorzás 
 
Választás (1-3): 1

7*4 = 28
Helyes válasz!
7*5 = 35
Helyes válasz!
5*4 = 20
Helyes válasz!
3*4 = 14
Hibás válasz!
7*7 = 49
Helyes válasz!
7*8 = 56
Helyes válasz! 

Szép munka!
Statisztika: 5 helyes eredmény a 6 feladványból.
```