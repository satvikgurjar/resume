anychart.onDocumentReady(function() {
    // Create the chart
    var chart = anychart.stock();
    
    // Create the dataset
    var dataset = anychart.data.table();
    
    // Generate initial data
    var initialData = generateData(10);
    dataset.addData(initialData);

    // Map the data
    var mapping = dataset.mapAs({
        open: 1,
        high: 2,
        low: 3,
        close: 4
    });

    // Set the series
    var series = chart.plot(0).candlestick(mapping);
    series.name("Stock Prices");

    // Customize appearance
    series.fallingFill("#FF0D0D");
    series.fallingStroke("#FF0D0D");
    series.risingFill("#43FF43");
    series.risingStroke("#43FF43");

    // Set the chart title
    chart.title("Animated Candlestick Chart");

    // Set the container id
    chart.container("container");

    // Draw the chart
    chart.draw();

    // Function to generate random data
    function generateData(numPoints) {
        var data = [];
        var date = new Date();
        var open = 100;
        var close = 100;

        for (var i = 0; i < numPoints; i++) {
            var high = Math.max(open, close) + Math.random() * 5;
            var low = Math.min(open, close) - Math.random() * 5;
            
            data.push([
                date.getTime(),
                open,
                high,
                low,
                close
            ]);

            date.setDate(date.getDate() + 1);
            open = close;
            close = open + Math.random() * 10 - 5;
        }

        return data;
    }

    // Animation function
    function addNewCandle() {
        var newData = generateData(1);
        dataset.addData(newData);
        
        // Remove oldest data point if more than 30 points
        if (dataset.getRowsCount() > 30) {
            dataset.remove(dataset.getRowsCount() - 31);
        }

        setTimeout(addNewCandle, 1000); // Add a new candle every second
    }

    // Start the animation
    setTimeout(addNewCandle, 1000);
});
