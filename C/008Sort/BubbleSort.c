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
	int i,j,tempNum;
	for(i=0;i<len;i++)
	{
		for(j=i+1;j<len;j++)
		{
			if(order*(arr[i]-arr[j])>0)
			{
				printf("<交换前i:%d j:%d \n",arr[i],arr[j]);
			 	tempNum=arr[i];
				arr[i]=arr[j];
				arr[j]=tempNum;
				printf("交换后i:%d j:%d >\n",arr[i],arr[j]);
			}
		}
	}	
}

