#include <stdio.h>
#include <math.h>

int main()
{
    int i, testfelepites, szorzet, ugyesseg;
    i = 1;

    do
    {
        printf("Testfelepitesre jaro pont: ");
        scanf("%d", &testfelepites);

        printf("Szorzetre jaro pont: ");
        scanf("%d", &szorzet);

        printf("Ugyessegre jaro pont: ");
        scanf("%d", &ugyesseg);

        printf("%d. macska osszpontszama: %d\n", i, testfelepites+szorzet+ugyesseg);
        i++;
    }
    while(testfelepites >= 3 && szorzet >= 3 && ugyesseg >= 3);

    return 0;
}
