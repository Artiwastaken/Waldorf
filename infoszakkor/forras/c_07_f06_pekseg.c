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

    // K2: Hany héten adtak el legalabb 150 zsemlet?

    // K3: Mennyi volt a **legtobb pekaru**, amit egy fajtabol eladtak egy heten?

    // K4: Ha egy pogacsa anyagkoltsege atlagosan **150 Ft**, mennyi volt a teljes anyagkoltsege az osszes eladott pogacsanak?
}
