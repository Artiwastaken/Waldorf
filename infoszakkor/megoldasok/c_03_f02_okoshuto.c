#include <stdio.h>

int main()
{
    int viz_homerseklet;

    printf("legutobbi elerheto homerseklet: ");
    scanf("%d", &viz_homerseklet);

    if(viz_homerseklet < 0)
    {
        printf("a jeg elkeszult");
    }
    else
    {
        printf("a jeg meg nem keszult el");
    }

    return 0;
}
