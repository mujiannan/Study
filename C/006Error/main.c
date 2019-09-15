#include <stdio.h>
#include <errno.h>
extern int errno;
int main()
{
	FILE *pf;
	pf=fopen("./unexist.txt","rb");
	printf("测试错误号：%d \n",errno);
	FILE *pf2;
	pf2=fopen("./unexist.txt","rb");
	printf("测试错误号：%d \n",errno);
	return 0;
}
