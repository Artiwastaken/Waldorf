#include <stdio.h>

int main()
{
    int szelesseg, magassag, zaszlok;

    printf("park szelessege (m) = ");
    scanf("%d", &szelesseg);
    printf("park magassaga (m) = ");
    scanf("%d", &magassag);
    printf("zaszlok szama = ");
    scanf("%d", &zaszlok);

    printf("zaszlok kozotti tavolsag (m): %lf", 2.0*(szelesseg+magassag)/zaszlok);

    return 0;
}
