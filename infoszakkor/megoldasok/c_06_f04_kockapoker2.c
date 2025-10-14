#include <stdio.h>
#include <time.h>

#define ALSO 1
#define FELSO 6

int veletlen(int a, int f)
{
    if(f < a)
    {
        int doboz;
        doboz = a;
        a = f;
        f = doboz;
    }
    return rand()%(f-a+1)+a;
}

int main()
{
    int i, kor, ujra;
    int k[5];

    srand(time(NULL));

    for(i=0;i<5;i++)
    {
        k[i] = veletlen(ALSO, FELSO);
        printf("%d ", k[i]);
    }

    for(kor=0;kor<2;kor++)
    {
        printf("\n");

        do
        {
            scanf("%d", &ujra);
            if(ujra > 0)
            {
                k[ujra-1] = veletlen(ALSO, FELSO);
            }
        } while(ujra > 0);

        for(i=0;i<5;i++)
        {
            printf("%d ", k[i]);
        }
    }

    return 0;
}
