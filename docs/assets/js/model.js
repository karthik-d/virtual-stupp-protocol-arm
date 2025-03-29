
function predictMOS(scale, shape)	{
	// predict the median survival using scale and shape parameter of the Weibull.
	// location is assumed to be zero.
	// accelerated failure time (AFT) model.
	mOS = scale * Math.pow(Math.log(2), (1/shape));
	return mOS
}


function predictLogScale(kps90, mgmt, sex)	{
	// `scale` is `lambda`.
	log_scale = (0.004*kps90) + (0.007*mgmt) + (-0.02*sex) + 3.695
	return log_scale
}


function populateMedianOS(mOS)	{
	document.getElementById('mosPrediction').innerHTML = mOS.toFixed(2);
}


function readData(event)	{

	// don't submit the form!
	event.preventDefault();

	// add validation.

	// read from the form.
	total_count = 287
	kps90 = 39.4
	mgmt = 43.4
	sex = 64.5
	
	// preset params.
	const param_shape = 1.47

	// compute scale.
	log_scale = predictLogScale(kps90, mgmt, sex);
	const param_scale = Math.exp(log_scale)

	// compute mOS.
	const mOS = predictMOS(param_scale, param_shape)

	// make the plot; fill in data.
	populateSurvivalPlot(lambda=param_scale, k=param_shape);
	populateMedianOS(mOS);
}