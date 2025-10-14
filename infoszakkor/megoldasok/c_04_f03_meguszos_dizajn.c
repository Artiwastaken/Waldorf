#include <stdio.h>
#include <string.h>
#include <time.h>

int vel_kozt(int a, int f)
{
    return rand() % (f-a+1) + a;
}

int main()
{
    char pref[10];
    int r_also = 0, g_also = 0, b_also = 0;

    srand(time(NULL));

    printf("preferencia: ");
    scanf("%s", &pref);

    if(strcmp(pref, "piros") == 0)
    {
        r_also = 255.0 * 0.75;
    }
    if(strcmp(pref, "zold") == 0)
    {
        g_also = 255.0 * 0.75;
    }
    if(strcmp(pref, "kek") == 0)
    {
        b_also = 255.0 * 0.75;
    }

    printf("felso: RGB(%d, %d, %d)\n", vel_kozt(r_also, 255), vel_kozt(g_also, 255), vel_kozt(b_also, 255));
    printf("nadrag/szoknya: RGB(%d, %d, %d)\n", vel_kozt(r_also, 255), vel_kozt(g_also, 255), vel_kozt(b_also, 255));
    printf("cipo: RGB(%d, %d, %d)\n", vel_kozt(r_also, 255), vel_kozt(g_also, 255), vel_kozt(b_also, 255));

    return 0;
}
