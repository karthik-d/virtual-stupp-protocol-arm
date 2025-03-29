function populateSurvivalPlot(lambda, k, time_start, time_end)	{

	// Parameters for the Weibull distribution
	const xValues = [];
	const yValues = [];

	// Generate data points for the plot
	for (let x = time_start; x <= time_end; x += 0.1) {
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
		title: 'Survival Distribution',
		xaxis: { title: 'months' },
		yaxis: { title: 'number of survivors' }
	};

    return Plotly.newPlot('survivalPlot', data, layout);
}