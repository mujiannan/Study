#include <stdio.h>
int main(){
	char source[500001];
	int len;
	scanf("%s",source);
	printf("Mike\n");/*k=0, Mike win*/
	int flagAnnWin;
	int min=0;
	for(int k=1;k<500001;k++){
		if(source[k]=='\0'){
			break;
		}
		flagAnnWin=0;
		if(source[k]>source[min]){
			flagAnnWin=1;
		}
		else{
			min=k;
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
