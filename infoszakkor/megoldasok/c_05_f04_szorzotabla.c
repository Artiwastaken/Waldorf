#include <stdio.h>

void szorzo_tabla(int szorzando)
{
    int i;

    i=1;

    while(i<11)
    {
        printf("%2d * %2d = %4d\n", i, szorzando, i*szorzando);
        i++;
    }
}

int main()
{
    int szam;

    printf("szorzando szam (egesz): ");
    scanf("%d", &szam);

    szorzo_tabla(szam);

    return 0;
}
