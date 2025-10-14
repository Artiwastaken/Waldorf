#include <stdio.h>

int main()
{
    int tagok, havonta, evek;
    
    printf("tarsasag tagjai = ");
    scanf("%d", &tagok);
    printf("havi osszeg (ft) = ");
    scanf("%d", &havonta);
    printf("megtakaritas evei = ");
    scanf("%d", &evek);

    printf("megtakaritas vegosszege (ft): %d", tagok*havonta*12*evek);

    return 0;
}
