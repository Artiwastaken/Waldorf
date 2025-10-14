#include <stdio.h>

int main()
{
    int szam;

    printf("szam= ");
    scanf("%d", &szam);

    if(szam < 1 || szam > 1000)
    {
        printf("nem megfelelo szam!");
    }
    else if(szam % 5 == 0)
    {
        printf("szep szam");
    }
    else
    {
        printf("nem szep szam");
    }

    return 0;
}
