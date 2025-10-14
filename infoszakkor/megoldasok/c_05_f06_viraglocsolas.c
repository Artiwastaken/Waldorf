#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void viraglocsolas(int viragok_szama, float ido)
{
    int viragok;
    int perc;

    perc = 0;
    viragok = 0;

    while(perc < 30 && viragok < viragok_szama)
    {
        perc = perc + 1;
        viragok = round(perc / ido);
        printf("%2d. perc: %2d a meglocsolt viragok szama\n", perc, viragok);
    }

    if(viragok < viragok_szama)
    {
        printf("%d virag maradt hatra.", (viragok_szama-viragok));
    }

}

int main()
{
    int viragok_szama;
    float ido;

    printf("A viragok szama: ");
    scanf("%d", &viragok_szama);
    printf("Egy virag locsolasahoz szukseges ido(perc): ");
    scanf("%f", &ido);

    viraglocsolas(viragok_szama, ido);

    return 0;
}
