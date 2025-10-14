## probléma

Edina az egészséges életmód jegyében szabadidejében futni kezdett.
A telefonján telepített alkalmazás az év minden napján rögzíti, hogy hány métert futott. Ebbe beletartoznak azok a napok is, amikor nem futott egy métert sem.

## feladat

Írj egy programot, ami kimutatást készít Edina tavalyi évi teljesítményéről. Az alábbi kérdésekre keressük a választ:

- Hány kilométert futott összesen Edina tavaly?
- Egy napon átlagosan hány métert teljesített?
- Hány napból állt a leghosszabb, megszakítások nélküli szériája?
- Hány olyan nap volt, amikor csúcsteljesítménye volt? Csúcsteljesítménynek tekintjük, amikor egy napon az előző- és a következő naptól is többet futott.
- Hány napos volt a leghosszabb felfelé ívelő tendencia?
- Melyik volt a leghosszabb táv, amit egy kihagyás utáni napon futott Edina?
- Hanyadik napon futotta a legkisebb távot Edina? Azokat a napokat hagyd figyelmen kívül, amikor Edina nem ment el futni!

A főprogramban a tavalyi évhez tartozó adatokat véletlenszámokkal szimuláljuk: ha az előző év szökőév volt 366, egyébként 365 egész számot generálunk, az alábbi szabályoknak megfelelően:

- 10% esély volt rá, hogy egy napon nem futott Edina,
- ha futott, akkor 50% eséllyel 1 és 1500 méter közötti,
- szintén 50% eséllyel viszont 1501 és 5000 méter közötti távot teljesített.


Példa futás:
```
Std. Output:
  1. nap:  508 meter
  2. nap: 1402 meter
...
364. nap:    0 meter
365. nap: 1313 meter

Ossztav: 748.13 km
Atlag tav: 2.54 km
Leghosszabb szeria: 39 nap
Csucsteljesitmeny: 102 nap
Leghosszabb novekvo tendencia: 15 nap
Legtobb kihagyas utani: 989 meter
Legkisebb tav ekkor: 84. nap
```