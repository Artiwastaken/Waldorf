#include <stdio.h>

int primszam(int n)
{
    int i=2;

    while (i<n)
    {
        if (n%i == 0)
        {
            return 0;
        }
        i++;
    }

    return 1;
}

int main() {
    int szam;
    printf("----prim szam ellenorzo----\nadjon meg egy pozitiv egesz szamot:");
    scanf("%d", &szam);

    if (szam > 1 && primszam(szam))
    {
        printf("%d primszam", szam);
    }
    else if (szam == 1 || !primszam(szam))
    {
        printf("%d nem primszam", szam);
    }
    else
    {
        printf("a megadott szam nem megfelelo");
    }

    return 0;
}
