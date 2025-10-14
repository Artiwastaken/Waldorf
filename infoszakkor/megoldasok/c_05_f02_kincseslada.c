#include <stdio.h>
#include <stdlib.h>

int kod()
{
    int i, sum;

    i = 100;
    sum = 0;

    while(i <= 999)
    {
        if(i % 3 == 0 || i % 5 == 0)
        {
            sum = sum + i;
        }

        i = i + 1;
    }

    return sum;
}

int main()
{
    printf("a szamzar kodja: %d", kod());
    return 0;
}
