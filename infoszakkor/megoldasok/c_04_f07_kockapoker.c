#include <stdio.h>
#include <time.h>

#define ALSO 1
#define FELSO 6

int veletlen(int a, int f)
{
    if(f < a)
    {
        int doboz;
        doboz = a;
        a = f;
        f = doboz;
    }
    return rand()%(f-a+1)+a;
}

int main()
{
    int k1, k2, k3, k4, k5, u1, u2, u3, u4, u5;

    srand(time(NULL));

    k1 = veletlen(ALSO, FELSO);
    k2 = veletlen(ALSO, FELSO);
    k3 = veletlen(ALSO, FELSO);
    k4 = veletlen(ALSO, FELSO);
    k5 = veletlen(ALSO, FELSO);

    printf("%d %d %d %d %d", k1, k2, k3, k4, k5);
    printf("\nSzeretnel-e ujradobni? (0=nem, 1=igen)\n");
    scanf("%d %d %d %d %d", &u1, &u2, &u3, &u4, &u5);

    if(u1)
    {
        k1 = veletlen(ALSO, FELSO);
    }
    if(u2)
    {
        k2 = veletlen(ALSO, FELSO);
    }
    if(u3)
    {
        k3 = veletlen(ALSO, FELSO);
    }
    if(u4)
    {
        k4 = veletlen(ALSO, FELSO);
    }
    if(u5)
    {
        k5 = veletlen(ALSO, FELSO);
    }

    printf("%d %d %d %d %d", k1, k2, k3, k4, k5);

    printf("\nSzeretnel-e ujradobni? (0=nem, 1=igen)\n");
    scanf("%d %d %d %d %d", &u1, &u2, &u3, &u4, &u5);

    if(u1)
    {
        k1 = veletlen(ALSO, FELSO);
    }
    if(u2)
    {
        k2 = veletlen(ALSO, FELSO);
    }
    if(u3)
    {
        k3 = veletlen(ALSO, FELSO);
    }
    if(u4)
    {
        k4 = veletlen(ALSO, FELSO);
    }
    if(u5)
    {
        k5 = veletlen(ALSO, FELSO);
    }

    printf("%d %d %d %d %d", k1, k2, k3, k4, k5);

    return 0;
}
