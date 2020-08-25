import * as echarts from 'echarts';
import {MiniKpiCard} from  '../customComponents/miniKpiCard'
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
    dataByDays?:[{
        day:number,
        salesTotal:number,
        salesTotal_PY:number,
        peopleFlow:number,
        peopleFlow_PY:number
    }]
}

export class ProjectCard{
    private container:HTMLDivElement;
    private data:ProjectOperatingData;
    private titleContainer:HTMLDivElement;
    private salesTotalCard:MiniKpiCard;
    private peopleFlowCard:MiniKpiCard;
    private sales_YoY_Card:MiniKpiCard;
    private sales_DoD_Card:MiniKpiCard;
    private people_YoY_Card:MiniKpiCard;
    private people_DoD_Card:MiniKpiCard;
    
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

        /*# 布局*/
        //行布局
        let rowTop=document.createElement("div");
        let rowBottom=document.createElement("div");
        rowTop.className="jmsy-bs-mainpage-page2-card-rows-top";
        rowBottom.className="jmsy-bs-mainpage-page2-card-rows-bottom";
        this.container.appendChild(rowTop);
        this.container.appendChild(rowBottom);
        //左列
        let openingRateContainer=document.createElement("div");
        rowTop.appendChild(openingRateContainer);
        let salesOpeningRateContainer=document.createElement("div");
        rowBottom.appendChild(salesOpeningRateContainer);
        //中间列
        let topCenterContainer=document.createElement("div");
        let bottomCenterContainer=document.createElement("div");
        topCenterContainer.setAttribute("class","jmsy-bs-mainpage-page2-card-top-center");
        bottomCenterContainer.setAttribute("class","jmsy-bs-mainpage-page2-card-bottom-center");
        rowTop.appendChild(topCenterContainer);
        rowBottom.appendChild(bottomCenterContainer);

        /*中间列细节*/
        //日销售
        let salesTotalContainer=document.createElement("div");
        salesTotalContainer.className="jmsy-bs-mainpage-page2-card-center-wide";
        topCenterContainer.appendChild(salesTotalContainer);
        //销售同环比
        let topComparisonContainer=document.createElement("div");
        topComparisonContainer.className="jmsy-bs-mainpage-page2-card-center-wide";
        topCenterContainer.appendChild(topComparisonContainer);
        //日客流
        let peopleFlowContainer=document.createElement("div");
        peopleFlowContainer.className="jmsy-bs-mainpage-page2-card-center-wide";
        bottomCenterContainer.appendChild(peopleFlowContainer);
        //客流同环比
        let bottomComparisonContainer=document.createElement("div");
        bottomComparisonContainer.className="jmsy-bs-mainpage-page2-card-center-wide";
        bottomCenterContainer.appendChild(bottomComparisonContainer);

        //开铺率-上左
        this.drawOpeningRate(openingRateContainer,data.openingRate);

        //销售开铺率-下左
        this.drawOpeningRate(salesOpeningRateContainer,data.openingRate_sales,"销售开铺率");

        //日销售-中上上
        this.salesTotalCard=new MiniKpiCard(salesTotalContainer);

        //日客流-中下上
        this.peopleFlowCard=new MiniKpiCard(peopleFlowContainer);
        //this.drawWideKpiCard(peopleFlowContainer,data.peopleFlow,"日客流","人次","#1f0bbf","#1f0bbf");

        //销售同环比
        //同比卡
        let sales_YoY_Container=document.createElement("div");
        topComparisonContainer.appendChild(sales_YoY_Container);
        sales_YoY_Container.className="jmsy-bs-mainpage-page2-yoy";
        this.sales_YoY_Card=new MiniKpiCard(sales_YoY_Container);
        //环比卡
        let sales_DoD_Container=document.createElement("div");
        topComparisonContainer.appendChild(sales_DoD_Container);
        sales_DoD_Container.className="jmsy-bs-mainpage-page2-dod";
        this.sales_DoD_Card=new MiniKpiCard(sales_DoD_Container);

        //销售同环比
        //同比卡
        let people_YoY_Container=document.createElement("div");
        bottomComparisonContainer.appendChild(people_YoY_Container);
        people_YoY_Container.className="jmsy-bs-mainpage-page2-yoy";
        this.people_YoY_Card=new MiniKpiCard(people_YoY_Container);
        //环比卡
        let people_DoD_Container=document.createElement("div");
        bottomComparisonContainer.appendChild(people_DoD_Container);
        people_DoD_Container.className="jmsy-bs-mainpage-page2-dod";
        this.people_DoD_Card=new MiniKpiCard(people_DoD_Container);

        if(data){
            this.update(data);
        };
    }
    private drawOpeningRate(openingRateContainer:HTMLDivElement,value:number,name:string="开铺率"){
        openingRateContainer.className="echarts-container jmsy-bs-project-card-openingrate";
        let option = {
            series: [{
                name: name,
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
                data: [{ value: Math.round(100 * value), name: name }]
            }]
        };
        console.debug(option);
        let openingrate_chart = echarts.init(openingRateContainer);
        openingrate_chart.setOption(option);
    }
    public update(data:ProjectOperatingData){
        //日销售
        this.salesTotalCard.update({
            title:"日销售",
            titleSize:"1rem",
            value:data.salesTotal,
            valueColor:"#00ffd0",
            valueSize:"2.2rem",
            label:"元",
            labelSize:"1.2rem",
            labelColor:"#00ffd0"
        });
        this.sales_YoY_Card.update({
            title:"同比",
            titleSize:"0.8rem",
            value:data.salesTotal_PY>0?data.salesTotal/data.salesTotal_PY-1:undefined,
            valueSize:"1.5rem",
            valueColor:"#bd967a",
            valueFontStyle:"normal",
            label:"%",
            labelColor:"#bd967a",
            labelSize:"1.2rem"
        });
        this.sales_DoD_Card.update({
            title:"环比",
            titleSize:"0.8rem",
            value:data.salesTotal_PD>0?data.salesTotal/data.salesTotal_PD-1:undefined,
            valueSize:"1.5rem",
            valueColor:"#ee3d3d",
            valueFontStyle:"normal",
            label:"%",
            labelColor:"#ee3d3d",
            labelSize:"1.2rem"
        });
        //客流
        this.peopleFlowCard.update({
            title:"日客流",
            titleSize:"1rem",
            value:data.peopleFlow,
            valueSize:"2.2rem",
            valueColor:"#1f0bbf",
            label:"人次",
            labelSize:"1.2rem",
            labelColor:"#1f0bbf"
        });
        this.people_YoY_Card.update({
            title:"同比",
            titleSize:"0.8rem",
            value:data.peopleFlow_PY>0?data.peopleFlow/data.peopleFlow_PY-1:undefined,
            valueSize:"1.5rem",
            valueColor:"#bd967a",
            valueFontStyle:"normal",
            label:"%",
            labelColor:"#bd967a",
            labelSize:"1.2rem"
        });
        this.people_DoD_Card.update({
            title:"环比",
            titleSize:"0.8rem",
            value:data.peopleFlow_PD>0?data.peopleFlow/data.peopleFlow_PD-1:undefined,
            valueSize:"1.5rem",
            valueColor:"#ee3d3d",
            valueFontStyle:"normal",
            label:"%",
            labelColor:"#ee3d3d",
            labelSize:"1.2rem"
        });

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
}
