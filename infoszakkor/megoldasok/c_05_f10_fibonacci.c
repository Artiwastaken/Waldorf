#include <stdio.h>
#include <stdlib.h>

int fibonacci(int szobak)
{
    int szoba, szam1, szam2, ossz;

    szoba = 1;
    szam1 = 0;
    szam2 = 1;
    ossz = szam1 + szam2;

    while(szoba <= szobak)
    {
        printf("%d. szoba: %d m2\n", szoba, szam2);
        ossz = ossz + szam2;
        szam2 = szam1 + szam2;
        szam1 = szam2 - szam1;
        szoba = szoba + 1;
    }

    return ossz;
}

int main()
{
    int szobak;

    printf("Hany szobas lesz a lakas? : ");
    scanf("%d", &szobak);

    printf("A lakas merete: %d m2", fibonacci(szobak));

    return EXIT_SUCCESS;
}
