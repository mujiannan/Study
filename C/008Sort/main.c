#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	printf("originNums大小：%d *originNums大小：%d \n",sizeof(originNums),sizeof(*originNums));
	printf("originNums地址：%p \n",originNums);
	GetNums("./test.txt",1,&originNums);
	printf("main: %d \n",originNums[10]);
	return 0;
}
