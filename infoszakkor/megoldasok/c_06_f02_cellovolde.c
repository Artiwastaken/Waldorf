#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int veletlen(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    int i;
    int lovesek[100];

    srand(time(NULL));

    i = 0;
    while(i < 100)
    {
        lovesek[i] = veletlen(0, 600);
        i++;
    }

    i = 99;
    printf("Telitalalatok\n");

    while(i >= 0)
    {
        if(lovesek[i] <= 9)
        {
            printf("%d. loves: %d mm\n", i, lovesek[i]);
        }
        i--;
    }

    return EXIT_SUCCESS;
}
