#include <stdio.h>
int main()
{
	char x[6]={'H','e','l','l','o'};
	printf("Output:%s \n",x);
	char (*p)[6];/*指向数组的指针*/
	p=&x;
	printf("PointerContent: %s \n",*p);
	return 0;
}
