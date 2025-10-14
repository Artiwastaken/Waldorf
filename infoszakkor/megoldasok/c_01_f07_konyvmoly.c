#include <stdio.h>

int main()
{
    int tagsagi, konyvek, atlag_dij;

    printf("tagsagi dij = ");
    scanf("%d", &tagsagi);
    printf("konyvek szama havonta = ");
    scanf("%d", &konyvek);
    printf("konyvkolcsonzesi dij/konyv (Ft) = ");
    scanf("%d", &atlag_dij);

    printf("eves koltseg: %d Ft", tagsagi + konyvek * 12 * atlag_dij);

    return 0;
}
