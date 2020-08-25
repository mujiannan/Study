import * as echarts from 'echarts';
import { MiniKpiCard } from '../customComponents/miniKpiCard'
interface ProjectOperatingData {
    projectId: string;
    projectName: string;
    openingRate: number;
    openingRate_sales: number;
    salesTotal: number;
    salesTotal_PY: number;
    salesTotal_PD: number;
    peopleFlow: number;
    peopleFlow_PY: number;
    peopleFlow_PD: number;
    dataByDays?: [{
        day: number,
        salesTotal: number,
        salesTotal_PY: number,
        peopleFlow: number,
        peopleFlow_PY: number
    }]
}

export class ProjectCard {
    private container: HTMLDivElement;
    private data: ProjectOperatingData;
    private titleContainer: HTMLDivElement;
    private salesTotalCard: MiniKpiCard;
    private peopleFlowCard: MiniKpiCard;
    private sales_YoY_Card: MiniKpiCard;
    private sales_DoD_Card: MiniKpiCard;
    private people_YoY_Card: MiniKpiCard;
    private people_DoD_Card: MiniKpiCard;
    private salesByDaysChart: echarts.ECharts;
    private peopleByDaysChart: echarts.ECharts;

    constructor(data: ProjectOperatingData, container: HTMLDivElement) {
        this.data = data;
        this.container = container;

        //标题
        this.titleContainer = document.createElement("div");
        this.titleContainer.setAttribute("class", "jmsy-bs-mainpage-page2-card-title-container");
        let title = document.createElement("p");
        title.setAttribute("class", "jmsy-bs-mainpage-page2-card-title");
        title.innerText = data.projectName;
        this.titleContainer.appendChild(title);
        this.container.appendChild(this.titleContainer);

        /*# 布局*/
        //行布局
        let rowTop = document.createElement("div");
        let rowBottom = document.createElement("div");
        rowTop.className = "jmsy-bs-mainpage-page2-card-rows-top";
        rowBottom.className = "jmsy-bs-mainpage-page2-card-rows-bottom";
        this.container.appendChild(rowTop);
        this.container.appendChild(rowBottom);
        //左列
        let openingRateContainer = document.createElement("div");
        rowTop.appendChild(openingRateContainer);
        let salesOpeningRateContainer = document.createElement("div");
        rowBottom.appendChild(salesOpeningRateContainer);
        //中间列
        let topCenterContainer = document.createElement("div");
        let bottomCenterContainer = document.createElement("div");
        topCenterContainer.setAttribute("class", "jmsy-bs-mainpage-page2-card-top-center");
        bottomCenterContainer.setAttribute("class", "jmsy-bs-mainpage-page2-card-bottom-center");
        rowTop.appendChild(topCenterContainer);
        rowBottom.appendChild(bottomCenterContainer);

        /*中间列细节*/
        //日销售
        let salesTotalContainer = document.createElement("div");
        salesTotalContainer.className = "jmsy-bs-mainpage-page2-card-center-wide";
        topCenterContainer.appendChild(salesTotalContainer);
        //销售同环比
        let topComparisonContainer = document.createElement("div");
        topComparisonContainer.className = "jmsy-bs-mainpage-page2-card-center-wide";
        topCenterContainer.appendChild(topComparisonContainer);
        //日客流
        let peopleFlowContainer = document.createElement("div");
        peopleFlowContainer.className = "jmsy-bs-mainpage-page2-card-center-wide";
        bottomCenterContainer.appendChild(peopleFlowContainer);
        //客流同环比
        let bottomComparisonContainer = document.createElement("div");
        bottomComparisonContainer.className = "jmsy-bs-mainpage-page2-card-center-wide";
        bottomCenterContainer.appendChild(bottomComparisonContainer);

        //开铺率-上左
        this.drawOpeningRate(openingRateContainer, data.openingRate);

        //销售开铺率-下左
        this.drawOpeningRate(salesOpeningRateContainer, data.openingRate_sales, "销售开铺率");

        //日销售-中上上
        this.salesTotalCard = new MiniKpiCard(salesTotalContainer);

        //日客流-中下上
        this.peopleFlowCard = new MiniKpiCard(peopleFlowContainer);
        //this.drawWideKpiCard(peopleFlowContainer,data.peopleFlow,"日客流","人次","#1f0bbf","#1f0bbf");

        //销售同环比
        //同比卡
        let sales_YoY_Container = document.createElement("div");
        topComparisonContainer.appendChild(sales_YoY_Container);
        sales_YoY_Container.className = "jmsy-bs-mainpage-page2-yoy";
        this.sales_YoY_Card = new MiniKpiCard(sales_YoY_Container);
        //环比卡
        let sales_DoD_Container = document.createElement("div");
        topComparisonContainer.appendChild(sales_DoD_Container);
        sales_DoD_Container.className = "jmsy-bs-mainpage-page2-dod";
        this.sales_DoD_Card = new MiniKpiCard(sales_DoD_Container);

        //销售同环比
        //同比卡
        let people_YoY_Container = document.createElement("div");
        bottomComparisonContainer.appendChild(people_YoY_Container);
        people_YoY_Container.className = "jmsy-bs-mainpage-page2-yoy";
        this.people_YoY_Card = new MiniKpiCard(people_YoY_Container);
        //环比卡
        let people_DoD_Container = document.createElement("div");
        bottomComparisonContainer.appendChild(people_DoD_Container);
        people_DoD_Container.className = "jmsy-bs-mainpage-page2-dod";
        this.people_DoD_Card = new MiniKpiCard(people_DoD_Container);

        //逐日销售
        let salesByDaysContainer = document.createElement("div");
        salesByDaysContainer.className = "jmsy-bs-mainpage-page2-data-by-days";
        rowTop.appendChild(salesByDaysContainer);
        this.salesByDaysChart = echarts.init(salesByDaysContainer);
        //逐日客流
        let peopleByDaysContainer = document.createElement("div");
        peopleByDaysContainer.className = "jmsy-bs-mainpage-page2-data-by-days";
        rowBottom.appendChild(peopleByDaysContainer);
        this.peopleByDaysChart = echarts.init(peopleByDaysContainer);

        if (data) {
            this.update(data);
        };
    }
    private drawOpeningRate(openingRateContainer: HTMLDivElement, value: number, name: string = "开铺率") {
        openingRateContainer.className = "echarts-container jmsy-bs-project-card-openingrate";
        let option = {
            series: [{
                name: name,
                type: "gauge",
                startAngle: 225,
                endAngle: -45,
                splitNumber: 2,
                clockwise: true,
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
                    formatter: "{value}%"
                },
                data: [{ value: Math.round(100 * value), name: name }]
            }]
        };
        let openingrate_chart = echarts.init(openingRateContainer);
        openingrate_chart.setOption(option);
    }
    public update(data: ProjectOperatingData) {
        let getComparisonColor: Function = function (a: number, b: number) {
            let comparisonValue = a > 0 ? (b / a - 1) : undefined;
            if (comparisonValue) {
                return comparisonValue > 0 ? "#bd967a" : "#ee3d3d";
            } else {
                return "#ee3d3d";
            };
        };
        let getComparisonString: Function = function (a: number, b: number) {
            let comparisonValue = a > 0 ? (b / a - 1) : undefined;
            if (comparisonValue) {
                let points: number = comparisonValue * 100;
                return comparisonValue > 0 ? ("+" + points.toFixed(1)) : points.toFixed(1);
            } else {
                return "#ee3d3d";
            };
        };

        //日销售
        this.salesTotalCard.update({
            title: "日销售",
            titleSize: "1rem",
            value: data.salesTotal,
            valueColor: "#00ffd0",
            valueSize: "2.2rem",
            label: "元",
            labelSize: "1.2rem",
            labelColor: "#00ffd0"
        });
        this.sales_YoY_Card.update({
            title: "同比",
            titleSize: "0.8rem",
            insteadValue: getComparisonString(data.salesTotal_PY, data.salesTotal),
            valueSize: "1.5rem",
            valueColor: getComparisonColor(data.salesTotal_PY, data.salesTotal),
            valueFontStyle: "normal",
            label: "%",
            labelSize: "1.2rem"
        });
        this.sales_DoD_Card.update({
            title: "环比",
            titleSize: "0.8rem",
            insteadValue: getComparisonString(data.salesTotal_PD, data.salesTotal),
            valueSize: "1.5rem",
            valueColor: getComparisonColor(data.salesTotal_PD, data.salesTotal),
            valueFontStyle: "normal",
            label: "%",
            labelSize: "1.2rem"
        });

        //客流
        this.peopleFlowCard.update({
            title: "日客流",
            titleSize: "1rem",
            value: data.peopleFlow,
            valueSize: "2.2rem",
            valueColor: "#200cc2",
            label: "人次",
            labelSize: "1.2rem",
            labelColor: "#1f0bbf"
        });
        this.people_YoY_Card.update({
            title: "同比",
            titleSize: "0.8rem",
            insteadValue: getComparisonString(data.peopleFlow_PY, data.peopleFlow),
            valueSize: "1.5rem",
            valueColor: getComparisonColor(data.peopleFlow_PY, data.peopleFlow),
            valueFontStyle: "normal",
            label: "%",
            labelSize: "1.2rem"
        });
        this.people_DoD_Card.update({
            title: "环比",
            titleSize: "0.8rem",
            insteadValue: getComparisonString(data.peopleFlow_PD, data.peopleFlow),
            valueSize: "1.5rem",
            valueColor: getComparisonColor(data.peopleFlow_PD, data.peopleFlow),
            valueFontStyle: "normal",
            label: "%",
            labelSize: "1.2rem"
        });

        //逐日销售
        let salesByDaysOption: echarts.EChartOption = {
            legend: {
                show: true,
                orient: "horizontal",
                textStyle:{
                    color:"snow"
                },
                align: "right",
                icon:"rect"
            },
            grid:{
                top:30,
                right:10,
                bottom:30,
                left:30
            },
            xAxis:{
                show:true,
                type:"category",
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:"#153271"
                    }
                },
                data:['1','2','3']
            },
            yAxis:{
                show:true,
                type:"value",
                splitNumber:2,
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:"snow"
                    }
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#153271"
                    }
                },
                axisTick:{
                    show:false
                }
            },
            series: [
                {
                    type: "line",
                    name: "销售",
                    smooth: true,
                    itemStyle:{
                        color:"#00ffd0"
                    },
                    data: [
                        { name: "1", value: 1 },
                        { name: "2", value: 2 },
                        { name: "3", value: 3 }
                    ]
                },
                {
                    type: "line",
                    name: "去年",
                    smooth: true,
                    itemStyle:{
                        color:"#aaaaaa"
                    },
                    data: [
                        { name: "1", value: 1 },
                        { name: "2", value: 3 },
                        { name: "3", value: 2 }
                    ]
                }
            ]
        };
        this.salesByDaysChart.setOption(salesByDaysOption);
    }
    public static generateVirtualData(index: number): ProjectOperatingData {
        return {
            projectId: ["43001", "37001", "33201", "55301"][index],
            projectName: ["长沙览秀城", "青岛金茂湾", "南京金茂汇", "丽江J·LIFE"][index],
            openingRate: 0.7 + 0.3 * Math.random(),
            salesTotal: 1076876.32 * Math.random(),
            salesTotal_PD: 1234893.34 * Math.random(),
            salesTotal_PY: 989877.87 * Math.random(),
            peopleFlow: Math.floor(238989 * Math.random()),
            peopleFlow_PD: Math.floor(244098 * Math.random()),
            peopleFlow_PY: Math.floor(182439 * Math.random()),
            openingRate_sales: 0.68 + 0.3 * Math.random()
        };
    }
}
