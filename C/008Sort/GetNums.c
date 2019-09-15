#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int GetNums(char fullPath[255],int hasTitle,int **out)
{
	printf("Here is GetNums.\n");
	printf("out的大小：%d *out的大小：%d **out的大小：%d\n",sizeof(out),sizeof(*out),sizeof(**out));
	FILE *fp=fopen(fullPath,"r");
	char content[4095];
	char title[255];
	if(hasTitle>0)
	{
		fgets(title,255,(FILE*)fp);
	}
	fgets(content,4095,(FILE*)fp);
	fclose(fp);
	printf("%s%s \n",title,content);
	int contentLength=strlen(content)-1;
	int a,b;
	int t=0;/*count(,)*/
	for(int i=0;i<=sizeof(content);i++)
	{
		if(content[i]==',')
		{
			t++;
		}
	}
	int n=t+1;
	int nums[n];
	if(!*out)
	{
		printf("*out为空 \n");
	}
	*out=(int *)malloc(n*sizeof(int));
	printf("size of nums: %d \n",sizeof(nums));
	printf("*out地址：%p \n",*out);
	printf("out的大小：%d *out的大小：%d **out的大小：%d\n",sizeof(out),sizeof(*out),sizeof(**out));
	t=0;
	a=0;
	b=1;
	printf("Origin Nums: \n");
	while(b<=contentLength)
	{
		if(content[b]==','||b==contentLength)
		{
			char *tempChar;
			tempChar=(char *)malloc((b-a)*sizeof(char));
			for(int i=a;i<b;i++)
			{
				tempChar[i-a]=content[i];
			}/*Copy content[a:b] to tempChar*/
			nums[t]=atoi(tempChar);
			free(tempChar);
			t++;
			a=b+1;
			b=a;
		}
		else
		{
			b++;
		}
	}
	for(int i=0;i<t;i++)
	{
		printf("%d: %d \n",i,nums[i]);
	}
	*out=nums;
	return sizeof(nums)/sizeof(int);
}
