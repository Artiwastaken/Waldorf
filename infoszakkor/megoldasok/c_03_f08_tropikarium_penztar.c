#include <stdio.h>

int main() {
    int eletkor;
    int jegyar;

    printf("eletkor = ");
    scanf("%d", &eletkor);

    if(eletkor < 6)
    {
        jegyar = 0;
    }
    else if(eletkor <= 18)
    {
        jegyar = 1200;
    }
    else if(eletkor <= 65)
    {
        jegyar = 1800;
    }
    else
    {
        jegyar = 900;
    }

    printf("jegyar: %d Ft", jegyar);

    return 0;
}
