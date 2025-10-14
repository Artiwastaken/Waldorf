#include <stdio.h>
#include <string.h>

int email_cim_e(char szoveg[])
{
    int i, db_kukac, db_pont, hely_kukac, hely_pont;

    i = 0;
    db_kukac = 0;
    db_pont = 0;
    hely_kukac = 0;
    hely_pont = 0;

    while(i < strlen(szoveg) && szoveg[i] != ' ')
    {
        if(szoveg[i] == '@')
        {
            db_kukac++;
            hely_kukac = i;
        }

        if(szoveg[i] == '.')
        {
            db_pont++;
            hely_pont = i;
        }

        i++;
    }

    if(i < strlen(szoveg))
    {
        return 0; // volt szóköz
    }

    if(db_kukac > 1 || db_pont > 1 || hely_kukac == 0 || hely_pont - hely_kukac < 2 || strlen(szoveg) - hely_pont < 1)
    {
        return 0; // több kukac, több pont, kukaccal kezd, pont hamarabb van mint kukac, vagy pont a legvégén van --> rossz
    }

    return 1;
}

int main()
{
    char email[100];
    int email_e;

    printf("Kerek egy szoveget: ");
    //scanf("%s", &mondat); miért nem jó?
    gets(email);

    printf("A megadott szoveg: %s\n", email);
    printf("A megadott szoveg hossza: %d\n", strlen(email));

    email_e = email_cim_e(email);

    if(email_e == 1)
    {
        printf("A megadott szoveg e-mail cim.");
    }
    else
    {
        printf("A megadott szoveg NEM e-mail cim.");
    }
}
