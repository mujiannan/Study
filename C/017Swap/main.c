#include <stdio.h>
int main(){
	int a=1;
	int b=2;
	printf("初始值：a=%d,b=%d\n",a,b);
	extern int Swap();
	int c=Swap(&a,&b);
	printf("交换后：a=%d,b=%d\n",a,b);
}
int Swap(int *a,int *b){
	int c;
	c=*a;
	printf("进入Swap,c=%d\n",c);
	*a=*b;
	*b=c;
	printf("Swap内：a=%d,b=%d\n",*a,*b);
	return 0;
}

