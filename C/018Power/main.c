#include <stdio.h>
int main()
{
    printf("%s\n","amd yes");
    extern void seg_0_n();
    int n;
    scanf("%d",&n);
    printf("输入了%d\n",n);
    seg_0_n(n);
    return 0;
}
void seg_0_n(int n){
    long long s=0;
    extern long long power();
    for(int i=0;i<=n;i++){
        s+=power(2,i);
    };
    printf("seg_0_%d = %lld\n",n,s);
}
long long power(int a, int b){
    if(a==0){
        if(b==0){
            return 1;
        }else{
            return 0;
        };
    };

    long long s=1;
    for(int i=1;i<=b;i++){
        s*=a;
    };
    return s;
}