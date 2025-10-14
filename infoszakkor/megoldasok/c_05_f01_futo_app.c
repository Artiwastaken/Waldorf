#include <stdio.h>
#include <stdlib.h>

int futo_app(float tav, float sebesseg)
{
    int perc;
    float megtett;

    perc = 1;
    megtett = 0.0;

    while(megtett < tav)
    {
        megtett = megtett + sebesseg / 60.0;
        printf("%2d. perc: %.2f km\n", perc, megtett);
        perc = perc + 1;
    }

    return perc-1;
}

int main()
{
    float tav, sebesseg;

    printf("tav (km/h): ");
    scanf("%f", &tav);
    printf("sebesseg (km/h): ");
    scanf("%f", &sebesseg);

    printf("futas vege: %d. perc", futo_app(tav, sebesseg));
    return 0;
}
