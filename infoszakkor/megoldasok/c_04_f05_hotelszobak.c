#include <stdio.h>
#include <time.h>

int vel_kozt(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    int szoba_min, szoba_max, szobak;
    int szoba1, szoba2, szoba3;

    srand(time(NULL));

    printf("legkisebb szoba szama: ");
    scanf("%d", &szoba_min);
    printf("legnagyobb szoba szama: ");
    scanf("%d", &szoba_max);
    printf("szobak szama: ");
    scanf("%d", &szobak);

    if(szobak == 1)
    {
        szoba1 = vel_kozt(szoba_min, szoba_max);
    }
    else
    {
        szoba1 = vel_kozt(szoba_min+1, szoba_max-1);
    }

    printf("1. szoba: %d\n", szoba1);

    if(szobak > 1)
    {
        szoba2 = vel_kozt(szoba_min, szoba1-1);
        printf("2. szoba: %d\n", szoba2);
    }
    if(szobak > 2)
    {
        szoba3 = vel_kozt(szoba1+1, szoba_max);
        printf("3. szoba: %d\n", szoba3);
    }

    return 0;
}
