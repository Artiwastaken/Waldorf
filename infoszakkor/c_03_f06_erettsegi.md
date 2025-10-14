## probléma

Tanárként dolgozol egy iskolában, ahol a 30 fős osztályod érettségizni készül. Az iskola vezetése kérvényezte, hogy a tanulók érettségi eredményeihez az átlaguk alapján szöveges értékelésben részesüljenek.

Ez az egyébként hosszadalmas adminisztratív feladat viszont szerencsére automatizálható egy programmal.

## feladat

Írj egy programot, amely a standard inputról beolvassa egy érettségiző érdemjegyeit, egész számként, az összes érettségi tantárgyra vonatkozóan.

Írd ki a standard kimenetre az érettségiző átlagát, valamint a megfelelő üzenetet. A lehetséges kimenetelek:
- ha az átlag 5.0: "kituno eredmeny",
- ha az átlag 4.0 vagy több, de 5.0 alatti: "szep teljesitmeny",
- ha az átlag 2.5 vagy több, de 4.0: "eros kozepes",
- ha az átlag 2.5 alatti: "sajnalatos eredmeny"

Egy példa futás:
```
Std. Input:	
matek: 4
magyar: 3
tori: 5
nyelv: 4
valasztott: 5

Std. Output:
atlag: 4.2
szep teljesitmeny
```