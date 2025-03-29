function getPlot()	{
	const data = [{
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        type: 'histogram',
        marker: {
            color: 'skyblue'
        }
    }];

    const layout = {
        title: 'Histogram Example',
        xaxis: {
            title: 'Values'
        },
        yaxis: {
            title: 'Frequency'
        }
    };

    return Plotly.newPlot('distributionPlot', data, layout);
}