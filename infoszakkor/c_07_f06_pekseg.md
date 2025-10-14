# Pékség

## probléma

Péter péksége az elmúlt években a környék egyik legkedveltebb helye lett. Rendelkezésünkre bocsátotta az elmúlt évek eladási statisztikáit a különböző pékárukra vonatkozóan, hetekre lebontva. Megkért, hogy elemezzük az eladási adatokat, hogy még sikeresebb évet zárhasson!

## feladat

Írj egy programot, ami kimutatást készít Péter eladásairól. Az alábbi kérdésekre keressük a választ: 

- Átlagosan melyik pékáruból mennyit vettek **hetente**? 
- Hány héten adtak el legalább **150 zsemlét**?
- Mennyi volt a **legtöbb pékáru**, amit egy fajtából eladtak egy héten?
- Ha egy **pogácsa** anyagköltsége átlagosan **150 Ft**, mennyi volt a teljes anyagköltsége az összes eladott pogácsának? 

A feladatban csak a kérdésekre kell válaszolnod. A beolvasásra és az adatok tárolására vonatkozó kódot a `c_07_f06_pekseg.c` fájlban találod. A tesztadatok elérhetők a `c_07_f06_pekseg_teszt.txt` szövegfájlban. 

A 4 kérdésből 2 tetszőleges kérdésre válaszolj! Plusz pontért a másik 2 feladatot is megoldhatod.


Példa futás:
```
Hany hetnyi adatunk van? 10
Add meg az eladasi adatokat.
A formatum:
(zsemle) (kifli) (pogacsa) (kenyer)
 1. het = 32 106 142 153
 2. het = 258 118 123 290
 3. het = 82 216 151 211
 4. het = 51 126 181 84
 5. het = 175 129 84 134
 6. het = 300 295 70 213
 7. het = 42 3 62 300
 8. het = 109 294 147 200
 9. het = 164 55 244 77
10. het = 17 65 278 219
Atlagok:
Zsemle: 123.00  Kifli: 140.70   Pogacsa: 148.20 Kenyer: 188.10
4 heten adtak el legalabb 150 zsemlet.
Legtobb eladaott pekaru egy heten: 300 db.
Pogacsak teljes anyagkoltsege: 222300
```