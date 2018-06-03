

// To Pie Transfrom chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the to pie transform chart, passes in the data and draws it.
    var toPieTranform = c3.generate({
        bindto: "#to-pie",
        size: {height:400},
        color: {
            pattern: ['#673AB7', '#E91E63']
        },

        // Create the data table.
        data: {
            columns: [
                ['حكومية', 30],
                ['اهلية', 130]
            ]
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        toPieTranform.transform('pie');
    }, 1000);

    setTimeout(function () {
        toPieTranform.transform('line');
    }, 2000);

    setTimeout(function () {
        toPieTranform.transform('pie');
    }, 3000);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        toPieTranform.resize();
    });
});