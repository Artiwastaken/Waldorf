#include <stdio.h>
#include <math.h>

int main()
{
    float adatkeret, video_koltseg;

    printf("adatkeret (GB) = ");
    scanf("%f", &adatkeret);
    printf("atlag video adatigenye (GB) = ");
    scanf("%f", &video_koltseg);

    printf("teljes videok : %d", floor(adatkeret / video_koltseg));

    return 0;
}
