# A C programozási nyelv alapjai

## Mi az a C nyelv?
A C egy általános célú, strukturált, magas szintű programozási nyelv, amelyet Dennis Ritchie fejlesztett ki az 1970-es években. A C nyelv az operációs rendszerek, beágyazott rendszerek és nagy teljesítményű alkalmazások fejlesztésének alapja.

## Első C program
```c
#include <stdio.h>

int main() {
    printf("Hello, világ!\n");
    return 0;
}
```

## Alapvető szintaxis
- Minden utasítás pontosvesszővel `;` végződik.
- A program belépési pontja a `main` függvény.
- A kód blokkokat kapcsos zárójelek (`{}`) határolják.

## Változók és típusok
```c
int szam = 5;        // egész szám
float tizedes = 3.14; // lebegőpontos szám
char betu = 'A';      // karakter
```
- `int`: egész szám
- `float`, `double`: tört szám
- `char`: karakter

## Be- és kimenet
- Kimenet: `printf()`
- Bemenet: `scanf()`
```c
int x;
printf("Adj meg egy számot: ");
scanf("%d", &x);
printf("A megadott szám: %d\n", x);
```

## Vezérlési szerkezetek
### Elágazás
```c
if (x > 0) {
    printf("Pozitív\n");
} else {
    printf("Nem pozitív\n");
}
```
### Ciklusok
```c
for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
```
```c
int i = 0;
while (i < 5) {
    printf("%d ", i);
    i++;
}
```

## Függvények
```c
int osszeg(int a, int b) {
    return a + b;
}

int main() {
    int eredmeny = osszeg(3, 4);
    printf("Összeg: %d\n", eredmeny);
    return 0;
}
```

## Tömbök
```c
int tomb[5] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d ", tomb[i]);
}
```

## Hasznos tanácsok
- A C nyelvben nincs automatikus memóriakezelés.
- A pointerek (mutatók) fontosak, de kezdőként óvatosan bánj velük.
- Fordításhoz használj pl. GCC-t: `gcc program.c -o program`
