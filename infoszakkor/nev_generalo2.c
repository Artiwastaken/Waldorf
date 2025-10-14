#include <stdio.h>
#include <string.h>
#include <time.h>

int veletlen(int a, int f)
{
    return rand() % (f-a+1) + a;
}

void uresseg(char fajlnev[], int vel)
{
    char betu;
    int i, enter;
    FILE* fajl;

    fajl = fopen(fajlnev, "r");
    i = veletlen(1, vel);
    enter = 0;

    while(enter != i-1)
    {
        if(fgetc(fajl) == '\n')
        {
            enter++;
        }
    }

    printf("%c", fgetc(fajl));
    do
    {
        betu = fgetc(fajl);
        if(betu != '\n')
        {
            printf("%c", betu+32);
        }
    } while(betu != '\n');

    fclose(fajl);
}

int main()
{
    char nem[6];
    int hany_nev;

    srand(time(NULL));
    printf("Milyen nevet szeretnel? (noi/ferfi)\n");
    scanf("%s", &nem);

    for(hany_nev=0;hany_nev<4;hany_nev++)
    {
        if(strcmp(nem, "ferfi") == 0)
        {
            printf("Ferfi nev: ");
            uresseg("csaladnev.txt", 100);
            printf(" ");
            uresseg("osszesffi.txt", 2005);
            printf("\n");
        }
        else if(strcmp(nem, "noi") == 0)
        {
            printf("Noi nev: ");
            uresseg("csaladnev.txt", 100);
            printf(" ");
            uresseg("osszesnoi.txt", 2682);
            printf("\n");
        }
    }

    return 0;
}
