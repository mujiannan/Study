var echarts = require("../../node_modules/echarts/dist/echarts.min.js");

function addBorderForCards() {
    var cards = document.getElementsByClassName("jmsy-bs-content-card");
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        span_types = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        for (j = 0; j < 4; j++) {
            span = document.createElement("span");
            span.setAttribute("class", span_types[j]);
            card.appendChild(span);
        };
    };
}

addBorderForCards();


function drawOpeningRate() {
    gauges_container = document.getElementById("jmsy-bs-mainpage-openingrate");
    var projects = ['长沙览秀城', '南京金茂汇', '青岛金茂湾', '丽江J·LIFE'];
    var data = [0.7662, 0.5254, 0.8331, 0.9198];

    for (i = 0; i < projects.length; i++) {
        gauge_container = document.createElement('div');
        gauge_container.setAttribute("class", "openingrate-gauge-container");
        gauge_container.setAttribute("style", "display:inline-block;height:100%;width:" + (100 / projects.length) + "%;");
        gauges_container.appendChild(gauge_container);
        gauge = document.createElement('div');
        gauge.setAttribute("class", "openingrate-gauge");
        gauge.setAttribute("style", "display:inline-block;height:100%;width:100%;");
        gauge_container.appendChild(gauge);
        option = {
            series: [{
                name: "开铺率",
                type: "gauge",
                startAngle: 90,
                endAngle: -269,
                splitNumber: 2,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [data[i], "#be967c"],
                            [1, "#343d5a"]
                        ],
                        width: 10
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
                    offsetCenter: [0, "150%"],
                    color: "snow",
                    fontSize: 16
                },
                detail: {
                    show: true,
                    offsetCenter: ["0%", "0%"],
                    fontSize: 20,
                    color: "#be967c",
                    formatter: "{value}%"
                },
                data: [{ value: Math.round(100 * data[i]), name: projects[i].substring(0, 2) }]
            }]
        };
        openingrate_chart = echarts.init(gauge);
        openingrate_chart.setOption(option);

    };
}
drawOpeningRate();

function drawMainPageVippopularity() {
    var shops = ['伊米妮', '九客便利', '众乐琴行', '超捷', '优瑞亲子游泳', '传骑马术', '佐敦扎记港式茶餐厅', '佐梵雅', '佐治牛仔', '佰邦服饰'];
    var billsCount = [7659, 4453, 8985, 6543, 4324, 6989, 2309, 10978, 8977, 3289];
    shopsData = [];

    //把名字太长的改成5个字...
    for (i = 0; i < shops.length; i++) {
        if (shops[i].length > 5) {
            shops[i] = shops[i].substring(0, 4) + "...";
        };
    };

    for (i = 0; i < shops.length; i++) {
        shopsData.push({
            name: shops[i],
            billsCount: billsCount[i]
        });
    };
    shopsData.sort((a, b) => {
        if (a.billsCount > b.billsCount) {
            return 1;
        } else {
            return -1;
        };
    });
    shops = [];
    billsCount = [];
    for (i = 0; i < shopsData.length; i++) {
        shops.push((shopsData.length - i) + "." + shopsData[i].name);
        billsCount.push(shopsData[i].billsCount);
    };
    option = {
        grid: {
            show: false,
            top: 40,
            left: "100",
            bottom: "5%",
        },
        xAxis: {
            type: "value",
            show: false,
            axisLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            grid: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },

        yAxis: {
            type: "category",
            data: shops,
            axisLabel: {
                show: true,
                interval: 0,
                color: "snow",
                fontSize: 12,
                align: 'left',
                margin: 80
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            grid: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },

        series: [{
            type: "bar",
            data: billsCount,
            label: {
                show: false
            },
            barCategoryGap: "50%",
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: "#1852c0a0"
                    }, {
                        offset: 1,
                        color: "#01FFD1a0"
                    }])
                }
            }
        }]
    };
    var vipPopularity_container = document.getElementById("jmsy-bs-mainpage-vippopularity");
    vipPopularity_chart = echarts.init(vipPopularity_container, "jmsy");
    vipPopularity_chart.setOption(option);
}
drawMainPageVippopularity();


