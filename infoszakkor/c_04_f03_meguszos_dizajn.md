## probléma

Egy divatcégnek dolgozol és a feladat egy olyan programot írni, ami generál egy véletlenszerű outfitet a vásárlónak. A program véletlenszerű színeket választ a felső, nadrág/szoknya és cipő kombinációjához, így a vásárlóknak ötletet adva a vásárláshoz.

A színek előállításához használjunk RGB kódot. Az RGB a piros (red), zöld (green) és kék (blue) színek leírásával ad meg egy színt. Az egyes színek intenzitását egy 0 és 255 közötti egész szám íja le, ahol a 0 0%-os intenzitást, a 255 pedig 100%-os intenzitást jelent.

A program használhatósága érdekében a felhasználó adhat meg szín preferenciát is a ruhákhoz. Például a *piros* szín választásakor a programnak a piros színt **legalább 75%** intenzitással kell vennie. A szín preferencia megadása nem kötelező.

## feladat

Írj egy programot, ami beolvassa a színpreferenciát a standard inputról. A preferencia lehet:
- "piros"
- "zold"
- "kek"
- "-", vagy bármi más szöveg ha nincs preferencia

Írd a standard outputra a véletlenszerűen előállított színeket a felsőhöz, a nadrághoz/szoknyához és a cipőkhöz.

Egy példa futás:
```
Std. Input:	
preferencia: piros

Std. Output:
felso: RGB(255, 0, 99)
nadrag/szoknya: RGB(237, 120, 246)
cipo: RGB(221, 35, 78)
```