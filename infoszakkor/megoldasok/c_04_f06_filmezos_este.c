#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int vel_kozt(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    int kocka1, kocka2, kocka3;

    srand(time(NULL));

    kocka1 = vel_kozt(1, 6);
    kocka2 = vel_kozt(1, 6);
    kocka3 = vel_kozt(1, 6);

    printf("dobasok: %d %d %d\n", kocka1, kocka2, kocka3);

    if(kocka1 == 6 || kocka2 == 6 || kocka3 == 6)
    {
        printf("akcio");
    }
    else if(kocka1 + kocka2 + kocka3 < 8)
    {
        printf("horror");
    }
    else if(kocka1 % 2 == 1 && kocka2 % 2 == 1 && kocka3 % 2 == 1)
    {
        printf("vigjatek");
    }
    else
    {
        printf("ujradobas");
    }

    return 0;
}
