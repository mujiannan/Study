#include <stdio.h>
int main(){
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
