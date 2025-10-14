#include <stdio.h>

int main()
{
    int tagsagi, mozik, jegyar;

    printf("tagsagi dij = ");
    scanf("%d", &tagsagi);
    printf("mozik szama havonta = ");
    scanf("%d", &mozik);
    printf("mozi jegy ara (Ft) = ");
    scanf("%d", &jegyar);

    printf("eves koltseg: %d Ft", tagsagi + mozik * 12 * jegyar);

    return 0;
}
