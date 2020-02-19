import matplotlib.pyplot as plt
import math
series=range(1,10)
a=[math.pow(3,x) for x in series]
b=[math.factorial(x) for x in series]
plt.plot(series,a,label="pow")
plt.plot(series,b,label="n!")
plt.legend(loc="upper left",frameon=False)
plt.show()
