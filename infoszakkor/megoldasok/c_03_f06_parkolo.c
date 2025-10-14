#include <stdio.h>
#include <math.h>

int parkolas(int perc)
{
	if(perc <= 0)
	{
		return 0;
	}
	
	int osszeg = 500 + 300 * (ceil(perc / 60.0)-1);
	
	if(perc > 180)
	{
		osszeg = osszeg * 0.9;
	}
	
	return osszeg;
}

int main()
{
    int perc1, perc2;

    printf("parkolasi ido (perc) = ");
    scanf("%d", &perc1);
    printf("parkolasi ido (perc) = ");
    scanf("%d", &perc2);
	
	printf("fizetendo osszeg: %d Ft\n", parkolas(perc1));
	printf("fizetendo osszeg: %d Ft", parkolas(perc2));

    return 0;
}
