## probléma

Egy ottalvós buliban filmezni akartok, de mindenki másfajta filmeket szeret. Úgy döntött a csapat, hogy véletlenszerűen fogjátok kiválasztani a műfajt. Három hatoldalú kockával dobtok és a három műfaj háromféleképpen nyerhet.

- ha a dobások között van 6-os, akkor akciófilm lesz,
- ha a kockák összege kevesebb, mint 8, akkor horrorfilm lesz,
- ha mindhárom kocka páratlan és a másik két feltétel nem teljesül, akkor vígjáték lesz,
- ha egyik feltétel sem teljesül a dobást meg kell ismételni.

## feladat

Írj egy programot, ami a kockadobásokat szimulálja véletlenszámok generálásával.
A dobások eredményét és a szabályoknak megfelelő üzenetet írd a standard outputra:

- "akcio",
- "horror",
- "vigjatek",
- "ujradobas"

Egy példa futás:
```
Std. Input:	-

Std. Output:
dobasok: 1 3 5
vigjatek
```