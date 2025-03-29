
function weibull(x, lambda, k) {
	// x: survival time; lambda: scale; k: shape.
	// use 	`multiplier` if you want frequency rather than probabililty.
	return (k / lambda) * Math.pow(x / lambda, k - 1) * Math.exp(-Math.pow(x / lambda, k));
}


function populateSurvivalPlot(lambda, k, n_samples)	{

	// Parameters for the Weibull distribution
	const xValues = [];
	const yValues = [];

	// Generate data points for the plot
	let x = -0.5;
	let freq = 0;
	do	{
		freq_prev = freq;
		x += 0.5;
		freq = weibull(x, lambda, k)*n_samples;
		xValues.push(x);
		yValues.push(freq);
	} while(!((freq_prev-freq)>0 && freq<1e-6));

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
		yaxis: { title: 'number of survivors' },
		autosize: true,
		paper_bgcolor: 'rgba(0, 0, 0, 0)',
		plot_bgcolor: 'rgba(0, 0, 0, 0.0)',
		margin: {
			l: 80, // Left margin
			r: 80, // Right margin
			t: 50, // Top margin
			b: 50  // Bottom margin
		  }
	};

	document.getElementById('resultSurvivalPlot').style.display = "block";
    Plotly.newPlot('resultSurvivalPlot', data, layout, {responsive: true});
}