import requests,sys
path='D:\\Test'
r=requests.get('http://www.boc.cn/sourcedb/whpj')
r.encoding='utf-8'
c=r.text
test=open(path+'\\test.txt','w',1)
test.write(c)
test.close()