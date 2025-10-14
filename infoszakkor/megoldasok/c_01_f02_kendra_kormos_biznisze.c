#include <stdio.h>

int main()
{
    int anyag, rezsi, bevetel;
    
    printf("eves anyagkoltseg (ft) = ");
    scanf("%d", &anyag);
    printf("eves rezsikoltseg (ft) = ");
    scanf("%d", &rezsi);
    printf("eves bevetel (ft) = ");
    scanf("%d", &bevetel);

    printf("eves veszteseg/profit: %d", bevetel-(anyag+rezsi));

    return 0;
}