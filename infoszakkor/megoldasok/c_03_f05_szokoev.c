#include <stdio.h>

int main()
{
    int ev;

    printf("ev= ");
    scanf("%d", &ev);

    if(ev % 4 == 0 && ev % 100 != 0 || ev % 400 == 0)
    {
        printf("szokoev");
    }
    else
    {
        printf("nem szokoev");
    }

    return 0;
}
