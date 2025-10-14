# Bomba robban!

## Probléma

A világ sorsa a kezünkben van. Egy bombát kell hatástalanítanunk mielőtt túl késő lenne! Ehhez egy 3 jegyű számot kell megfejtenünk 100 és 999 között. 10 próbálkozásunk van. Amikor beviszünk egy számot, kétféle ritmikus sípolást hallunk:
- "-.- .. ... . -... -..."
- "-. .- --. -.-- --- -... -..."

A "-" karakter a hosszabb sípolást, a "." rövidebbet jelöli. Ha sikeresen hatástalanítjuk a bombát, akkor semmilyen hangot nem fog kiadni a doboz!

## Feladat

Írj egy programot, amely addig olvas a standard bemenetről számkombinációkat, amíg a bomba hatástalanításra kerül vagy fel nem robban!

A végkifejlettől függően a 
- "... es csend lett.", vagy a
- "BAAAAAAAANG!" üzenet jelenjen meg a standard kimeneten.

Egy példa futás:
```
Output: Bomba robban! A hatastalanitasahoz 100-999 kozotti szamot kell kitalalnod.
Output: Maximum 10 probalkozasod van.
Input: Tipp: 421
Output: -.- .. ... . -... -...
Input: Tipp: 404
Output: ... es csend lett.
```