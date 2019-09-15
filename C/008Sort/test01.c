#include <stdio.h>
#include <string.h>
int main()
{
	int a=1;
	int b=10;
	char x[b-a];
	strcpy(x,"test");
	printf("test:%s \n",x);
	return 0;
}
