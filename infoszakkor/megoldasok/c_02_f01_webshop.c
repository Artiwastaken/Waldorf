#include <stdio.h>
#include <math.h>

double nettobol_bruttoba(int netto_ar)
{
    return netto_ar * 1.27;
}

int main()
{
    int termek_ar;

    scanf("%d", &termek_ar);

    printf("A termek brutto ara: %lf", nettobol_bruttoba(termek_ar));

    return 0;
}
