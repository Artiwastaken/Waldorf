# Gépjármű üzemanyag-fogyasztás

## Probléma

Egy autókölcsönző cég szeretné optimalizálni a flotta karbantartását és a költségeket. Ehhez pontosan tudniuk kell, mennyi üzemanyagot fogyasztanak az egyes autók kilométerenként. A cég úgy döntött, hogy a járművek átlagfogyasztását a következőképpen számolja ki: 
$ F = \frac{U}{M} \cdot 100 $ Ahol $ F $ az átlagfogyasztás (liter/100 km), $ U $ az elhasznált üzemanyag mennyisége (liter), és $ M $ a megtett távolság (kilométer).

## Feladat

Írj egy függvényt, amelynek paramétere az **elhasznált üzemanyag mennyisége** literben és a **megtett távolság** kilométerben megadva (legyen **float** vagy **double**). A függvény térjen vissza az autó **átlagfogyasztásával liter/100 km-ben**.

A főprogramban teszteld a függvény működését, legalább 3, különböző adatokkal rendelkező autó esetén. Az adatokat beolvashatod a standard bemenetről, vagy használhatsz tetszőleges tört literálokat is.

## Egy példa futás:
```
Input: Elhasznalt uzemanyag (liter) = 45.5
Input: Megtett tavolsag (km) = 520.0
Output: Atlagfogyasztas: 8.75 liter/100km
Input: Elhasznalt uzemanyag (liter) = 30.0
Input: Megtett tavolsag (km) = 400.0
Output: Atlagfogyasztas: 7.50 liter/100km
Input: Elhasznalt uzemanyag (liter) = 60.0
Input: Megtett tavolsag (km) = 750.0
Output: Atlagfogyasztas: 8.00 liter/100km
```