function drawMainPageBrands() {
    var container = document.getElementById("jmsy-bs-mainpage-brands");
    //输入
    var source_urls = ['http://img3.winshang.com/Upload/brand/logo/2017/11/21/131557178203281020.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/30/20115302247269846631_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/18/131527809940217752.jpg', 'http://yst.winshang.com/member/PinPai/2013/7/10/20137101053211402641_1.gif', 'http://img3.winshang.com/Upload/brand/logo/2017/12/19/131581451539724417.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/15/131577976674743721.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/19/131528799680148784.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/28/131563344420248405.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/19/131581264133017531.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/9/11/131811060504024298.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/5/6/132016054818604462.png', 'http://img3.winshang.com/Upload/brand/logo/2017/10/13/131523350865915985.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/4/17/131684295598297770.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/6/28/131746495039504580.png', 'http://img3.winshang.com/Upload/brand/logo/2017/11/27/131562462955691818.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/10/31/132169773969467090.png', 'http://img3.winshang.com/Upload/brand/logo/2019/4/24/132005730051166545.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/15/131472398716203089.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/11/131521784680107927.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/27/131535581465733330.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/6/131544332497475198.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/4/131568496776437110.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/27/131455971788145446.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/18/131475104647314658.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/2011531121021890662_1.jpg', 'http://img3.winshang.com/Upload/brand/2017/12/5/131569362556687674.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/26/131534632505965954.png', 'http://img3.winshang.com/Upload/brand/logo/2017/8/10/131468509299418841.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/10/18/132158368326885261.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/28/131588985297276759.png', 'http://img3.winshang.com/Upload/brand/logo/2017/11/21/131557179586874105.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/24/131453619672108272.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/23/131532254584829589.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/24/131559919712368690.png', 'http://img3.winshang.com/Upload/brand/logo/2017/12/13/131576230291405496.jpg', 'http://yst.winshang.com/member/PinPai/2013/7/10/2013710947397186374_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/18/131527884525405932.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/8/131546115257185312.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/9/131467403006979720.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/18/131475018283185934.jpg', 'http://img3.winshang.com/Upload/brand/logo/2020/4/27/132324423620303657.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/27/131535636921065858.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/8/131545970990988370.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/201153113515187202_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/8/131466528202650037.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/20115311353382762224_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/24/131533004710208892.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/10/24/132163834017801020.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/1/10/131600274209715314.png', 'http://yst.winshang.com/member/PinPai/2011/5/31/2011531147219424894_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/28/131589001155568404.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/13/131576256371826086.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/12/131443127320254633.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/29/131590139520192959.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/5/9/131703329519758127.png', 'http://img3.winshang.com/Upload/brand/logo/2017/8/21/131477694086068539.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/3/131462037483348416.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/26/131534636635577650.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/6/131544343150198700.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/13/131576280107299106.jpg', 'http://yst.winshang.com/member/PinPai/2014/11/27/201411271622472642994_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/4/25/132006317434459538.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/1/16/131605673072163714.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/2011531150218001313_1.gif', 'http://img3.winshang.com/Upload/brand/logo/2019/5/8/132017808179701542.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/19/131528778268525828.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/2011531157203818745_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/31/131459688589615179.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/25/131454472684044220.png', 'http://img3.winshang.com/Upload/brand/logo/2017/11/1/131540022611084506.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/6/131544357712203172.jpg', 'http://yst.winshang.com/member/PinPai/2013/5/29/20135291552477021007_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/8/20/131792018564333308.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/25/131533867619550386.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/27/131562382045643305.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/25/131454374020070560.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/22/131558131746498240.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/4/17/131999412993495614.png', 'http://img3.winshang.com/Upload/brand/logo/2017/7/25/131454401053091004.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/22/131558034825836325.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/17/131526950684032275.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/8/2/131461374678533564.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/11/131521796805143823.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/15/131577983818631317.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/10/13/131523310282770204.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/18/131580505299350334.jpg', 'http://yst.winshang.com/member/PinPai/2013/7/9/201379105371712135_1.gif', 'http://img3.winshang.com/Upload/brand/logo/2017/7/25/131454484281223912.jpg', 'http://yst.winshang.com/member/PinPai/2011/5/31/20115311852135873324_1.jpg', 'http://yst.winshang.com/member/PinPai/2013/4/16/20134161541358514261_1.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/5/7/132016683626666207.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/19/131581244627463859.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/14/131444885311605869.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/8/28/131799235106649273.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/12/29/131590047369987434.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/7/24/131453635224974501.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/6/131544073441261247.jpg', 'http://img3.winshang.com/Upload/brand/logo/2019/4/19/132001373568069726.jpg', 'http://img3.winshang.com/Upload/brand/logo/2018/5/14/131707412279192293.jpg', 'http://img3.winshang.com/Upload/brand/logo/2017/11/29/131564193548047933.jpg'];

    brandsCount = source_urls.length;
    firstRowBrandsCount = parseInt(brandsCount / 2);
    brands_logo_url = [source_urls.slice(0, firstRowBrandsCount), source_urls.slice(firstRowBrandsCount, brandsCount)];
    //左右滚动
    function scrollLeftRight(obj) {
        //切换滚动方向
        function changeOrientation(obj) {
            route = {
                "to left": "to right",
                "to right": "to left"
            };
            oldOrientation = obj.getAttribute('data-scrollorientation');
            newOrientation = oldOrientation ? route[oldOrientation] : 'to left';
            obj.setAttribute('data-scrollorientation', newOrientation);
        }
        if ((obj.scrollLeft + obj.offsetWidth >= obj.scrollWidth) || (obj.scrollLeft <= 0)) {
            changeOrientation(obj);
        };
        if (obj.getAttribute('data-scrollorientation') == 'to left') {
            obj.scrollLeft++;
        } else {
            obj.scrollLeft--;
        };
    }
    //无限向左滚动
    function scrollLeftInfinity(obj) {
        if (obj.scrollLeft >= obj.scrollWidth / 2) {
            obj.scrollLeft = 0;
        } else {
            obj.scrollLeft++;
        };
    }
    for (rowNum = 0; rowNum < 2; rowNum++) {
        rowContainer = document.createElement('div');
        rowContainer.setAttribute('class', 'brands-row-container');
        rowContainer.setAttribute('id', 'brands-row-container' + rowNum);
        rowContainer.setAttribute("style", "height:50%;overflow-x:hidden;overflow-y:nowrap;white-space:nowrap;");
        for (j = 0; j < brands_logo_url[rowNum].length; j++) {
            logo = document.createElement('img');
            logo.setAttribute("class", "brand-logo");
            logo.setAttribute("src", brands_logo_url[rowNum][j]);
            rowContainer.appendChild(logo);
        };
        //横向双倍，用于假无限滚动
        for (j = 0; j < brands_logo_url[rowNum].length; j++) {
            logo = document.createElement('img');
            logo.setAttribute("class", "brand-logo");
            logo.setAttribute("src", brands_logo_url[rowNum][j]);
            rowContainer.appendChild(logo);
        };
        container.appendChild(rowContainer);
        setInterval(scrollLeftInfinity, 10, rowContainer);
    };
}
drawMainPageBrands();


