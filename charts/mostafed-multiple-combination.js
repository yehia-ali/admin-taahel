

// Multiple combination chart
// ------------------------------

$(window).on("load", function(){

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
            'echarts/chart/bar',
            'echarts/chart/pie'
        ],


        // Charts setup
        function (ec) {

            // Initialize chart
            // ------------------------------
            var pieChart = ec.init(document.getElementById('pie-chart'));
            var columnChart = ec.init(document.getElementById('column-chart'));

            // Pie Chart Options
            // ------------------------------
            pieChartOptions = {

                // Add title
                title: {
                    text: 'عدد المستفيدين',
                    subtext: 'عدد المستفيدين الذين',
                    x: 'center'
                },

                // Add tooltip
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },

                // Add legend
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data: ['طلبوا الطلبات','حذفوا الطلبات المؤكدة',' لم يكملوا الطلبات','أكملوا الطلبات']
                },

                // Add custom colors
                color: ['#00A5A8', '#823142', '#FF7D4D','#FF4558', '#28D094'],

                // Enable drag recalculate
                calculable: true,

                // Add series
                series: [{
                    name: 'مستفيد',
                    type: 'pie',
                    radius: '75%',
                    center: ['50%', '57.5%'],
                    data: [
                        {value: 335, name: 'طلبوا الطلبات'},
                        {value: 310, name: 'حذفوا الطلبات المؤكدة'},
                        {value: 234, name: ' لم يكملوا الطلبات'},
                        {value: 500, name: 'أكملوا الطلبات'}
                    ]
                }]
            };

            // Column Chart Options
            // ------------------------------
            columnChartOptions = {

                // Setup grid
                grid: {
                    x: 40,
                    x2: 47,
                    y: 35,
                    y2: 25
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },

                // Add legend
                legend: {
                    data: ['مصر','قطر','المملكة العربية السعودية','الكويت']
                },

                // Add custom colors
                color: ['#99B898', '#FECEA8', '#FF847C', '#E84A5F' ],

                // Add toolbox
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    x: 'right',
                    y: 35,
                    feature: {
                        mark: {
                            show: true,
                            title: {
                                mark: 'Markline switch',
                                markUndo: 'Undo markline',
                                markClear: 'Clear markline'
                            }
                        },
                        magicType: {
                            show: true,
                            title: {
                                line: 'Switch to line chart',
                                bar: 'Switch to bar chart',
                                stack: 'Switch to stack',
                                tiled: 'Switch to tiled'
                            },
                            type: ['line', 'bar', 'stack', 'tiled']
                        },
                        restore: {
                            show: true,
                            title: 'Restore'
                        },
                        saveAsImage: {
                            show: true,
                            title: 'Same as image',
                            lang: ['Save']
                        }
                    }
                },

                // Enable drag recalculate
                calculable: true,

                // Horizontal axis
                xAxis: [{
                    type: 'category',
                    data: ['يناير','فبراير','مارس','ابريل','مايو','يونيو','يوليو']
                }],

                // Vertical axis
                yAxis: [{
                    type: 'value',
                    splitArea: {show: true}
                }],

                // Add series
                series: [
                    {
                        name: 'مصر',
                        type: 'bar',
                        stack: 'Total',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: 'قطر',
                        type: 'bar',
                        stack: 'Total',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: 'المملكة العربية السعودية',
                        type: 'bar',
                        stack: 'Total',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: 'الكويت',
                        type: 'bar',
                        stack: 'Total',
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };

            // Connect charts
            pieChart.connect(columnChart);
            columnChart.connect(pieChart);

            // Apply options
            // ------------------------------
            pieChart.setOption(pieChartOptions);
            columnChart.setOption(columnChartOptions);


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
                        pieChart.resize();
                        columnChart.resize();
                    }, 200);
                }
            });
        }
    );
});