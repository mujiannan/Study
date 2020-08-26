import { ProjectCard, IProjectCardData } from './projectCard';
import { ActivitiesCalendar } from './activitiesCalendar';
//import { ProjectsMap } from './projectsMap';
document.addEventListener('DOMContentLoaded', function () {
    let activitiesCalendarContainer: HTMLDivElement = <HTMLDivElement>document.getElementById('jmsy-bs-mainpage-activitiescalendar');
    let activitiesCalendar: ActivitiesCalendar = new ActivitiesCalendar();
    activitiesCalendar.render(activitiesCalendarContainer);
    let mainPage: MainPage = new MainPage();
});
export class MainPage {
    private mainPageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-container");
    //private projectsMap:ProjectsMap;
    private projectCards: ProjectCard[] = [];
    private switchPageAnimation?: number;
    constructor() {
        //第一页地图
        let projectsMapContainer = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-map");
        this.drawProjectsMap(projectsMapContainer);
        //第二页项目卡
        let projectCardContainers: HTMLCollectionOf<HTMLDivElement> = <HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("jmsy-bs-mainpage-project-card");
        this.drawProjectCards(projectCardContainers);

        this.startAnimation();
        this.update();
    }
    private update() {
        //第二页项目卡
        let virtualProjectCardsData: IProjectCardData[] = [];
        for (let i = 0; i < 4; i++) {
            virtualProjectCardsData.push(ProjectCard.generateVirtualData(i));
        };
        this.updateProjectCards(virtualProjectCardsData);
    }
    public startAnimation() {
        this.loopSwitchPage();
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
        this.switchPageAnimation = setInterval(() => {
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
        //this.projectsMap=new ProjectsMap(container);
    }
    private updateProjectsMap() {

    }



    private drawProjectCards(containers: HTMLCollectionOf<HTMLDivElement>, data?: IProjectCardData[]) {
        for (let i = 0; i < containers.length; i++) {
            let card = new ProjectCard(containers[i]);
            this.projectCards.push(card);
        };
        if (data) {
            this.updateProjectCards(data);
        }
    }

    private updateProjectCards(data: IProjectCardData[]) {
        this.projectCards.forEach((projectCard, i) => {
            projectCard.update(data[i]);
        });
    }
}