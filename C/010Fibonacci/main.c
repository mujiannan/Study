#include <stdio.h>
int main(){
	int a,b;
	int n;
	printf("请输入首两项、要显示的项数：\n");
	scanf("%d %d %d",&a,&b,&n);
	int seq[n];
	seq[0]=a;
	seq[1]=b;
	for(int i=2;i<n;i++){
		seq[i]=seq[i-2]+seq[i-1];
	}
	for(int i=0;i<n;i++){
		printf("a_%d=%d\n",i,seq[i]);
	}
	return 0;
}
