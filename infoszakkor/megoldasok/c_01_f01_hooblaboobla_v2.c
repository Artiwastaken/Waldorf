#include <stdio.h>
#include <math.h>

int main()
{
    int oldal, szelesseg, magassag, hosszusag, kerulet;
    double szelesseg_meterben;
    
    printf("telek oldalanak hossza (m) = ");
    scanf("%d", &oldal);
    
    kerulet = oldal * 4;
    printf("szukseges kerites (m): %d\n", kerulet);
    
    printf("darab szelessege (cm) = ");
    scanf("%d", &szelesseg);
    printf("darab hosszusaga (cm) = ");
    scanf("%d", &magassag);
    printf("darab magassaga (cm) = ");
    scanf("%d", &hosszusag);
    
    szelesseg_meterben = szelesseg / 100.0;
    printf("szukseges elemek: %d", (int)round(kerulet/szelesseg_meterben));

    return 0;
}
