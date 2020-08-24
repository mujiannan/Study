import * as echarts from 'echarts';
interface ProjectOperatingData{
    projectId:string;
    projectName:string;
    openingRate:number;
    openingRate_sales:number;
    salesTotal:number;
    salesTotal_PY:number;
    salesTotal_PD:number;
    peopleFlow:number;
    peopleFlow_PY:number;
    peopleFlow_PD:number;
}

export class ProjectCard{
    private container:HTMLDivElement;
    private data:ProjectOperatingData;
    private titleContainer:HTMLDivElement;
    constructor(data:ProjectOperatingData,container:HTMLDivElement){
        this.data=data;
        this.container=container;

        //标题
        this.titleContainer=document.createElement("div");
        this.titleContainer.setAttribute("class","jmsy-bs-mainpage-page2-card-title-container");
        let title=document.createElement("p");
        title.setAttribute("class","jmsy-bs-mainpage-page2-card-title");
        title.innerText=data.projectName;
        this.titleContainer.appendChild(title);
        this.container.appendChild(this.titleContainer);

        //布局
        let rowTop=document.createElement("div");
        rowTop.className="jmsy-bs-mainpage-page2-card-rows-top";

        //开铺率
        let openingRateContainer=document.createElement("div");
        rowTop.appendChild(openingRateContainer);
        this.container.appendChild(rowTop);
        this.drawOpeningRate(openingRateContainer,data.openingRate);

        
        //销售开铺率
        //日销售
        //日客流

    }
    private drawOpeningRate(openingRateContainer:HTMLDivElement,value:number){
        openingRateContainer.className="echarts-container jmsy-bs-project-card-openingrate";
        let option = {
            series: [{
                name: "开铺率",
                type: "gauge",
                startAngle: 225,
                endAngle: -45,
                splitNumber: 2,
                clockwise:true,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [value, "#be967c"],
                            [1, "#343d5a"]
                        ],
                        width: 14
                    }
                },
                pointer: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                center: ["50%", "50%"],
                min: 0,
                max: 100,
                title: {
                    show: true,
                    offsetCenter: [0, "80%"],
                    color: "snow",
                    fontSize: 16
                },
                detail: {
                    show: true,
                    offsetCenter: ["0%", "0%"],
                    fontSize: 32,
                    color: "#be967c",
                    formatter:"{value}%"
                },
                data: [{ value: Math.round(100 * value), name: "开铺率" }]
            }]
        };
        console.debug(option);
        let openingrate_chart = echarts.init(openingRateContainer);
        openingrate_chart.setOption(option);
    }
    public static generateVirtualData(index:number):ProjectOperatingData{
        return {
            projectId:["43001","37001","33201","55301"][index],
            projectName:["长沙览秀城","青岛金茂湾","南京金茂汇","丽江J·LIFE"][index],
            openingRate:0.7+0.3*Math.random(),
            salesTotal:1076876.32*Math.random(),
            salesTotal_PD:1234893.34*Math.random(),
            salesTotal_PY:989877.87*Math.random(),
            peopleFlow:Math.floor(238989*Math.random()),
            peopleFlow_PD:Math.floor(244098*Math.random()),
            peopleFlow_PY:Math.floor(182439*Math.random()),
            openingRate_sales:0.68+0.3*Math.random()
        };
    }
    private createOpeningRatePie(){

    }
    private createSalesCard(){

    }
}
