#include <stdio.h>
int main()
{
	int n=1000;
	int s=0;
	for(int a=1;a<=n;a++){
		s=s+a;
	}
	printf("结果是%lu \n",s);
	return 0;
}
