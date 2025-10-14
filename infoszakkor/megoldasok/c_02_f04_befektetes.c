#include <stdio.h>
#include <math.h>

double kamatos_kamat(int alaptoke, int ev, int kamatlab)
{
    return alaptoke*pow(1 + (kamatlab/100.0), ev);
}

int main()
{
    int penz, meddig, mennyit;

    printf("Adja meg a toket, az eveket es kamatlabat egymastol szokozzel elvalasztva= ");
    scanf("%d %d %d", &penz, &meddig, &mennyit);

    printf("Befektetes vegere: %lf\n", kamatos_kamat(penz, meddig, mennyit));

    return 0;
}
