
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
        labels: ["الجزائر", "البحرين", "مصر", "العراق", "الأردن", "الكويت", "الإمارات العربية المتحدة"],
        datasets: [{
            label: "My First dataset",
            data: [85, 65, 34, 45, 35, 65, 34],
            backgroundColor: ['#00A5A8', '#0e820e', '#FF7D4D','#FF4558', '#28D094', '#03A9F4', '#6A1B9A'],
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