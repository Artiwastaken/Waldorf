#include <stdio.h>

int main() {
    int n, i, ar, osszeg;
    float afa;

    osszeg = 0;

    printf("Termekek szama: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("%d. termek ara: ", i);
        scanf("%d", &ar);
        osszeg = osszeg + ar;
        afa = afa + ar * 0.27;
    }

    printf("Vasarlas osszege: %d Ft\n", osszeg);
    printf("Afa osszege: %.2f Ft\n", afa);
    printf("Vegosszeg: %.2f Ft\n", osszeg + afa);

    return 0;
}
