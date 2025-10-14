#include <stdio.h>
#include <stdlib.h>

int sikeres(int tomb[], int db)
{
    int i, strigula;

    strigula = 0;
    for(i=1; i<db; i++)
    {
        if(tomb[i] > tomb[i-1])
        {
            strigula++;
        }
    }

    return strigula;
}

int main()
{
    int i, db;

    printf("Napok szama: ");
    scanf("%d", &db);

    int vendegek[db];

    i = 0;
    while(i < db)
    {
        scanf("%d", &vendegek[i]);
        i++;
    }

    printf("Vendegek:");
    for(i=0; i<db; i++)
    {
        printf(" %d", vendegek[i]);
    }
    printf("\n");
    printf("Sikeres napok szama: %d", sikeres(vendegek, db));

    return EXIT_SUCCESS;
}
