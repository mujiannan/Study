#include <stdio.h>
int main(){
	printf("size of double:%d\n",sizeof(double));
	printf("size of long double:%d\n",sizeof(long double));
	printf("size of long:%d\n",sizeof(long));
	unsigned long x=1;
	for(int i=0;i<x;i++){
		if(i*i==x){
			printf("%d^2=%lu\n",i,x);
		}
		else{
			printf("%d^2!=%lu\n",i,x);
		}
	}
	return 0;
}
