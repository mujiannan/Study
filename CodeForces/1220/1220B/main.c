#include <stdio.h>
#include <stdlib.h>
/*10的6次方的方阵，空间太大了，需要想些办法*/
int main(){
	extern long long sqrt();
	int n;
	scanf("%d",&n);
	long long source[n][n];
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			scanf("%llu",&source[i][j]);
			/*printf("i=%d,j=%d,value=%d,value=%llu\n",i,j,source[i][j]);*/
			
		}
	}
	long long result[n];
	for(int i=1;i<n-1;i++){
		/*printf("sqrt(%lu*%lu/%lu)=%lu\n",source[0][i+1],source[i][i+1],source[0][i],sqrt(source[0][i+1]*source[i][i+1]/source[0][i]));*/
		result[i+1]=sqrt(source[0][i+1]*source[i][i+1]/source[0][i]);
	}
	result[0]=source[0][n-1]/result[n-1];
	result[1]=source[0][1]/result[0];
	for(int i=0;i<n;i++){
		printf("%llu ",result[i]);
	}
	return 0;
}
long long sqrt(long long x){
	for(long long i=0;i<=x;i++){
		if(i*i==x){
			return i;
		}
	}
	return 0;
}
