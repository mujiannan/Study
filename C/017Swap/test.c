#include <stdio.h>
int main(){
	int x=11;
	int *y;
	y=&x;
	printf("y=%d，address=%p \n",*y,y);
	printf("x=%d，address=%p \n",x,&x);
	extern int Change();
	Change(y);
	printf("Change完毕，改变了数值:%d\n",*y);
	return 0;
}
int Change(int *p){
	printf("Change接收到地址：%p\n",p);
	*p=10;
	printf("还在Change内，但改变了数值:%d\n",*p);
	return 0;
}
