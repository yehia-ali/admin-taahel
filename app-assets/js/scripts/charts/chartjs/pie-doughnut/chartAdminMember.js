
// Pie chart
// ------------------------------
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-pie-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };

    // Chart Data
    var chartData = {
        labels: ["لوحة التحكم", "إحصائيات المعالجين", "إحصائيات المستفيدين", "إحصائيات الطلبات", "إحصائيات المتجر", "إحصائيات مراكز العلاج", "إحصائيات مراكز التعليم", "إحصائيات الأنشطة", "إحصائيات توصل معنا", "إحصائيات الأسئلة الشائعة", " إحصائيات الشروط والأحكام", "إحصائيات الإعدادات العامة"],
        datasets: [{
            label: "My First dataset",
            data: [85, 65, 34, 45, 35, 65, 34, 45, 35, 65, 34, 45],
            backgroundColor: ['#00A5A8', '#626E82', '#FF7D4D','#FF4558', '#28D094', '#03A9F4', '#6A1B9A', '#757575', '#ff1744', '#FF3D00', '#B2EBF2', '#009688'],
        }]
    };

    var config = {
        type: 'pie',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var pieSimpleChart = new Chart(ctx, config);
});