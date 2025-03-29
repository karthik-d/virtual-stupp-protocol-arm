
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


function populateSampledCsv()	{
	document.getElementById('resultCsvButton').style.display = "block";
}


function populateMedianOS(mOS)	{
	document.getElementById('resultMosBox').style.display = "block";
	document.getElementById('mosPrediction').innerHTML = mOS.toFixed(2);
}


function setStatusMessage(msg)	{
	document.getElementById('resultStatus').innerHTML = msg;
}


function clearResultBox()	{
	document.getElementById('resultMosBox').style.display = "none";
	document.getElementById('resultCsvButton').style.display = "none";
	document.getElementById('resultSurvivalPlot').style.display = "none";
	setStatusMessage("Waiting for input")
	console.log("results cleared")
}


function readData(event)	{

	// don't submit the form!
	event.preventDefault();
	setStatusMessage("Approximating Weibull distribution...");

	// add validation.

	console.log("reading data")
	// read from the form.
	try{
		n_samples = parseInt(document.getElementById('total').value);
		kps90 = parseFloat(document.getElementById('kps90').value) / n_samples * 100;
		mgmt = parseFloat(document.getElementById('mgmt').value) / n_samples * 100;
		sex = parseFloat(document.getElementById('sex').value) / n_samples * 100;
	}
	catch (error){
		n_samples = 287
		kps90 = 39.4
		mgmt = 43.4
		sex = 64.5
	}

	if (isNaN(n_samples) || isNaN(kps90) || isNaN(mgmt) || isNaN(sex)){
		n_samples = 287
		kps90 = 39.4
		mgmt = 43.4
		sex = 64.5
	}
	console.log("data noted", n_samples, kps90, mgmt, sex);
	
	// preset params.
	const param_shape = 1.47

	// compute scale.
	log_scale = predictLogScale(kps90, mgmt, sex);
	const param_scale = Math.exp(log_scale);

	// compute mOS.
	const mOS = predictMOS(param_scale, param_shape);

	// make the plot; fill in data; show relevant boxes..
	populateMedianOS(mOS);
	populateSurvivalPlot(lambda=param_scale, k=param_shape, n_samples=n_samples);

	// generate samples.
	setStatusMessage("Sampling the distribution and generating CSV...");


	// ...


	setStatusMessage("CSV ready to download!");
}