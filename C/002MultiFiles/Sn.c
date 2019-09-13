#include <stdio.h>
int Sn(int a,int b,int t)
{
	if(a>b||t<=0){
		printf("Sn params Error:a=%d,b=%d,t=%d\n",a,b,t);
		return 0;
	}
	int s=0;
	for(a;a<b;a=a+t)
	{
		s=s+a;
	}
	return s;
}
