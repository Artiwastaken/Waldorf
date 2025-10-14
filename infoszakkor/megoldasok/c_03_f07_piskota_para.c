#include <stdio.h>

int main()
{
    int liszt, cukor, tojas, sutopor, legkisebb;

    printf("liszt (kg) = ");
    scanf("%d", &liszt);
    printf("cukor (kg) = ");
    scanf("%d", &cukor);
    printf("tojas (db) = ");
    scanf("%d", &tojas);
    printf("sutopor (csomag) = ");
    scanf("%d", &sutopor);

    legkisebb = (liszt * 1000) / (6 * 20);

    if((cukor * 1000) / (6 * 20) < legkisebb)
    {
        legkisebb = (cukor * 1000) / (6 * 20);
    }
    if(tojas / 6 < legkisebb)
    {
        legkisebb = tojas / 6;
    }
    if(sutopor < legkisebb)
    {
        legkisebb = sutopor;
    }

    printf("%d adag piskotat tudsz sutni.", legkisebb);

    return 0;
}
