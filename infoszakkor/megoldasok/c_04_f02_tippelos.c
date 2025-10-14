#include <stdio.h>
#include <time.h>

int veletlen_kozott(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    int szam, tipp, pont;

    srand(time(NULL));

    szam = veletlen_kozott(1, 20);
    printf("Gondoltam egy szamra 1 es 20 kozott. A tipped: ");
    scanf("%d", &tipp);

    pont = 100 - abs(tipp-szam)*10;

    if(pont < 0)
    {
        pont = 0;
    }

    printf("szam: %d\n", szam);
    printf("tipp: %d\n", tipp);
    printf("pont: %d\n", pont);

    return 0;
}
