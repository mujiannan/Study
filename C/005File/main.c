#include <stdio.h>
int main()
{
	FILE *fp=fopen("./test.txt","r");
	char buff[255];
	fgets(buff,255,(FILE*)fp);
	printf("输出%s \n",buff);
	return 0;
}

