#include <stdio.h>
#include <ctype.h>
int main(){
	char x;
	printf("请输入一个字符，然后按回车键\n");
	scanf("%c",&x);
	int r=isalnum(x);
	if(r>0){
		printf("%c是字母或数字\n",x);
	}else{
		printf("%c不是字母或数字\n",x);
	}
}

