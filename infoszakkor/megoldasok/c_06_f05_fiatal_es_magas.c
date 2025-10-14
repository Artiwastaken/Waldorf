#include <stdio.h>
#include <stdlib.h>

int max_fa(int tomb[], int db)
{
    int i, max;
    max = tomb[0];

    for(i=1; i<db; i++)
    {
        if(tomb[i] > max)
        {
            max = tomb[i];
        }
    }

    return max;
}

int main()
{
    int i, fa_db;

    int fak[5] = {129, 158, 164, 171, 135};
    fa_db = 5;

    printf("1 evnel fiatalabb fak:");
    for(i=0; i<fa_db; i++)
    {
        printf(" %d", fak[i]);
    }
    printf("\n");
    printf("A legmagasabb fa: %d cm", max_fa(fak, fa_db));

    return EXIT_SUCCESS;
}
