#include <stdio.h>
int main(){
	float a[2][3];
	for(int i=0;i<2;i++){
		for(int j=0;j<3;j++){
			scanf("%f",&a[i][j]);
		}
	}
	float D_x,D_y,D;
	D_x=a[0][2]*a[1][1]-a[1][2]*a[0][1];
	D_y=a[0][0]*a[1][2]-a[1][0]*a[0][2];
	D=a[0][0]*a[1][1]-a[1][0]*a[0][1];
	if(D!=0){
		printf("x=%f,y=%f\n",D_x/D,D_y/D);
	}
	else{
		if(D_x==0&&D_y==0){
			printf("x,y取任意实数\n");
		}
		else{
			printf("x,y无实数解\n");
		}
	}
	return 0;
}

