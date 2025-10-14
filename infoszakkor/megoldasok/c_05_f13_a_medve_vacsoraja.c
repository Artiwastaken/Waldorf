#include <stdio.h>
#include <time.h>

int veletlen(int also, int felso)
{
    return rand() % (felso-also+1)+also;
}

void fejvagyiras()
{
    int fejiras, korok, fej, iras;
    korok = 1;
    iras = 0;
    fej = 0;
    printf("Fej = 0, Iras = 1\n");
    while(korok < 4)
    {
      fejiras = veletlen(0,1);
      printf("%d. kor: %d\n", korok, fejiras);
      if(fejiras == 0)
      {
          fej += 1;
      }
      else
      {
          iras += 1;
      }
      korok += 1;
    }
    if(fej > iras)
    {
        printf("Ma te leszel a vacsoram Nyuszi!");
    }
    else
    {
        printf("Keress masik vacsorat Medve!");
    }
}
int main()
{
    srand(time(NULL));
    fejvagyiras();
    return 0;
}
