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
    int tobb;
    tobb = 0;
    for(i = 0; i < mert_honapok; i++)
    {
        if(csibe[i] > 200)
        {
            tobb++;
        }
    }
    printf("%d honapban adtak el tobb, mint 200 csibeburgert.\n", tobb);

    // K2: Atlagosan melyik burgerbol mennyit vettek havonta?
    int atlagok[4] = {0};
    for(i = 0; i < mert_honapok; i++)
    {
        atlagok[0] += csibe[i];
        atlagok[1] += sajt[i];
        atlagok[2] += dupla[i];
        atlagok[3] += vega[i];
    }
    printf("Atlag eladasok:\n");
    printf("Csibeburger: %.2f, sajtburger: %.2f", 1.0 * atlagok[0] / mert_honapok, 1.0 * atlagok[1] / mert_honapok);
    printf(", dupla sajtburger: %.2f, vega burger: %.2f\n", 1.0 * atlagok[2] / mert_honapok, 1.0 * atlagok[3] / mert_honapok);

    // K3: Ha egy dupla sajtburger anyagkoltsege atlagosan 2000 Ft,
    // mennyi volt a teljes anyagkoltsege az osszes ilyen burgernek?
    int db = 0;
    for(i = 0; i < mert_honapok; i++)
    {
        db += dupla[i];
    }
    printf("Osszes dupla sajtburger koltsege: %d Ft\n", db * 2000);

    // K4: Mennyi volt a legkevesebb burger, amit egy fajtabol eladott?
    int min = csibe[0];
    for(i = 0; i < mert_honapok; i++)
    {
        if(csibe[i] < min)
        {
            min = csibe[i];
        }
        if(sajt[i] < min)
        {
            min = sajt[i];
        }
        if(dupla[i] < min)
        {
            min = dupla[i];
        }
        if(vega[i] < min)
        {
            min = vega[i];
        }
    }
    printf("Legkevesebb eladott burger egy honapban: %d db", min);
}
