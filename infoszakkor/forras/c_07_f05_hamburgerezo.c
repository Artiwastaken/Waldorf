#include <stdio.h>

int main()
{
    int csibe[24], sajt[24], dupla[24], vega[24];
    int i, mert_honapok, ev, honap;

    printf("Hany honapnyi adatunk van? ");
    scanf("%d", &mert_honapok);
    printf("Add meg az eladasi adatokat.\n");
    printf("A formatum:\n(csibe) (sajt) (dupla) (vega)\n");

    for(i = 0; i < mert_honapok; i++)
    {
        ev = i / 12 + 1;
        honap = i % 12 + 1;
        printf("%2d. ev %2d. honap = ", ev, honap);
        scanf("%d %d %d %d", &csibe[i], &sajt[i], &dupla[i], &vega[i]);
    }

    // K1: Hany hanapban adott el tobb, mint 200 csibeburgert?

    // K2: Atlagosan melyik burgerbol mennyit vettek havonta?

    // K3: Ha egy dupla sajtburger anyagkoltsege atlagosan 2000 Ft,
    // mennyi volt a teljes anyagkoltsege az osszes ilyen burgernek?

    // K4: Mennyi volt a legkevesebb burger, amit egy fajtabol eladott?
}
