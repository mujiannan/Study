#include <stdio.h>
int main()
{
	extern int GetNums();
	int *originNums=NULL;
	GetNums("./test.txt",1,&originNums);
	int numsCount=sizeof(*originNums)/sizeof(int);
	extern void bubble_sort();
	bubble_sort(originNums,numsCount,1);
	printf("newNums[10]=%d",originNums[10]);
	for(int k=0;k<numsCount;k++)
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
		for(j=i;j<len;j++)
		{
			if(order*(arr[i]-arr[j])>0)
			{
			 	tempNum=arr[i];
				arr[i]=arr[j];
				arr[j]=tempNum;
			}
		}
	}	
}

