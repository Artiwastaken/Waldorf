#include <stdio.h>

float viz(float h, float sz, float m)
{
    return h * sz * m / 1000 * 0.75;
}

int main()
{
    float h1, h2, h3, sz1, sz2, sz3, m1, m2, m3;

    printf("akvarium hossza (cm)= ");
    scanf("%f", &h1);
    printf("akvarium szelessege (cm)= ");
    scanf("%f", &sz1);
    printf("akvarium magassaga (cm)= ");
    scanf("%f", &m1);
    printf("szukseges viz: %.2f liter\n", viz(h1, sz1, m1));
	
    printf("akvarium hossza (cm)= ");
    scanf("%f", &h2);
    printf("akvarium szelessege (cm)= ");
    scanf("%f", &sz2);
    printf("akvarium magassaga (cm)= ");
    scanf("%f", &m2);
    printf("szukseges viz: %.2f liter\n", viz(h2, sz2, m2));
	
    printf("akvarium hossza (cm)= ");
    scanf("%f", &h3);
    printf("akvarium szelessege (cm)= ");
    scanf("%f", &sz3);
    printf("akvarium magassaga (cm)= ");
    scanf("%f", &m3);
    printf("szukseges viz: %.2f liter\n", viz(h3, sz3, m3));

    return 0;
}
