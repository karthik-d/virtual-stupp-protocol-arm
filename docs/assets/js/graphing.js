function getPlot()	{
	// Parameters for the Weibull distribution
	const lambda = 2; // Scale parameter
	const k = 1.5;    // Shape parameter
	const xValues = [];
	const yValues = [];

	// Generate data points for the plot
	for (let x = 0; x <= 10; x += 0.1) {
	xValues.push(x);
	yValues.push(weibull(x, lambda, k));
	}

	// Create the Plotly plot
	const data = [{
		x: xValues,
		y: yValues,
		type: 'scatter',
		mode: 'lines',
		name: `Weibull (λ=${lambda}, k=${k})`
	}];

	const layout = {
		title: 'Weibull Distribution',
		xaxis: { title: 'x' },
		yaxis: { title: 'Probability Density' }
	};

    return Plotly.newPlot('distributionPlot', data, layout);
}