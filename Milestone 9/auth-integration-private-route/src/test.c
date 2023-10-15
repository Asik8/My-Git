#include<stdio.h>

void fund(int n)
{
    if(n<=0)return;
    n = n-1;
    fund(n);
    printf("%d\n",n);
}

int main(){
    fund(5);
}