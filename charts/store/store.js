
(function(window, document, $) {
    'use strict';


    /********************************
     *       Monthly Sales           *
     ********************************/
    // Set paths
    // ------------------------------

    require.config({
        paths: {
            echarts: 'app-assets/vendors/js/charts/echarts'
        }
    });


    // Configuration
    // ------------------------------

    require(
        [
            'echarts',
            'echarts/chart/pie',
            'echarts/chart/funnel'
        ],


        // Charts setup
        function (ec) {

            /************************************
             *       Top Selling Categories      *
             ************************************/

                // Initialize chart
                // ------------------------------
            var topCategoryChart = ec.init(document.getElementById('doughnut'));

            // Chart Options
            // ------------------------------
            var topCategoryChartOptions = {

                // Add title
                title: {
                    text: 'لمنتجات الموجودة داخل المتجر',
                    x: 'center',
                    textStyle: {
                        color: '#FFF'
                    },
                    subtextStyle: {
                        color: '#FFF'
                    }
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['كراسي', 'أجهزة'],
                    textStyle: {
                        color: '#FFF'
                    },
                },

                // Add custom colors
                color: ['#ffd322', '#ffa422'],

                // Display toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    feature: {
                        dataView: {
                            show: true,
                            readOnly: false,
                            title: 'عرض البيانات',
                            lang: ['View chart data', 'غلق', 'تحديث']
                        },
                        magicType: {
                            show: true,
                            title: {
                                pie: '\'تغير الشكل',
                                funnel: '\'تغير الشكل',
                            },
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    y: '20%',
                                    width: '50%',
                                    height: '70%',
                                    funnelAlign: 'left',
                                    max: 1548
                                }
                            }
                        },
                        restore: {
                            show: true,
                            title: 'استعادة'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'حفظ كصورة',
                            lang: ['Save']
                        }
                    },
                    color: '#FFF'
                },

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [
                    {
                        name: 'المتجر',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        center: ['50%', '57.5%'],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: '#FFF'
                                    }
                                },
                                labelLine: {
                                    show: true,
                                    lineStyle: {
                                        color: '#FFF'
                                    }
                                }
                            },
                            emphasis: {
                                label: {
                                    show: true,
                                    formatter: '{b}' + '\n\n' + '{c} ({d}%)',
                                    position: 'center',
                                    textStyle: {
                                        fontSize: '17',
                                        fontWeight: '500'
                                    }
                                }
                            }
                        },

                        data: [
                            {value: 335, name: 'أجهزة'},
                            {value: 200, name: 'كراسي'}
                        ]
                    }
                ]
            };

            // Apply options
            // ------------------------------

            topCategoryChart.setOption(topCategoryChartOptions);


            // Resize chart
            // ------------------------------

            $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".menu-toggle").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Resize chart
                        topCategoryChart.resize();
                    }, 200);
                }
            });


            /************************************
             *       Customer المنتجات في كل دولة Stats      *
             ************************************/
                // Initialize chart
                // ------------------------------
            var customerBrowerChart = ec.init(document.getElementById('timeline'));

            var idx = 1;

            // Chart Options
            // ------------------------------
            var customBrowerChartOptions = {

                // Add timeline
                timeline: {
                    x: 10,
                    x2: 10,
                    data: [
                        '2014-01-01', '2014-02-01', '2014-03-01', '2014-04-01', '2014-05-01',
                        { name:'2014-06-01', symbol: 'emptyStar2', symbolSize: 8 },
                        '2014-07-01', '2014-08-01', '2014-09-01', '2014-10-01', '2014-11-01',
                        { name:'2014-12-01', symbol: 'star2', symbolSize: 8 }
                    ],
                    label: {
                        formatter: function(s) {
                            return s.slice(0, 7);
                        },
                        textStyle: {
                            color: '#FFF'
                        },
                    },
                    checkpointStyle: {
                        color: '#6C5B7B',
                        borderColor: '#FFF',
                        label: {
                            // show: false,
                            textStyle: {
                                color: '#FFF'
                            }
                        }
                    },
                    controlStyle: {
                        normal: {
                            color: '#FFF'
                        },
                    },
                    lineStyle: {
                        color: '#FFF',
                        width: 1,
                        type: 'dashed'
                    },
                    autoPlay: true,
                    playInterval: 3000,
                },

                // Set options
                options: [
                    {

                        // Add title
                        title: {
                            text: 'المنتجات في كل الدول',
                            x: 'center',
                            textStyle: {
                                color: '#FFF'
                            },
                            subtextStyle: {
                                color: '#FFF'
                            }
                        },

                        // Add tooltip
                        tooltip: {
                            trigger: 'item',
                            formatter: "{a} <br/>{b}: {c} ({d}%)"
                        },

                        // Add legend
                        legend: {
                            x: 'left',
                            orient: 'vertical',
                            data: ['مصر','قطر','الكويت','سوريا','العراق'],
                            textStyle: {
                                color: '#FFF'
                            },
                        },

                        // Add custom colors
                        color: ['#FECEA8', '#FF847C', '#F8AC6F','#6C5B7B', '#99B898'],

                        // Display toolbox
                        toolbox: {
                            show: true,
                            orient: 'vertical',
                            feature: {
                                dataView: {
                                    show: true,
                                    readOnly: false,
                                    title: 'عرض التفاصيل',
                                    lang: ['View chart data', 'غلق', 'تحديث']
                                },
                                magicType: {
                                    show: true,
                                    title: {
                                        pie: 'تغير العرض',
                                        funnel: 'تغير العرض',
                                    },
                                    type: ['pie', 'funnel'],
                                    option: {
                                        funnel: {
                                            x: '25%',
                                            width: '50%',
                                            funnelAlign: 'left',
                                            max: 1700
                                        }
                                    }
                                },
                                restore: {
                                    show: true,
                                    title: 'استعادة'
                                },
                                saveAsImage: {
                                    show: true,
                                    title: 'حفظ كصورة',
                                    lang: ['Save']
                                }
                            },
                            color: "#FFF"
                        },

                        // Add series
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            center: ['50%', '50%'],
                            radius: '60%',
                            data: [
                                {value: idx * 128 + 80, name: 'مصر'},
                                {value: idx * 64 + 160, name: 'قطر'},
                                {value: idx * 32 + 320, name: 'الكويت'},
                                {value: idx * 16 + 640, name: 'سوريا'},
                                {value: idx++ * 8 + 1280, name: 'العراق'}
                            ],
                            itemStyle: {
                                normal: {
                                    label: {
                                        textStyle: {
                                            color: '#FFF'
                                        }
                                    },
                                    labelLine: {
                                        lineStyle: {
                                            color: '#FFF'
                                        }
                                    }
                                }
                            },
                        }]
                    },

                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:''},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    },
                    {
                        series: [{
                            name: 'المنتجات في كل دولة',
                            type: 'pie',
                            data: [
                                {value: idx * 128 + 80,  name:'مصر'},
                                {value: idx * 64  + 160,  name:'قطر'},
                                {value: idx * 32  + 320,  name:'الكويت'},
                                {value: idx * 16  + 640,  name:'سوريا'},
                                {value: idx++ * 8  + 1280, name:'العراق'}
                            ]
                        }]
                    }
                ]
            };

            // Apply options
            // ------------------------------

            customerBrowerChart.setOption(customBrowerChartOptions);


            // Resize chart
            // ------------------------------

            $(function () {

                // Resize chart on menu width change and window resize
                $(window).on('resize', resize);
                $(".menu-toggle").on('click', resize);

                // Resize function
                function resize() {
                    setTimeout(function() {

                        // Resize chart
                        customerBrowerChart.resize();
                    }, 200);
                }
            });
        }

    );

})(window, document, jQuery);