#include <stdio.h>

int main()
{
    float max_suly, csomag_suly, osszsuly = 0.0;

    printf("Mennyi a csomagtarto max kapacitasa (kg)? ");
    scanf("%f", &max_suly);

    csomag_suly = -1.0;

    while (csomag_suly != 0.0 && osszsuly < max_suly)
    {
        printf("Mekkora a csomag sulya kg-ban? (0 a befejezeshez) ");
        scanf("%f", &csomag_suly);

        if (csomag_suly > 0)
        {
            osszsuly += csomag_suly;
        }
        if(csomag_suly < 0)
        {
            printf("Kerlek nemnegativ erteket adj meg!\n");
        }
    }

    printf("A csomagtartoban levo csomagok sulyanak osszege: %.1f kg.\n", osszsuly);

    if (osszsuly > max_suly)
    {
        printf("Tullepte a maximalis sulyt! A tullepes: %.1f kg.\n", osszsuly - max_suly);
    }

    return 0;
}
