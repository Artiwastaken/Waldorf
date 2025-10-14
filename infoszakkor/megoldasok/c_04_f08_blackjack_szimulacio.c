#include <stdio.h>
#include <time.h>

int veletlen(int a, int f)
{
    return rand()%(f-a+1)+a;
}

int main()
{
    int lap1, lap2, lap3, oszto;
    int osszeg;

    srand(time(NULL));

    oszto = veletlen(13, 21);
    lap1 = veletlen(1, 11);
    lap2 = veletlen(1, 11);
    lap3 = veletlen(1, 11);
    osszeg = 0;

    printf("oszto: %d\n", oszto);

    if((lap1 + lap2) > 21 && lap1 == 11)
    {
        lap1 = 1;
    }
    if((lap1 + lap2) > 21 && lap2 == 11)
    {
        lap2 = 1;
    }
    osszeg = lap1 + lap2;
    printf("jatekos: %d + %d ", lap1, lap2);

    if(osszeg < 17)
    {
        if((osszeg + lap3) > 21 && lap3 == 11)
        {
            lap3 = 1;
        }
        osszeg = osszeg + lap3;
        printf("+ %d ", lap3);
    }

    printf("= %d\n", osszeg);

    if(osszeg > 21 || oszto > osszeg)
    {
        printf("oszto nyert");
    }
    else
    {
        if(osszeg > oszto)
        {
            printf("jatekos nyert");
        }
        else
        {
            printf("dontetlen");
        }
    }

    return 0;
}
