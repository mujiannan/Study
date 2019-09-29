from tkinter import Tk,Entry,Text,Button
import pinyin
def TransToPinyin():
    userInput=textBox0.get()
    if userInput!='':
        print(pinyin.get(userInput))
MainForm=Tk()
textBox0=Entry(MainForm)
button0=Button(MainForm,text='转为拼音',command=TransToPinyin)
textBox1=Entry(MainForm)
textBox0.pack()
textBox1.pack()
button0.pack()
MainForm.mainloop()