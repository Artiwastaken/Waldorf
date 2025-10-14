#include <stdio.h>
#include <stdlib.h>

int tanulas(int targyak, int szunet)
{
    int perc, osszesen, hanyadik;

    osszesen = (targyak - 1) * szunet;
    hanyadik = 1;

    while(hanyadik <= targyak)
    {
        printf("%d. targy (perc) = ", hanyadik);
        scanf("%d", &perc);
        osszesen = osszesen + perc;
        hanyadik = hanyadik + 1;
    }

    return osszesen;
}

int main()
{
    int targyak_szama, szunet_hossz;

    printf("tantargyak szama = ");
    scanf("%d", &targyak_szama);
    printf("szunet (perc) = ");
    scanf("%d", &szunet_hossz);

    printf("osszes tanulasi ido (perc): %d", tanulas(targyak_szama, szunet_hossz));

    return 0;
}
