#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	int numsCount;
	numsCount=GetNums("./test.txt",1,&originNums);
	printf("数组长度：%d \n",numsCount);
	extern void selection_sort();
	selection_sort(originNums,numsCount,1);
	int k;
	for(k=0;k<numsCount;k++)
	{
		printf("newNums[%d]=%d \n",k,originNums[k]);
	}
	return 0;
}
void selection_sort(int arr[],int len,int order)
/*order>0,升序;order<=0，降序。*/
{
	if(order==0)
	{
		order=-1;
	}
	int i,j,bestPosition;
	for(i=0;i<len;i++)
	{
		bestPosition=i;
		printf("当前位置： %d \n",i);
		for(j=i+1;j<len;j++)
		{
			if((arr[bestPosition]-arr[j])*order>0)
			{
				bestPosition=j;
			printf("新的最小位置： %d \n",i);
			}
		}
		extern void swap();
		swap(&arr[i],&arr[bestPosition]);
	}	
}
void swap(int *a,int *b)
{
	int tempNum;
	tempNum=*b;
	*b=*a;
	*a=tempNum;
}

