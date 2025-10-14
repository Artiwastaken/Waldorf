#include <stdio.h>
#include <time.h>

int veletlen_kozott(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    char nev[50];

    srand(time(NULL));

    printf("nev: ");
    scanf("%s", &nev);

    printf("%s tulajdonsagai:\n", nev);
    printf("------------------\n");
    printf("ero: %d\n", veletlen_kozott(1, 15));
    printf("ugyesseg: %d\n", veletlen_kozott(1, 15));
    printf("karizma: %d\n", veletlen_kozott(1, 15));
    printf("bolcsesseg: %d\n", veletlen_kozott(1, 15));
    printf("intelligencia: %d\n", veletlen_kozott(1, 15));
    printf("------------------\n");

    return 0;
}
