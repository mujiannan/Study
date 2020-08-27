import '../../css/jmsy-bs.css';
import '../../css/projectPage.css';
document.addEventListener('DOMContentLoaded',function(){
    let projectPage=new ProjectPage();
});
class ProjectPage{
    private projectName:string='';//构造函数中设计确保项目名称必须符合要求
    private menuButtons:HTMLCollectionOf<HTMLButtonElement>;
    private subPages:HTMLCollectionOf<HTMLDivElement>;
    constructor(){
        try{
            this.updateTitle();
        }catch(er){
            document.title="error";
            throw er;
        };
        this.menuButtons=<HTMLCollectionOf<HTMLButtonElement>>document.getElementsByClassName("menu-item");
        this.subPages=<HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("jmsy-bs-projectpage-content-container");
        this.interactiveButtonsAndPages();

        this.menuButtons[0].click();

    }
    private interactiveButtonsAndPages(){
        for(let i=0;i<this.menuButtons.length;i++){
            let button=this.menuButtons[i];
            let buttons=this.menuButtons;
            let pages=this.subPages;
            this.menuButtons[i].addEventListener("mouseenter",function(){
                this.style.backgroundSize="100%";
            });
            this.menuButtons[i].addEventListener("mouseleave",function(){
                if(this.getAttribute("data")!="selected"){
                    this.style.backgroundSize="0%";
                };
            });
            this.menuButtons[i].addEventListener("click",()=>{
                //先取消所有按钮背景
                for(let k=0;k<buttons.length;k++){
                    buttons[k].style.backgroundSize="0%";
                    buttons[k].setAttribute('data','');
                };
                //再重新设置选中按钮的背景
                button.setAttribute('data','selected');
                button.style.backgroundSize="100%";
                //处理下方的页面
                for(let k=0;k<pages.length;k++){
                    let page=pages[k]
                    if(page.id.search(button.id)==-1){
                        page.style.display="none";
                    }else{
                        page.style.display="block";
                    };
                };
            });
        }
    }
    private swtichPage(){

    }
    private updateTitle(){
        let bodyTitleObj=<HTMLParagraphElement>document.getElementById("body-title");
        let paramsStr=location.href.split('?')[1];
        this.projectName=decodeURI(paramsStr.split('=')[1]);
        document.title=this.projectName;
        bodyTitleObj.innerText=this.projectName;
    }
}