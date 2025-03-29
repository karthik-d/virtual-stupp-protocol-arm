---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: "Virtual Stupp Protocol Arm"
permalink: /
---

<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="{{site.baseurl}}/assets/js/model.js"></script>
<script src="{{site.baseurl}}/assets/js/graphing.js"></script>

description text...

### Generate a virtual cohort

<section class="main-area" onload="clearResultBox();">
	<div class="form-container">
		<div class="form-text-above">
			<p class="description-text"><i>Please enter the following parameters: </i></p>
		</div>
		<form action="" class="form"> 
			<div class="form-unit">    
				<label for="kps90" class="form__label">No. of KPS >= 90</label>
				<input type="text" class="form__input" id="kps90" />
			</div>
			<div class="form-unit">    
				<label for="mgmt" class="form__label">No. of Methylated MGMT</label>
				<input type="text" class="form__input" id="mgmt" />
			</div>
			<div class="form-unit">    
				<label for="sex" class="form__label">No. of Male Participants</label>
				<input type="text" class="form__input" id="sex" />      
			</div>
			<div class="form-unit">    
				<label for="total" class="form__label">Total No. of Participants</label>
				<input type="text" class="form__input" id="total" />      
			</div>
			<div class="form-unit">    
				<button class="action-button form__submit" id="sub-button" onclick="readData(event);">Generate Virtual Arm</button>      
			</div>
		</form>
	</div>
	<div class="result-container">
		<div class="result-box">
			<div class="result__unit result__status">
				<span id="resultStatusTag"><b>Status: </b></span>
				<span id="resultStatus">Waiting for input</span>
			</div>
			<div class="result__unit" id="resultMosBox"><strong>
				<span>Median Overall Survival (mOS): </span>
				<span id="mosPrediction"></span>
			</strong></div>
			<div class="result__unit" id="resultCsvButton">
				<button class="result__download action-button" id="download">Download as CSV</button>  
			</div>
			<div class="result__unit result__plot" id="resultSurvivalPlot"></div> 
		</div>
	</div>
</section>


### Help us validate!

Submit summary statistics from your study through this online form to help us validate.

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Validation studies submitted

<section class="main-area">
<table>
<tr>
	<th>Date of Submission</th>
	<th>DOI</th>
	<th>Cohort Size</th>
	<th>mOS (months)</th>
</tr>
<tr>
	<td>March 29, 2025</td>
	<td>10.110.111</td>
	<td>100</td>
	<td>50.32</td>
</tr>
</table>
</section>

* * *

```
The final element.
```

<script>
	clearResultBox();
</script>
