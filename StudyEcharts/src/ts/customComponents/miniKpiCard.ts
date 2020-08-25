import '../../css/mini-kpi-card.css';
interface IMiniKpiCardOption{
    title?:string,
    titleSize?:string,
    value?:number,
    label?:string,//单位
    valueColor?:string,
    labelColor?:string,
    valueSize?:string,
    labelSize?:string,
    valueFontStyle?:string,
    labelFontStyle?:string
}

export class MiniKpiCard{
    private container:HTMLDivElement;
    private titleContainer:HTMLDivElement;
    private titleObj:HTMLParagraphElement;
    private contentContainer:HTMLDivElement;
    private valueObj:HTMLParagraphElement;
    private labelObj:HTMLParagraphElement;
    constructor(container:HTMLDivElement,option?:IMiniKpiCardOption){
        this.container=container;
        let card=document.createElement("div");
        card.className="mini-kpi-card-inner-container";
        card.setAttribute("style","margin:0.5vh 0px;")
        container.appendChild(card);

        
        //指标卡标题
        let titleContainer=document.createElement("div");
        titleContainer.className="mini-kpi-card-title-container";
        this.titleContainer=titleContainer;
        card.appendChild(titleContainer);
        let titleObj=document.createElement("p");
        this.titleObj=titleObj;
        titleObj.className="mini-kpi-card-title";
        titleContainer.appendChild(titleObj);

        //指标卡内容
        let contentContainer=document.createElement("div");
        contentContainer.className="mini-kpi-card-content-container";
        this.contentContainer=contentContainer;
        card.appendChild(contentContainer);

        //数值
        let valueObj=document.createElement("p");
        this.valueObj=valueObj;
        valueObj.className="mini-kpi-card-content-value";

        contentContainer.appendChild(valueObj);

        //单位
        let labelObj=document.createElement("p");
        this.labelObj=labelObj;
        labelObj.className="mini-kpi-card-content-label";

        contentContainer.appendChild(labelObj);
        if(option){
            this.update(option);
        }
    }
    public update(option:IMiniKpiCardOption){
        let title:string=option.title??"MiniKpiCard";
        let titleSize:string=option.titleSize??"1rem";
        let value:number=option.value??0;
        let hasValue:boolean=option.value?true:false;
        let insteadValue:string="无";
        let label:string=option.label??"";
        let valueColor:string=option.valueColor??"snow";
        let labelColor:string=option.labelColor??"snow";
        let valueSize:string=option.valueSize??"2.2rem";
        let labelSize:string=option.labelSize??"1.5rem";
        let valueFontStyle:string=option.valueFontStyle??"italic";
        let labelFontStyle:string=option.labelFontStyle??"normal";
        if(value>=10000){
            value/=10000;
            label="万"+label;
        };
        this.titleObj.innerText=title;
        this.titleObj.setAttribute("style","font-size:"+titleSize+";");
        this.titleContainer.setAttribute("style","height:"+this.titleObj.clientHeight+"px;");
        this.valueObj.innerText=hasValue?value.toFixed(1):insteadValue;
        this.valueObj.setAttribute("style","color:"+valueColor+";font-size:"+valueSize+";font-style:"+valueFontStyle+";");
        this.contentContainer.setAttribute("style","top:"+((this.titleContainer.clientHeight+this.container.clientHeight-this.valueObj.clientHeight)/2)+"px;bottom:0px;");
        this.labelObj.innerText=label;
        this.labelObj.setAttribute("style","color:"+labelColor+";font-size:"+labelSize+";font-style:"+labelFontStyle+";");
    }
}
