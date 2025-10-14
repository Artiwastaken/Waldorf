#include <stdio.h>
#include <time.h>

int vel(int a, int f)
{
    return rand()%(f-a+1)+1;
}

int main()
{
    int viz[1000];
    int i;

    srand(time(NULL));

    i = 0;
    while(i < 1000)
    {
        viz[i] = vel(0, 100);
        i++;
    }

    i = 99;
    while(i >= 0)
    {
        if(viz[i] < 20)
        {
            printf("BE -> %d. meresi pont: %d%%\n", i+1, viz[i]);
        }
        i--;
    }

    return 0;
}
