
function weibull(x, lambda, k) {
	// x: survival time; lambda: scale; k: shape.
	return (k / lambda) * Math.pow(x / lambda, k - 1) * Math.exp(-Math.pow(x / lambda, k));
}


function populateSurvivalPlot(lambda, k)	{

	// Parameters for the Weibull distribution
	const xValues = [];
	const yValues = [];

	// Generate data points for the plot
	let x = -0.5;
	let prob = 0;
	do	{
		prob_prev = prob;
		x += 0.5;
		prob = weibull(x, lambda, k);
		xValues.push(x);
		yValues.push(prob);
		console.log(prob_prev, prob, prob_prev-prob);
	} while(!((prob_prev-prob)>0 && prob<1e-6));

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