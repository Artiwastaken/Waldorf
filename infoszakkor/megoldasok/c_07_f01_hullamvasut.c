#include <stdio.h>
#include <stdlib.h>

int jegyek(int tomb[], int db, int hatar)
{
    int i, strigula;

    strigula = 0;
    for(i=0; i<db; i++)
    {
        if(tomb[i] >= hatar)
        {
            strigula++;
        }
    }

    return strigula;
}

int main()
{
    int i, db, limit;

    printf("Sorban allo vendegek: ");
    scanf("%d", &db);

    int vendegek[db];

    i = 0;
    while(i < db)
    {
        scanf("%d", &vendegek[i]);
        i++;
    }

    printf("Minimum magassag: ");
    scanf("%d", &limit);

    printf("Vendegek:");
    for(i=0; i<db; i++)
    {
        printf(" %d", vendegek[i]);
    }
    printf("\n");
    printf("Nyomtatando jegyek: %d db", jegyek(vendegek, db, limit));

    return EXIT_SUCCESS;
}
