#include <stdio.h>

int main()
{
    int zsemle[52], kifli[52], pogacsa[52], kenyer[52];
    int i, mert_hetek;

    printf("Hany hetnyi adatunk van? ");
    scanf("%d", &mert_hetek);
    printf("Add meg az eladasi adatokat.\n");
    printf("A formatum:\n(zsemle) (kifli) (pogacsa) (kenyer)\n");

    for(i = 0; i < mert_hetek; i++)
    {
        printf("%2d. het = ", i+1);
        scanf("%d %d %d %d", &zsemle[i], &kifli[i], &pogacsa[i], &kenyer[i]);
    }

    // K1: Atlagosan melyik pekarubol mennyit vettek hetente?
    int osszeg[4] = {0};

    for(i = 0; i < mert_hetek; i++)
    {
        osszeg[0] += zsemle[i];
        osszeg[1] += kifli[i];
        osszeg[2] += pogacsa[i];
        osszeg[3] += kenyer[i];
    }

    printf("Atlagok:\nZsemle: %.2f\t", 1.0 * osszeg[0] / mert_hetek);
    printf("Kifli: %.2f\t", 1.0 * osszeg[1] / mert_hetek);
    printf("Pogacsa: %.2f\t", 1.0 * osszeg[2] / mert_hetek);
    printf("Kenyer: %.2f\n", 1.0 * osszeg[3] / mert_hetek);

    // K2: Hany héten adtak el legalabb 150 zsemlet?
    int db;
    db = 0;

    for(i = 0; i < mert_hetek; i++)
    {
        if(zsemle[i] >= 150)
        {
            db++;
        }
    }
    printf("%d heten adtak el legalabb 150 zsemlet.\n", db);

    // K3: Mennyi volt a **legtobb pekaru**, amit egy fajtabol eladtak egy heten?
    int max;
    max = zsemle[0];

    for(i = 0; i < mert_hetek; i++)
    {
        if(zsemle[i] >= max)
        {
            max = zsemle[i];
        }
        if(kifli[i] >= max)
        {
            max = kifli[i];
        }
        if(pogacsa[i] >= max)
        {
            max = pogacsa[i];
        }
        if(kenyer[i] >= max)
        {
            max = kenyer[i];
        }
    }
    printf("Legtobb eladaott pekaru egy heten: %d db.\n", max);

    // K4: Ha egy pogacsa anyagkoltsege atlagosan **150 Ft**, mennyi volt a teljes anyagkoltsege az osszes eladott pogacsanak?
    int pogacsa_db;
    pogacsa_db = 0;
    for(i = 0; i < mert_hetek; i++)
    {
        pogacsa_db += pogacsa[i];
    }

    printf("Pogacsak teljes anyagkoltsege: %d", pogacsa_db*150);
}
