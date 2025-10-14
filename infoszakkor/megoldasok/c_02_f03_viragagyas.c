#include <stdio.h>
#include <math.h>

double viragyas_merete(double elso, double masodik, double harmadik)
{
    double s = (elso+masodik+harmadik)/2;
    return sqrt(s*(s-elso)*(s-masodik)*(s-harmadik));
}

int main()
{
    double a, b, c;

    printf("Kertresz oldalai meterben= ");
    scanf("%lf %lf %lf", &a, &b, &c);

    printf("Viragagyas merete: %lf\n", viragyas_merete(a, b, c));

    return 0;
}
