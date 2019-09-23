#include <stdio.h>
/*我需要一个房间用来放死人*/
int main(){
	int countAlive=30;
	int source[30];
	for(int i=0;i<30;i++){
		source[i]=1;
	}
	int countDead=0;
	int i=1;
	int t=0;
	/*printf("source[0]=%d\n",source[0]);*/
	while(countDead<15){
		/*printf("  %d号：",i+1);*/
		if(source[i]==1){
			t++;
			/*printf("报数：%d",t+1);*/
			if(t==8){
				source[i]=0;
				printf("编号%d下船了...\n",i+1);
				countDead++;
				t=-1;
			}
		}
		if(i==29){
			i=0;
		}
		else{
			i++;
		}
	}
	for(i=1;i<30;i++){
		if(source[i]==1){
			printf("编号%d还活着...\n",i+1);
		}
	}
	return 0;
}

