#include <stdio.h>

int main()
{
    char csapat1[100], csapat2[100];
    int pont1, pont2;

    printf("1. csapat neve: ");
    scanf("%s", csapat1);
    printf("1. csapat pontszama: ");
    scanf("%d", &pont1);
    printf("2. csapat neve: ");
    scanf("%s", csapat2);
    printf("2. csapat pontszama: ");
    scanf("%d", &pont2);

    printf("A tegnapi meccs eredmenye\n");
    printf("%s vs. %s\n", csapat1, csapat2);
    printf("%d : %d\n", pont1, pont2);

    if(pont1 > pont2)
    {
        printf("A(z) %s nyert!", csapat1);
    }
    else
    {
        printf("A(z) %s nyert!", csapat2);
    }

    return 0;
}
