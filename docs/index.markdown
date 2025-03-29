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

<section class="main-area">
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
			<div class="result__status">
				<span>Status: </span>
				<span id="resultStatus">Waiting for input</span>
			</div>
			<div class="result__mos"><strong>
				<span>Median Overall Survival (mOS): </span>
				<span id="mosPrediction"></span>
			</strong></div>
			<button class="result__download action-button" id="download">Download as CSV</button>  
			<div class="result__plot" id="survivalPlot"></div> 
		</div>
	</div>
</section>

* * *

### Help us validate!

Submit summary statistics from your study to help us validate using this google form.

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

* * *

###### Validation studies

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

* * *

```
The final element.
```
