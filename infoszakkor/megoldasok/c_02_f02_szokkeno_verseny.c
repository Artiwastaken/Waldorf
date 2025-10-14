#include <stdio.h>

double szokkenes_terulete(double meter1, double meter2)
{
    return meter1 * meter2 / 2.0;
}

int main()
{
    double aladar, bela, cecil, domonkos;

    scanf("%lf %lf", &aladar, &bela);
    scanf("%lf %lf", &cecil, &domonkos);

    printf("AB lefedett terulete: %lf\n", szokkenes_terulete(aladar, bela));
    printf("CD lefedett terulete: %lf", szokkenes_terulete(cecil, domonkos));

    return 0;
}
