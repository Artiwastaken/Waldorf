#include <stdio.h>
#include <time.h>

int vel_kozt(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    int eloetel, foetel, desszert;

    srand(time(NULL));

    eloetel = vel_kozt(1000, 1500);
    desszert = vel_kozt(1000, 2000);
    foetel = 7000 - eloetel - desszert;

    printf("eloetel: %d\n", eloetel);
    printf("foetel: %d\n", foetel);
    printf("desszert: %d", desszert);

    return 0;
}
