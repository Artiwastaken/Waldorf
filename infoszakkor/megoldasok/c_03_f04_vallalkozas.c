#include <stdio.h>

int main()
{
    int bevetel, kiadas, profit;

    printf("elozo ev osszes kiadasa (ft)= ");
    scanf("%d", &kiadas);
    printf("elozo ev osszes bevetele (ft)= ");
    scanf("%d", &bevetel);

    profit = bevetel - kiadas;

    if(profit > 0)
    {
        printf("profit: %d ft", profit);
    }
    else if(profit < 0)
    {
        printf("kiadas: %d ft", profit*-1);
    }
    else
    {
        printf("stagnalt");
    }

    return 0;
}
