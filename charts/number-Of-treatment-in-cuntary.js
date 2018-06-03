
// To Line Trasnform Chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the to line trasnform chart, passes in the data and draws it.
    var toLineTransform = c3.generate({
        bindto: '#to-line',
        size: {height:400},
        color: {
            pattern: ['#673AB7', '#53c2e9', '#3ca2e9', '#e97b23']
        },

        // Create the data table.
        data: {
            columns: [
                ['TR', 30, 200, 100, 400, 150, 250],
                ['AM', 30, 200, 50, 400, 150, 5],
                ['KSA', 30, 200, 10, 400, 150, 50],
                ['QA', 30, 8, 100, 400, 150, 250]
            ],
            type: 'bar'
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        toLineTransform.transform('line', 'TR');
    }, 1000);

    setTimeout(function () {
        toLineTransform.transform('line', 'AM');
    }, 2000);
    setTimeout(function () {
        toLineTransform.transform('line', 'KSA');
    }, 2000);
    setTimeout(function () {
        toLineTransform.transform('line', 'QA');
    }, 2000);


    setTimeout(function () {
        toLineTransform.transform('bar');
    }, 3000);

    setTimeout(function () {
        toLineTransform.transform('line');
    }, 4000);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        toLineTransform.resize();
    });
});