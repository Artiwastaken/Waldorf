#include <stdio.h>

int main()
{
    char nem;

    printf("Milyen nevet szeretnel? (n/f)\n");
    scanf("%c", &nem);

    if(nem == 'f')
    {
        printf("Ferfi nev: ");
    }
    else
    {
        printf("Noi nev: ");
    }

    return 0;
}
