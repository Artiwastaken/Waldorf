#include <stdio.h>
#include <string.h>

int szavak_szama1(char mondat[])
{
    int i, db;

    db = 0;
    for(i=0; i<strlen(mondat); i++)
    {
        if(mondat[i] == ' ')
        {
            db++;
        }
    }

    return db+1;
}

int szavak_szama2(char mondat[])
{
    int i, db, elso;

    db = 0;
    elso = 1;

    for(i=0; i<strlen(mondat); i++)
    {
        if(mondat[i] == ' ' && elso == 1)
        {
            db++;
            elso = 0;
        }

        if(mondat[i] != ' ' && i != 0 && mondat[i-1] == ' ')
        {
            elso = 1;
        }
    }

    return db+1;
}

int szavak_szama3(char mondat[])
{
    int i, db, elso, betu_elso, betu_utolso;

    db = 0;
    elso = 1;
    betu_elso = 0;
    betu_utolso = 0;

    i = 0;
    while(i<strlen(mondat) && mondat[i] == ' ')
    {
        i++;
    }
    betu_elso = i;

    i = strlen(mondat)-1;
    while(i>=0 && mondat[i] == ' ')
    {
        i--;
    }
    betu_utolso = i;

    for(i=betu_elso; i<=betu_utolso; i++)
    {
        if(mondat[i] == ' ' && elso == 1)
        {
            db++;
            elso = 0;
        }

        if(mondat[i] != ' ' && i != 0 && mondat[i-1] == ' ')
        {
            elso = 1;
        }
    }

    return db+1;
}

int main()
{
    char mondat[100];
    printf("Kerek egy mondatot: ");
    //scanf("%s", &mondat); miért nem jó?
    gets(mondat);

    printf("szavak szama 1: %d\n", szavak_szama1(mondat));
    printf("szavak szama 2: %d\n", szavak_szama2(mondat));
    printf("szavak szama 3: %d\n", szavak_szama3(mondat));
}
