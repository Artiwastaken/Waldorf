#include <stdio.h>
#include <time.h>

int veletlen(int also, int felso)
{
    return rand() % (felso - also + 1) + also;
}

int main()
{
    int bomba_kod, tipp, probalkozas = 0;
    int max_probalkozas = 10;

    srand(time(NULL));
    bomba_kod = veletlen(100, 999);

    printf("Bomba robban! A hatastalanitasahoz 100-999 kozotti szamot kell kitalalnod.\n");
    printf("Maximum %d probalkozasod van.\n", max_probalkozas);

    while (probalkozas < max_probalkozas)
    {
        printf("Tipp: ");
        scanf("%d", &tipp);

        probalkozas++;

        if (tipp == bomba_kod)
        {
            printf("... es csend lett.\n");
            return 0;
        }
        else if (tipp > bomba_kod)
        {
            printf("-.- .. ... . -... -...\n");
        }
        else
        {
            printf("-. .- --. -.-- --- -... -...\n");
        }

    }

    printf("BAAAAAAAANG!\n", bomba_kod);
    return 0;
}
