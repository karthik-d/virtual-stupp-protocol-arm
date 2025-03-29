function getPlot()	{
	var x = [];
	for (var i = 0; i < 500; i ++) {
		x[i] = Math.random();
	}

	var trace = {
		x: x,
		type: 'histogram',
	};
	var data = [trace];
	var layout = {
		title: 'Survival Weibull Distribution'
	};

    return Plotly.newPlot('distributionPlot', data, layout);
}