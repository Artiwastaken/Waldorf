#include <stdio.h>
#include <stdlib.h>

int penzgyujtes(int osszegyujtendo, int napi_felretett)
{
    int nap;
    int felretett;

    nap = 1;
    felretett = 0;

    while(felretett < osszegyujtendo)
    {
        felretett = felretett + napi_felretett;
        printf("%2d. nap: %2d Ft\n", nap, felretett);
        nap = nap + 1;
    }

    return nap-1;
}

int main()
{
    int osszegyujtendo, napi_felretett;

    printf("Mennyi penzt szeretnel osszegyujteni? : ");
    scanf("%d", &osszegyujtendo);
    printf("Mennyi penzt fogsz felretenni naponta? : ");
    scanf("%d", &napi_felretett);

    printf("Ezen a napon fog majd osszegyulni a penzed: %d. nap", penzgyujtes(osszegyujtendo, napi_felretett));

    return 0;
}

