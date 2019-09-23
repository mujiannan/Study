#include <stdio.h>
int main(){
	int x;
	scanf("%d",&x);
	long long result=0;
	int remainder;
	int i=1;
	while(x!=0){
		remainder=x%2;
		x=x/2;
		result+=i*remainder;
		i*=10;
	}
	printf("%d\n",result);
	return 0;
}

