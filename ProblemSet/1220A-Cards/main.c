#include <stdio.h>
#include <string.h>
int main()
{
	char source[]="nznooeeoer";
	printf("source string: %s\n",source);
	char defChars[]="nz";
	int charCount[2]={0,0};
	int i,j;
	for(i=0;i<strlen(source);i++)
	{
		for(j=0;j<2;j++)
		{
			if(source[i]==defChars[j])
			{
				charCount[j]++;
			}
		}
	}
	printf("Count each char:\n%s\n",defChars);
	for(i=0;i<2;i++)
	{
		printf("%d",charCount[i]);
	}
	printf("\n");
	
	return 0;
}
