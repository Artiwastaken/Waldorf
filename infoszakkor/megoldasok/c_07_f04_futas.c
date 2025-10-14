#include <stdio.h>
#include <time.h>

int veletlen_kozt(int a, int f)
{
    return rand() % (f-a+1) + a;
}

float ossztav(int adatok[], int napok)
{
    int i, ossz;

    ossz = 0;
    i = 0;

    while(i < napok)
    {
        ossz = ossz + adatok[i];
        i++;
    }

    return ossz / 1000.0;
}

float atlagtav(int adatok[], int napok)
{
    return ossztav(adatok, napok) / napok;
}

int hosszu_szeria(int adatok[], int napok)
{
    int i, max_szeria, szeria;

    max_szeria = 0;
    szeria = 0;
    i = 0;

    do
    {
        if(i == napok || adatok[i] == 0)
        {
            if(szeria > max_szeria)
            {
                max_szeria = szeria;
            }
            szeria = 0;
        }
        else
        {
            szeria++;
        }
        i++;
    } while(i <= napok);

    return max_szeria;
}

int csucs(int adatok[], int napok)
{
    int i, csucs_db;

    csucs_db = 0;
    i = 1;

    while(i < napok-1)
    {
        if(adatok[i] > adatok[i-1] && adatok[i] > adatok[i+1])
        {
            csucs_db++;
        }
        i++;
    }

    return csucs_db;
}

int novekvo_szeria(int adatok[], int napok)
{
    int i, max_novekvo, novekvo;

    max_novekvo = 0;
    novekvo = 0;
    i = 1;

    do
    {
        if(i == napok || adatok[i] <= adatok[i-1])
        {
            if(novekvo > max_novekvo)
            {
                max_novekvo = novekvo;
            }
            novekvo = 0;
        }
        else
        {
            novekvo++;
        }
        i++;
    } while(i <= napok);

    return max_novekvo+1;
}

int kihagyas_utan(int adatok[], int napok)
{
    int i, max_uj;

    i = 0;
    max_uj = -1;

    while(i < napok-1)
    {
        if(adatok[i] == 0 && adatok[i+1] > max_uj)
        {
            max_uj = adatok[i+1];
        }
        i++;
    }

    return max_uj;
}

int legkisebb_tav(int adatok[], int napok)
{
    int i, min_tav, min_nap;
    min_nap = -1;
    min_tav = 5001;

    for(i = 0; i<napok; i++)
    {
        if(adatok[i] > 0 && adatok[i] < min_tav)
        {
            min_tav = adatok[i];
            min_nap = i+1;
        }
    }

    return min_nap;
}

int main()
{
    int i, veletlen, ev_napjai;

    ev_napjai = 365;

    int futasok[ev_napjai];

    srand(time(NULL));

    for(i=0; i<ev_napjai; i++)
    {
        veletlen = veletlen_kozt(1, 10);

        if(veletlen == 1)
        {
            futasok[i] = 0;
        }
        else
        {
            veletlen = veletlen_kozt(1, 2);
            if(veletlen == 1)
            {
                futasok[i] = veletlen_kozt(1, 1500);
            }
            else
            {
                futasok[i] = veletlen_kozt(1501, 5000);
            }
        }

        printf("%3d. nap: %4d meter\n", i+1, futasok[i]);
    }

    printf("Ossztav: %.2f km\n", ossztav(futasok, ev_napjai));
    printf("Atlag tav: %.2f km\n", atlagtav(futasok, ev_napjai));
    printf("Leghosszabb szeria: %d nap\n", hosszu_szeria(futasok, ev_napjai));
    printf("Csucsteljesitmeny: %d nap\n", csucs(futasok, ev_napjai));
    printf("Leghosszabb novekvo tendencia: %d nap\n", novekvo_szeria(futasok, ev_napjai));
    printf("Legtobb kihagyas utani: %d meter\n", kihagyas_utan(futasok, ev_napjai));
    printf("Legkisebb tav ekkor: %d. nap\n", legkisebb_tav(futasok, ev_napjai));

    return 0;
}
