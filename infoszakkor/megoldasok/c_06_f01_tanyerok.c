#include <stdio.h>
#include <stdlib.h>

int main()
{
    int tanyer_db, i;

    printf("Hany tanyerra lesz szukseg? : ");
    scanf("%d", &tanyer_db);

    int tanyerok[tanyer_db];

    i = 0;

    while(i < tanyer_db)
    {
        printf("%d. tanyer atmeroje (cm): ", i+1);
        scanf("%d", &tanyerok[i]);
        i++;
    }

    i = tanyer_db - 1;
    printf("A tanyerok talalaskor\n----------------\n");

    while(i >= 0)
    {
        printf("%d. tanyer: %d cm\n", tanyer_db-(i), tanyerok[i]);
        i--;
    }

    return EXIT_SUCCESS;
}
