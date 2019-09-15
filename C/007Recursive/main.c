#include <stdio.h>
#include <stdlib.h>
int main(int argc,char *argv[])
{
	if(argc!=2)
	{
		printf("参数错误 \n");
		exit(-1);
	}
	extern int Factorial();
	printf("以字符串读取:%s \n",argv[1]);
	unsigned long n=atoi(argv[1]);
	printf("atoi转换为整数：%lu \n",n);
	printf("n!= %llu \n",Factorial(n));
	return 0;
}
