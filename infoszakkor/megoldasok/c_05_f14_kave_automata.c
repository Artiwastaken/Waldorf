#include <stdio.h>

void kave_automata()
{
    int penz = 0;
    int be;
    int ar;

    printf("1 - Espresso: 280 Ft\n2 - Cappuccino: 310 Ft\n3 - Forro csoki: 320 Ft\n4 - Citromos tea: 350 Ft\n");

    do {
        printf("Apro vagy kod: ");
        scanf("%d", &be);

        if(be == 10 || be == 20 || be == 50 || be == 100 || be == 200)
        {
            penz = penz + be;
        }
        else if(be != 1 && be != 2 && be != 3 && be != 4)
        {
            printf("Ervenytelen bemenet!\n");
        }
    } while (be != 1 && be != 2 && be != 3 && be != 4);

    switch(be)
    {
        case 1: ar = 280; break;
        case 2: ar = 310; break;
        case 3: ar = 320; break;
        case 4: ar = 350; break;
    }

    if(penz >= ar)
    {
        printf("Visszajaro: %d Ft\nAz ital elkeszult.", penz-ar);
    }
    else
    {
        printf("ERROR!\nHianyzo osszeg: %d Ft", ar-penz);
    }
}

int main() {
    kave_automata();
    return 0;
}
