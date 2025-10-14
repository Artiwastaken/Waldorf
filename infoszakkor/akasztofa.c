#include <stdio.h>
#include <string.h>

int kirakas(int talalatok[], int szo)
{
    int osszeg;
    osszeg = 0;

    for(int i=0; i<szo; i++)
    {
        osszeg = osszeg + talalatok[i];
    }

    return osszeg == szo ? 1 : 0;
}

void kor(char betuk[], int talalatok[], int hany_betus)
{
    int ciklus_valtozo;
    ciklus_valtozo = 0;

    while(ciklus_valtozo < hany_betus)
    {
        if(talalatok[ciklus_valtozo] == 1)
        {
            printf("%c  ", betuk[ciklus_valtozo]);
        }
        else
        {
            printf("_  ");
        }
        ciklus_valtozo++;
    }
}

int tipp(char betuk[], int talalatok[], int hossz)
{
    int i, gratulalok_ugyes_vagy;
    char tipp2;
    printf("\nTipp: ");
    scanf(" %c", &tipp2);

    i = 0;
    gratulalok_ugyes_vagy = 1;

    while(i < hossz)
    {
        if(tipp2 == betuk[i])
        {
            talalatok[i] = 1;
            gratulalok_ugyes_vagy = 0;
        }
        i += 1;
    }
    return gratulalok_ugyes_vagy;
}

void akasztas(int elet)
{
    switch(elet)
    {
        case 6:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("      |\n");
            printf("      |\n");
            printf("      |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 5:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf("      |\n");
            printf("      |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 4:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf("  |   |\n");
            printf("      |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 3:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf(" /|   |\n");
            printf("      |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 2:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf(" /|\\  |\n");
            printf("      |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 1:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf(" /|\\  |\n");
            printf(" /    |\n");
            printf("      |\n");
            printf("=========\n");
            break;
        case 0:
            printf("  +---+\n");
            printf("  |   |\n");
            printf("  O   |\n");
            printf(" /|\\  |\n");
            printf(" / \\  |\n");
            printf("      |\n");
            printf("=========\n");
            break;
    }
}

int main()
{
    char feladvany[11] = "almafa";
    int hany_betus, elet;

    hany_betus = strlen(feladvany);
    int talalat[6] = {0};
    elet = 6;

    while(kirakas(talalat, hany_betus) == 0 && elet > 0)
    {
        kor(feladvany, talalat, hany_betus);
        elet = elet - tipp(feladvany, talalat, hany_betus);
        akasztas(elet);
        printf("\n");
    }

    kor(feladvany, talalat, hany_betus);

    return 0;
}
