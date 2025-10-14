#include <stdio.h>
#include <time.h>

int veletlen(int also, int felso)
{
    return rand()%(felso-also+1)+also;
}
void viragok()
{
    int pitypang, pasztortaska, konkoly, virag, db;
    virag = 1;
    db = 0;
    pitypang = 0;
    pasztortaska = 0;
    konkoly = 0;

    while(pitypang < 5 && pasztortaska < 5 && konkoly < 5)
    {
        virag = veletlen(0,2);
        printf("%d. virag: ", db);
        if(virag == 0)
        {
            printf("pitypang\n");
            pitypang += 1;
        }
        if(virag == 1)
        {
            printf("pasztortaska\n");
            pasztortaska += 1;
        }
        if(virag == 2)
        {
            printf("konkoly\n");
            konkoly += 1;
        }
        db += 1;
    }
    if(pitypang == 5)
    {
        printf("Plussallatot vesz Julianak.");
    }
    if(pasztortaska == 5)
    {
        printf("Edesseget vesz Julianak.");
    }
    if(konkoly == 5)
    {
        printf("Valamilyen elmenyt ajandekoz Julianak.");
    }
}

int main()
{
    srand(time(NULL));
    viragok();
    return 0;
}
