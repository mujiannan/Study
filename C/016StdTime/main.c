#include <stdio.h>
#include <time.h>
#include <string.h>
int main(){
	time_t rawtime;
	time(&rawtime);
	printf("自1970-01-01起的小时数=%ld \n",rawtime);
	struct tm *testTime;
	testTime=localtime(&rawtime);
	char *timeStr;
	timeStr=asctime(testTime);
	printf("asctime的指针为:%p \n",asctime(testTime));
	printf("Now()=%s \n",timeStr);
	char *strPtr;
	strPtr=timeStr;
	printf("Now()=%s \n",strPtr);
	printf("timeStr的指针为:%p\n",timeStr);
	printf("strPtr的指针为:%p\n",strPtr);
	int len=strlen(timeStr);
	printf("len=%d \n",len);
	return 0;
}
