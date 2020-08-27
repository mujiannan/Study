import { ProjectCard, IProjectCardData } from './projectCard';
import { ActivitiesCalendar } from './activitiesCalendar';
import { ProjectsMap,IProjectMapData } from './projectsMap';
document.addEventListener('DOMContentLoaded', function () {
    let activitiesCalendarContainer: HTMLDivElement = <HTMLDivElement>document.getElementById('jmsy-bs-mainpage-activitiescalendar');
    let activitiesCalendar: ActivitiesCalendar = new ActivitiesCalendar();
    activitiesCalendar.render(activitiesCalendarContainer);
    let mainPage: MainPage = new MainPage();
    document.addEventListener('visibilitychange',function(){
        if(document.visibilityState=="visible"){
            mainPage.startAnimation();
        }else{
            mainPage.suspendAnimation();
        };
    });
});
export class MainPage {
    private mainPageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-container");
    private projectsMap:ProjectsMap;
    private projectCards: ProjectCard[] = [];
    
    private _animationPlaying : boolean=false;
    public get animationPlaying() : boolean {
        return this._animationPlaying;
    }
    
    private switchPageAnimation?: number;
    constructor() {
        //第一页地图
        let projectsMapContainer = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-map");
        this.projectsMap=this.drawProjectsMap(projectsMapContainer);
        //第二页项目卡
        let projectCardContainers: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("jmsy-bs-mainpage-project-card");
        this.drawProjectCards(projectCardContainers);
        //处理动画
        this.startAnimation();
        //更新数据
        this.update();
    }
    private update() {

        //<地图>
        this.updateProjectsMap(ProjectsMap.generateVirtualData());
        //</地图>


        //<第二页项目卡>

        //<构建虚拟项目卡数据>
        let virtualProjectCardsData: IProjectCardData[] = [];
        for (let i = 0; i < 4; i++) {
            virtualProjectCardsData.push(ProjectCard.generateVirtualData(i));
        };
        //</构建虚拟项目卡数据>
        this.updateProjectCards(virtualProjectCardsData);

        //</第二页项目卡>

    }
    public startAnimation() {
        if(this.animationPlaying){
            return;
        };
        try{
            this.loopSwitchPage();
        }catch{
            console.debug('mainpage animation start failed');
        };
        this._animationPlaying=true;
    }
    public suspendAnimation(){
        if(!this.animationPlaying){
            return;
        };
        try{
            this.stopSwitchPage();
        }catch{
            console.debug('mainpage animation stop failed');
        };
        this._animationPlaying=false;
    }
    //左右切换
    private scrollHorizontal(step: number, internal: number) {
        let container: HTMLDivElement = this.mainPageContainer;
        let scrollLeft: number;
        let act = setInterval(function () {
            scrollLeft = container.scrollLeft;
            container.scrollLeft += step;
            if (scrollLeft == container.scrollLeft) {
                clearInterval(act);
            };
        }, internal);
    }
    private loopSwitchPage() {
        let container: HTMLDivElement = this.mainPageContainer;
        this.switchPageAnimation = window.setInterval(() => {
            if (container.scrollLeft == 0) {
                this.scrollHorizontal(40, 10);
            } else {
                this.scrollHorizontal(-40, 10);
            };
        }, 1000 * 10
        );
    }
    private stopSwitchPage() {
        if (this.switchPageAnimation) {
            clearInterval(this.switchPageAnimation);
            this.switchPageAnimation = undefined;
        };
    }
    //地图
    private drawProjectsMap(container:HTMLDivElement) {
        return new ProjectsMap(container);
    }
    private updateProjectsMap(data:IProjectMapData[]) {
        this.projectsMap.update(data);
    }



    private drawProjectCards(containers: HTMLCollectionOf<HTMLDivElement>) {
        for (let i = 0; i < containers.length; i++) {
            let card = new ProjectCard(containers[i]);
            this.projectCards.push(card);
        };
    }

    private updateProjectCards(data: IProjectCardData[]) {
        this.projectCards.forEach((projectCard, i) => {
            projectCard.update(data[i]);
        });
    }
}