function drawVipRoseChart() {
    container = document.getElementById('jmsy-bs-mainpage-viprosechart');
    var projects = ['长沙', '南京', '青岛', '丽江'];
    var vipsCount = [54543, 43413, 43412, 12434];
    chartData = [];
    for (i = 0; i < projects.length; i++) {
        chartData.push({
            value: vipsCount[i],
            name: projects[i]
        });
    };
    var option = {
        legend: {
            left: "left",
            top: "center",
            data: projects,
            orient: "vertical",
            textStyle: {
                color: "snow"
            }
        },

        label: {
            show: false
        },
        series: [{
            type: "pie",
            center: ["60%", "50%"],
            radius: ["30%", "60%"],
            roseType: "radius",
            label: {
                show: false
            },
            data: chartData
        }]
    };
    pieChart = echarts.init(container, "jmsy");
    pieChart.setOption(option);
}
drawVipRoseChart();


function drawVipsBySex() {
    container = document.getElementById("jmsy-bs-mainpage-vipsbysex");
    var category = ["男性", "女性"];
    var values = [104928, 18694];
    option = {
        grid: {
            show: false,
            bottom: 40,
            top: 20,
            left: 40,
            right: 40
        },
        xAxis: {
            type: "category",
            show: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#153271"
                }
            }
        },

        yAxis: {
            type: "value",
            data: values,
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            grid: {
                show: false
            },
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            }
        },

        series: [{
                type: "bar",
                data: [values[0]],
                barWidth: "20%",
                label: {
                    show: true,
                    position: "bottom",
                    color: "snow",
                    formatter: "男性"
                },
                barGap: "100%",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#280aeaa0"
                        }, {
                            offset: 1,
                            color: "#0c125ba0"
                        }])
                    }
                }
            },
            {
                type: "bar",
                data: [values[1]],
                barWidth: "20%",
                label: {
                    show: true,
                    position: "bottom",
                    color: "snow",
                    formatter: "女性"
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#01dab8a0"
                        }, {
                            offset: 1,
                            color: "#045a66a0"
                        }])
                    }
                }
            }
        ]
    };
    vipsBySexChart = echarts.init(container, "jmsy");
    vipsBySexChart.setOption(option);
}
drawVipsBySex();