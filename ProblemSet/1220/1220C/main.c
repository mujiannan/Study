#include <stdio.h>
int main(){
	char source[500001];
	int len;
	scanf("%s",source);
	for(int i=0;i<500001;i++){
		if(source[i]=='\0'){
			len=i;
			break;
		}
	}
	for(int k=0;k<len;k++){
		int flagAnnWin=0;
		for(int i=0;i<k;i++){
			if(source[i]<source[k])
			{
				flagAnnWin=1;
				break;
			}
		}
		if(flagAnnWin==0){
			printf("Mike\n");
		}
		else{
			printf("Ann\n");
		}
	}
	return 0;
}
