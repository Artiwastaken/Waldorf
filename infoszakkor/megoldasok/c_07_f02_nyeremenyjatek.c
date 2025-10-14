#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int veletlen(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int nyertes(int tomb[], int db)
{
    int i, van;

    i = 0;
    van = 0;
    while(i < db && van == 0)
    {
        if(tomb[i] == 1000)
        {
            van = 1;
        }
        i++;
    }

    if(i == db)
    {
        return -1;
    }
    else
    {
        return i;
    }
}

int main()
{
    int i, db;

    srand(time(NULL));
    printf("Elofizetok szama: ");
    scanf("%d", &db);

    int idok[db];

    i = 0;
    while(i < db)
    {
        idok[i] = veletlen(0, 1500);
        i++;
    }

    printf("Telefonalt mp-ek:");
    for(i=0; i<db; i++)
    {
        printf(" %d", idok[i]);
    }
    printf("\n");
    printf("Nyertes elofizeto sorszama: %d", nyertes(idok, db));

    return EXIT_SUCCESS;
}
