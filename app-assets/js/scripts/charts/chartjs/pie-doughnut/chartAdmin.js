
$(window).on("load", function(){

    //Get the context of the Chart canvas element we want to select
    var ctx = $("#simple-doughnut-chart");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration:500,
    };

    // Chart Data
    var chartData = {
        labels: ["مجموع المشرفين"],
        datasets: [{
            label: "My First ",
            data: [65],
            backgroundColor: ['#00A5A8'],
        }]
    };

    var config = {
        type: 'doughnut',

        // Chart Options
        options : chartOptions,

        data : chartData
    };

    // Create the chart
    var doughnutSimpleChart = new Chart(ctx, config);

});