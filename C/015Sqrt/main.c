#include <stdio.h>
int main(){
	double x;
	scanf("%le",&x);
	//printf("u input %f \n",x);
	extern double Sqrt();
	double y;
	y=Sqrt(x);
	printf("result is %0.10f \n",y);
	return 0;
}
double Sqrt(double x){
	extern double Min();
	if(x<0)
	{
		return -1;
	}
	double y[2];
	if(x==1||x==0){
		return x;
	}
	if(x<1){
		y[0]=x;
		y[1]=1;
	}else{
		y[0]=x/2;
		y[1]=x;
	}
	double result;
	double square;
	do{
		result=(y[0]+y[1])/2;
		square=result*result;
		if(square>x){
			y[1]=result;
		}else{
			y[0]=result;
		}
	}while(square-x>0.000000000000001 || x-square>0.000000000000001);
	
	return result;
}
double Min(double x,double y){
	if(x>y){
		return y;
	}
	else{
		return x;
	}
}
