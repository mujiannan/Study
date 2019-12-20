#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	int numsCount;
	numsCount=GetNums("./test.txt",1,&originNums);
	printf("数组长度：%d \n",numsCount);
	extern void insertion_sort();
	insertion_sort(originNums,numsCount,1);
	int k;
	for(k=0;k<numsCount;k++)
	{
		printf("newNums[%d]=%d \n",k,originNums[k]);
	}
	return 0;
}
void insertion_sort(int arr[],int len,int order)
/*order>0,升序;order<=0，降序。*/
{
	if(order==0)
	{
		order=-1;
	}
	int i,j;
	extern void swap();
	for(i=0;i<len;i++)
	{
		printf("当前位置： %d \n",i);
		for(j=i;j>0;j--)
		{
			if((arr[j-1]-arr[j])*order>0)
			{
				swap(&arr[j-1],&arr[j]);
				printf("两个位置交换：%d,%d \n",j-1,j);
			}
		}
	}	
}
void swap(int *a,int *b)
{
	int tempNum;
	tempNum=*b;
	*b=*a;
	*a=tempNum;
}

