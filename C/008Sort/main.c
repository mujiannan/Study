#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	printf("originNums大小：%ld *originNums大小：%ld \n",sizeof(originNums),sizeof(*originNums));
	printf("originNums地址：%p \n",originNums);
	int numsCount;
	numsCount=GetNums("./test.txt",1,&originNums);
	printf("main: %d \n",originNums[10]);
	printf("I get the correct count: %d \n",numsCount);
	return 0;
}
