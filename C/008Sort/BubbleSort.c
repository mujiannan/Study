#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	int numsCount;
	numsCount=GetNums("./test.txt",1,&originNums);
	printf("数组长度：%d \n",numsCount);
	extern void bubble_sort();
	bubble_sort(originNums,numsCount,1);
	int k;
	for(k=0;k<numsCount;k++)
	{
		printf("newNums[%d]=%d \n",k,originNums[k]);
	}
	return 0;
}
void bubble_sort(int arr[],int len,int order)
/*order>0,升序;order<=0，降序。*/
{
	if(order==0)
	{
		order=-1;
	}
	int i,tempNum,swap;
	for(i=0;i<len;i++)
	{
		

	}	
}

