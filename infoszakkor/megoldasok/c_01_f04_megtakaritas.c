#include <stdio.h>

int main()
{
    int osszeg, hetek;
    
    printf("hetente megtakaritott osszeg (ft) = ");
    scanf("%d", &osszeg);
    printf("eltelt hetek szama = ");
    scanf("%d", &hetek);

    printf("megtakaritas %d het utan (ft): %d", hetek, osszeg*hetek);

    return 0;
}