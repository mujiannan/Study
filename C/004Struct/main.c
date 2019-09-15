#include <stdio.h>
#include <string.h>
struct Test
{
	char Name[10];
	int Value;
};
int main()
{
	struct Test test;
	strcpy(test.Name,"测试");/*好奇怪，为啥这么麻烦，而不能直接test.Name="测试"*/
	test.Value=10;
	printf("test的名称是%s，值为%d \n",test.Name,test.Value);
	return 0;
}
