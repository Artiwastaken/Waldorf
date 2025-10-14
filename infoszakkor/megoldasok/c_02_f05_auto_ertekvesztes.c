#include <stdio.h>
#include <math.h>

double ertekvesztes(int alapertek, int ev, int romlas)
{
    return alapertek*pow(1 - (romlas/100.0), ev);
}

int main()
{
    int mennyiert_vettem, miota_van, mennyit_veszit;

    printf("<vetelar> <hasznalt_evek_szama> <ertekvesztes>= ");
    scanf("%d %d %d", &mennyiert_vettem, &miota_van, &mennyit_veszit);

    printf("Becsult ertek: %lf\n", ertekvesztes(mennyiert_vettem, miota_van, mennyit_veszit));

    return 0;
}
