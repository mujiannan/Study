function addBorderForCards() {
    var cards = document.getElementsByClassName("jmsy-bs-content-card");
    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        span_types = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        for (j = 0; j < 4; j++) {
            span = document.createElement("span");
            span.setAttribute("class", span_types[j]);
            card.appendChild(span);
        }
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

function drawMainPageMap() {
    var china_chart = echarts.init(document.getElementById("jmsy-bs-mainpage-map"));
    var data = [
        { name: '海门', value: 9 },
        { name: '鄂尔多斯', value: 12 },
        { name: '招远', value: 12 },
        { name: '舟山', value: 12 },
        { name: '齐齐哈尔', value: 14 },
        { name: '盐城', value: 15 },
        { name: '赤峰', value: 16 },
        { name: '青岛', value: 18 },
        { name: '乳山', value: 18 },
        { name: '金昌', value: 19 },
        { name: '泉州', value: 21 },
        { name: '莱西', value: 21 },
        { name: '日照', value: 21 },
        { name: '胶南', value: 22 },
        { name: '南通', value: 23 },
        { name: '拉萨', value: 24 },
        { name: '云浮', value: 24 },
        { name: '梅州', value: 25 },
        { name: '文登', value: 25 },
        { name: '上海', value: 25 },
        { name: '攀枝花', value: 25 },
        { name: '威海', value: 25 },
        { name: '承德', value: 25 },
        { name: '厦门', value: 26 },
        { name: '汕尾', value: 26 },
        { name: '潮州', value: 26 },
        { name: '丹东', value: 27 },
        { name: '太仓', value: 27 },
        { name: '曲靖', value: 27 },
        { name: '烟台', value: 28 },
        { name: '福州', value: 29 },
        { name: '瓦房店', value: 30 },
        { name: '即墨', value: 30 },
        { name: '抚顺', value: 31 },
        { name: '玉溪', value: 31 },
        { name: '张家口', value: 31 },
        { name: '阳泉', value: 31 },
        { name: '莱州', value: 32 },
        { name: '湖州', value: 32 },
        { name: '汕头', value: 32 },
        { name: '昆山', value: 33 },
        { name: '宁波', value: 33 },
        { name: '湛江', value: 33 },
        { name: '揭阳', value: 34 },
        { name: '荣成', value: 34 },
        { name: '连云港', value: 35 },
        { name: '葫芦岛', value: 35 },
        { name: '常熟', value: 36 },
        { name: '东莞', value: 36 },
        { name: '河源', value: 36 },
        { name: '淮安', value: 36 },
        { name: '泰州', value: 36 },
        { name: '南宁', value: 37 },
        { name: '营口', value: 37 },
        { name: '惠州', value: 37 },
        { name: '江阴', value: 37 },
        { name: '蓬莱', value: 37 },
        { name: '韶关', value: 38 },
        { name: '嘉峪关', value: 38 },
        { name: '广州', value: 38 },
        { name: '延安', value: 38 },
        { name: '太原', value: 39 },
        { name: '清远', value: 39 },
        { name: '中山', value: 39 },
        { name: '昆明', value: 39 },
        { name: '寿光', value: 40 },
        { name: '盘锦', value: 40 },
        { name: '长治', value: 41 },
        { name: '深圳', value: 41 },
        { name: '珠海', value: 42 },
        { name: '宿迁', value: 43 },
        { name: '咸阳', value: 43 },
        { name: '铜川', value: 44 },
        { name: '平度', value: 44 },
        { name: '佛山', value: 44 },
        { name: '海口', value: 44 },
        { name: '江门', value: 45 },
        { name: '章丘', value: 45 },
        { name: '肇庆', value: 46 },
        { name: '大连', value: 47 },
        { name: '临汾', value: 47 },
        { name: '吴江', value: 47 },
        { name: '石嘴山', value: 49 },
        { name: '沈阳', value: 50 },
        { name: '苏州', value: 50 },
        { name: '茂名', value: 50 },
        { name: '嘉兴', value: 51 },
        { name: '长春', value: 51 },
        { name: '胶州', value: 52 },
        { name: '银川', value: 52 },
        { name: '张家港', value: 52 },
        { name: '三门峡', value: 53 },
        { name: '锦州', value: 54 },
        { name: '南昌', value: 54 },
        { name: '柳州', value: 54 },
        { name: '三亚', value: 54 },
        { name: '自贡', value: 56 },
        { name: '吉林', value: 56 },
        { name: '阳江', value: 57 },
        { name: '泸州', value: 57 },
        { name: '西宁', value: 57 },
        { name: '宜宾', value: 58 },
        { name: '呼和浩特', value: 58 },
        { name: '成都', value: 58 },
        { name: '大同', value: 58 },
        { name: '镇江', value: 59 },
        { name: '桂林', value: 59 },
        { name: '张家界', value: 59 },
        { name: '宜兴', value: 59 },
        { name: '北海', value: 60 },
        { name: '西安', value: 61 },
        { name: '金坛', value: 62 },
        { name: '东营', value: 62 },
        { name: '牡丹江', value: 63 },
        { name: '遵义', value: 63 },
        { name: '绍兴', value: 63 },
        { name: '扬州', value: 64 },
        { name: '常州', value: 64 },
        { name: '潍坊', value: 65 },
        { name: '重庆', value: 66 },
        { name: '台州', value: 67 },
        { name: '南京', value: 67 },
        { name: '滨州', value: 70 },
        { name: '贵阳', value: 71 },
        { name: '无锡', value: 71 },
        { name: '本溪', value: 71 },
        { name: '克拉玛依', value: 72 },
        { name: '渭南', value: 72 },
        { name: '马鞍山', value: 72 },
        { name: '宝鸡', value: 72 },
        { name: '焦作', value: 75 },
        { name: '句容', value: 75 },
        { name: '北京', value: 79 },
        { name: '徐州', value: 79 },
        { name: '衡水', value: 80 },
        { name: '包头', value: 80 },
        { name: '绵阳', value: 80 },
        { name: '乌鲁木齐', value: 84 },
        { name: '枣庄', value: 84 },
        { name: '杭州', value: 84 },
        { name: '淄博', value: 85 },
        { name: '鞍山', value: 86 },
        { name: '溧阳', value: 86 },
        { name: '库尔勒', value: 86 },
        { name: '安阳', value: 90 },
        { name: '开封', value: 90 },
        { name: '济南', value: 92 },
        { name: '德阳', value: 93 },
        { name: '温州', value: 95 },
        { name: '九江', value: 96 },
        { name: '邯郸', value: 98 },
        { name: '临安', value: 99 },
        { name: '兰州', value: 99 },
        { name: '沧州', value: 100 },
        { name: '临沂', value: 103 },
        { name: '南充', value: 104 },
        { name: '天津', value: 105 },
        { name: '富阳', value: 106 },
        { name: '泰安', value: 112 },
        { name: '诸暨', value: 112 },
        { name: '郑州', value: 113 },
        { name: '哈尔滨', value: 114 },
        { name: '聊城', value: 116 },
        { name: '芜湖', value: 117 },
        { name: '唐山', value: 119 },
        { name: '平顶山', value: 119 },
        { name: '邢台', value: 119 },
        { name: '德州', value: 120 },
        { name: '济宁', value: 120 },
        { name: '荆州', value: 127 },
        { name: '宜昌', value: 130 },
        { name: '义乌', value: 132 },
        { name: '丽水', value: 133 },
        { name: '洛阳', value: 134 },
        { name: '秦皇岛', value: 136 },
        { name: '株洲', value: 143 },
        { name: '石家庄', value: 147 },
        { name: '莱芜', value: 148 },
        { name: '常德', value: 152 },
        { name: '保定', value: 153 },
        { name: '湘潭', value: 154 },
        { name: '金华', value: 157 },
        { name: '岳阳', value: 169 },
        { name: '长沙', value: 175 },
        { name: '衢州', value: 177 },
        { name: '廊坊', value: 193 },
        { name: '菏泽', value: 194 },
        { name: '合肥', value: 229 },
        { name: '武汉', value: 273 },
        { name: '大庆', value: 279 }
    ];
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    };

    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    option = {
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
                data: convertData(data),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
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
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data.sort(function(a, b) {
                    return b.value - a.value;
                }).slice(0, 6)),
                symbolSize: function(val) {
                    return val[2] / 10;
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00ffd0',
                        shadowBlur: 10,
                        shadowColor: '#01898a'
                    }
                },
                zlevel: 1
            }
        ]
    };

    china_chart.setOption(option);
}
drawMainPageMap();

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
            radius: ["50%", "75%"],
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