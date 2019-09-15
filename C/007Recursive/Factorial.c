#include <stdio.h>
unsigned long Factorial(unsigned long n)
{
	if(n>1)
	{
		return n*Factorial(n-1);
	}
	else
	{
		return n;
	}
}
