#include <stdio.h>
#include <time.h>
#include <math.h>

int veletlen(int a, int f)
{
    return rand()%(f-a+1)+a;
}

int main()
{
    int tojas_sor, tojas_oszlop, tipp_sor, tipp_oszlop;
    int tavolsag, tippek_szama;

    srand(time(NULL));

    tippek_szama = 0;
    tojas_sor = veletlen(1, 5);
    tojas_oszlop = veletlen(1, 5);

    printf("Udvozollek a husveti kincskereso jatekban!\nEgy tojas van elrejtve egy 5x5-os terkepen.\nProbald meg megkeresni!\n");

    do
    {
        do
        {
            printf("Adj meg egy koordinatat (sor oszlop): ");
            scanf("%d %d", &tipp_sor, &tipp_oszlop);

            if(tipp_sor < 1 || tipp_sor > 5 ||tipp_oszlop < 1 || tipp_oszlop > 5)
            {
                printf("Hibas koordinata! Adj meg egy masikat 1 es 5 kozott!\n");
            }
        } while(tipp_sor < 1 || tipp_sor > 5 ||tipp_oszlop < 1 || tipp_oszlop > 5);

        tippek_szama += 1;
        tavolsag = abs(tipp_sor - tojas_sor) + abs(tipp_oszlop - tojas_oszlop);

        if(tipp_sor == tojas_sor && tipp_oszlop == tojas_oszlop)
        {
            printf("Gratulalok! Megtalaltad a tojast %d probalkozas utan!\n", tippek_szama);
        }
        else if(tavolsag == 1)
        {
            printf("Forro! Nagyon kozel vagy a kincshez!\n\n");
        }
        else if(tavolsag <= 3)
        {
            printf("Meleg! A kincs mar nincs messze!\n\n");
        }
        else
        {
            printf("Hideg! Tavol vagy a kincstol!\n\n");
        }
    } while(tipp_sor != tojas_sor || tipp_oszlop != tojas_oszlop);


    return 0;
}
