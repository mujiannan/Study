#include <stdio.h>
#include <string.h>
int main()
{
	int n;
	scanf("%d",&n);
	char source[n];
	scanf("%s",source);
	char defChars[]="nz";
	int charCount[2]={0,0};
	int i,j;
	for(i=0;i<n;i++)
	{
		for(j=0;j<2;j++)
		{
			if(source[i]==defChars[j])
			{
				charCount[j]++;
			}
		}
	}
	int result[charCount[0]+charCount[1]];
	for(i=0;i<charCount[0];i++)
	{
		result[i]=1;
	}
	for(j=charCount[0];j<charCount[0]+charCount[1];j++)
	{
		result[j]=0;
	}
	for(i=0;i<charCount[0]+charCount[1];i++)
	{
		printf("%d ",result[i]);
	}
	return 0;
}
