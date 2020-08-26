import * as echarts from 'echarts';
import '../../../node_modules/echarts/map/js/china';
import { WindowScrollController } from '@fullcalendar/core';
export interface IProjectMapData {
    projectName: string,
    cityName?: string,
    longtitude: number,
    latitude: number,
    value: number
}
export class ProjectsMap {
    private mapChart: echarts.ECharts;
    constructor(container: HTMLDivElement) {
        this.mapChart = echarts.init(container);
    }
    public update(data: IProjectMapData[]) {
        let seriesData:{name:string,value:number[]}[]=[];
        let maxValue:number=0;
        data.forEach((d)=>{
            seriesData.push({name:d.projectName,value:[d.longtitude,d.latitude,d.value]});
            if(d.value>maxValue){
                maxValue=d.value;
            };
        });
        let option:echarts.EChartOption = {
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#5568b33f',
                        borderColor: '#626782'
                    },
                    emphasis: {
                        areaColor: '#051853'
                    }
                }
            },
            series: [{
                name: 'pm2.5',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: seriesData,
                symbolSize: function(val:number[]){return val[2]/maxValue*15},
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#216eff'
                    }
                }
            },
            {
                name: '前四项',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: seriesData.sort(function (a, b) {
                    return b.value[2] - a.value[2];
                }).slice(0, 4),
                symbolSize: function(val:number[]){return val[2]/maxValue*15},
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false,
                        backgroundColor:'rgba(0,0,80,0.2)'
                    }
                },
                itemStyle: {
                    normal: {
                        show:false,
                        color: '#00ffd0',
                        shadowBlur: 10,
                        shadowColor: '#01898a'
                    }
                },
                zlevel: 1
            }
            ]
        };
        this.mapChart.setOption(option);
        this.mapChart.off("click");
        this.mapChart.on("click",function(param:any){
            if(param.componentType&&param.componentType=="series"&&param.data&&param.data.name){
                console.debug(param);
                window.location.href="http://www.baidu.com";
            };
        });
    }
    public static generateVirtualData():IProjectMapData[]{
        let randomValue = () => { return 10000000 + Math.random() * 6000000 };
        var data: IProjectMapData[] = [
            { projectName: '长沙览秀城', value: randomValue(), longtitude: 113, latitude: 28.21 },
            { projectName: '南京金茂汇', value: randomValue(), longtitude: 118.78, latitude: 32.04 },
            { projectName: '青岛金茂湾', value: randomValue(), longtitude: 120.33, latitude: 36.07 },
            { projectName: '丽江J·LIFE', value: randomValue(), longtitude: 100.23, latitude: 26.88 },
            { projectName: '上海J·LIFE', value: randomValue(), longtitude: 121.48, latitude: 31.22 },
            { projectName: '上海北外滩购物中心', value: randomValue(), longtitude: 121.48, latitude: 31.22 },
            { projectName: '张家港览秀城', value: randomValue(), longtitude: 120.555821, latitude: 31.875428 },
            { projectName: '杭州金茂汇', value: randomValue(), longtitude: 120.19, latitude: 30.26 }

        ];
        return data;
    }
}