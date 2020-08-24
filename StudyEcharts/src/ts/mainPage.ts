export class MainPage {
    private mainPageContainer: HTMLDivElement = <HTMLDivElement>document.getElementById("jmsy-bs-mainpage-container");
    public startAnimation() {
        this.switchPage();
    }
    private switchPage() {
        let container: HTMLDivElement = this.mainPageContainer;
        setInterval(()=> {
            if (container.scrollLeft == 0) {
                this.scrollHorizontal(40, 10);
            } else {
                this.scrollHorizontal(-40, 10);
            };
        }, 1000 * 10
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
}