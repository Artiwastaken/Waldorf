## probléma

Egy vidámpark IoT (Internet of Things) részlegén dolgozol. Egy új hullámvasúttal bővítik a parkot. A hullámvasútak jellegzetessége, hogy csak egy bizonyos magasság felett lehet felülni.

A feladatod egy informatikai rendszer fejlesztése, amely ellenőrzi a sorban állók magasságát. Az ellenőrzés után a gépnek automatikusan annyi jegyet kell nyomtatnia, ahány ember felülhet a hullámvasútra.

## feladat

Írj egy függvényt, amely megkapja paraméterként a sorban álló vendégek magasságát (egészeket tartalmazó tömb), a vendégek számát (egész szám) és a felüléshez szükséges minimum magasságot (egész szám).

A függvény a nyomtatandó jegyek darabszámával térjen vissza.

A főprogramban írd a standard outputra a tömb összes elemét, majd teszteld a függvény működését! 

A tömböt feltöltheted inicializációval, beolvasással, vagy véletlenszámokkal is.

Példa futás:
```
Std. Input:
Sorban allo vendegek: 5
130 139 145 153 149
Minimum magassag: 145

Std. Output:
Vendegek: 130 139 145 153 149
Nyomtatando jegyek: 3 db
```