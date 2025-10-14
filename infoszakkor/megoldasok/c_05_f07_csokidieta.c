#include <stdio.h>
#include <stdlib.h>

void csokieves(int maxkaloria)
{
    int csoki, kaloria;

    csoki = 0;
    kaloria = 0;

    while(kaloria + 75 <= maxkaloria)
    {
        csoki = csoki + 1;
        kaloria = csoki * 75;
        printf("elfogyasztott csokik: %d, ez osszesen %d kaloria\n", csoki, kaloria);
    }
}

int main()
{
    int maxkaloria;

    printf("Napi nasi kaloria limit: ");
    scanf("%d", &maxkaloria);

    csokieves(maxkaloria);

    return 0;
}
