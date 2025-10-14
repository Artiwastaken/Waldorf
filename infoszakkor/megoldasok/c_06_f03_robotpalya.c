#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, tav;
    int mozgas[10] = {0};

    i = 1;
    while(i < 10)
    {
        printf("%d. es %d. pont kozott (cm): ", i, i+1);
        scanf("%d", &tav);
        mozgas[i] = mozgas[i-1] + tav;
        i++;
    }

    i = 9;
    while(i >= 0)
    {
        if(mozgas[i] > 500)
        {
            printf("%d. meresi pont: %d cm\n", i+1, mozgas[i]);
        }
        i--;
    }

    return EXIT_SUCCESS;
}
