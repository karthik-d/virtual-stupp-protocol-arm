---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: "Virtual Stupp Protocol Arm"
permalink: /
---

<script src="{{ base.url | prepend: site.url }}/assets/js/graphing.js"></script>

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](./another-page.html).

There should be whitespace between paragraphs.

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1 

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
	  		<button class="action-button form__submit" id="submit">Generate Virtual Arm</button>      
		</div>
    </form>
  </div>

  <div class="result-container">
  <div class="results-box">
  	<p class="result__status">Waiting for input</p>
	<script>getPlot();</script>
  	<button class="result__download action-button" id="download">Download as CSV</button>   
  </div>
  </div>
</section>


### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
