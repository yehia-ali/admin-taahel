

// To Bar Transform Chart
// ------------------------------
$(window).on("load", function(){

    // Callback that creates and populates a data table, instantiates the to bar transform chart, passes in the data and draws it.
    var toBarTransform = c3.generate({
        bindto: '#to-bar',
        size: {height:400},
        color: {
            pattern: ['#673AB7', '#18e97b', '#e9cbb0', '#E91E63', '#1919e9', '#c8bce9', '#E91E63', '#d75ae9', '#E91', '#E92']
        },

        // Create the data table.
        data: {
            columns: [
                ['S1', 30, 200, 100, 400, 150, 250],
                ['S2', 130, 100, 140, 200, 150, 50],
                ['S3', 130, 100, 140, 200, 150, 200],
                ['S4', 130, 100, 140, 200, 150, 140],
                ['S5', 130, 100, 140, 200, 150, 50],
                ['S6', 130, 100, 200, 200, 150, 200],
                ['S7', 130, 100, 140, 200, 150, 50],
                ['S8', 130, 100, 140, 200, 150, 50],
                ['S9', 130, 100, 140, 200, 150, 130],
                ['S10', 130, 2, 140, 200, 150, 130],
            ],
            type: 'line'
        },
        grid: {
            y: {
                show: true
            }
        }
    });

    // Instantiate and draw our chart, passing in some options.
    setTimeout(function () {
        toBarTransform.transform('bar', 'S1');
    }, 1000);

    setTimeout(function () {
        toBarTransform.transform('bar', 'S2');
    }, 2000);
    setTimeout(function () {
        toBarTransform.transform('bar', 'S3');
    }, 1000);

    setTimeout(function () {
        toBarTransform.transform('bar', 'S4');
    }, 2000);
    setTimeout(function () {
        toBarTransform.transform('bar', 'S5');
    }, 1000);

    setTimeout(function () {
        toBarTransform.transform('bar', 'S6');
    }, 2000);
    setTimeout(function () {
        toBarTransform.transform('bar', 'S7');
    }, 1000);

    setTimeout(function () {
        toBarTransform.transform('bar', 'S8');
    }, 2000);
    setTimeout(function () {
        toBarTransform.transform('bar', 'S9');
    }, 1000);

    setTimeout(function () {
        toBarTransform.transform('bar', 'S10');
    }, 2000);

    setTimeout(function () {
        toBarTransform.transform('line');
    }, 3000);

    setTimeout(function () {
        toBarTransform.transform('bar');
    }, 4000);

    // Resize chart on sidebar width change
    $(".menu-toggle").on('click', function() {
        toBarTransform.resize();
    });
});