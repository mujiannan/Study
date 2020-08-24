import {ProjectCard} from './projectCard';
export class MainPage {
    private mainPageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-container");
    constructor(){
        this.drawProjectCards();
        this.startAnimation();
    }
    public startAnimation() {
        this.switchPage();
    }
    private switchPage() {
        let container: HTMLDivElement = this.mainPageContainer;
        setInterval(()=> {
            if (container.scrollLeft == 0) {
                this.scrollHorizontal(40, 10);
            } else {
                //this.scrollHorizontal(-40, 10);
            };
        }, 100 * 10
        );
    }

    private scrollHorizontal(step: number, internal: number) {
        let container: HTMLDivElement = this.mainPageContainer;
        let scrollLeft: number;
        let act = setInterval(function () {
            console.debug("scrollLeft", container.scrollLeft);
            console.debug("scrollWidth", container.scrollWidth);
            scrollLeft = container.scrollLeft;
            container.scrollLeft += step;
            if (scrollLeft == container.scrollLeft) {
                clearInterval(act);
            };
        }, internal);
    }

    public drawProjectCards(){
        let projectCardsContainers:HTMLCollectionOf<HTMLDivElement>=<HTMLCollectionOf<HTMLDivElement>>document.getElementsByClassName("jmsy-bs-mainpage-project-card");
        for(let i=0;i<projectCardsContainers.length;i++){
            let card=new ProjectCard(ProjectCard.generateVirtualData(i),projectCardsContainers[i]);
        };
    }
}