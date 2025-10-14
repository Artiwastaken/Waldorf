#include <stdio.h>
#include <math.h>

double lufi_terfogata(float atmero)
{
    return 4 * pow(atmero/2, 3) * M_PI / 3;
}

int main()
{
    float lufi1, lufi2, lufi3;

    printf("lufi atmeroje (cm)= ");
    scanf("%f", &lufi1);
    printf("szukseges helium: %f cm3\n", lufi_terfogata(lufi1));

    printf("lufi atmeroje (cm)= ");
    scanf("%f", &lufi2);
    printf("szukseges helium: %f cm3\n", lufi_terfogata(lufi2));

    printf("lufi atmeroje (cm)= ");
    scanf("%f", &lufi3);
    printf("szukseges helium: %f cm3\n", lufi_terfogata(lufi3));

    return 0;
}
