
# Filter Ajax

![version](https://img.shields.io/github/manifest-json/v/Natjo/filterAjax)

Ajax form filter with more button.  





## Form filter
`data-items-per-page` - number of items to show  
`data-current-page` - initial page depending of the items in th DOM. 
*if data-items-per-page = 8 and 16 items are in DOM, set data-current-page="2"*
```html
	<form action="myAction" class="filterAjax-form" data-nonce="myNonce" novalidate="novalidate" 
	role="form" aria-label="Search filter" 
	data-current-page="1" data-items-per-page="4">
    <fieldset>
        <div class="field">
            <input type="radio" id="choice-0" name="cat[]" value="choice-0">
			<label for="choice-0">Choice 0</label>
        </div>

        <div class="field">
            <input type="radio" id="choice-1" name="cat[]" value="choice-1">
			<label for="choice-1">Choice 1</label>
        </div>
    </fieldset>

	<div class="action">
		<button type="reset">Reset filters</button>
		<button type="button" class="btn-filter">Filter</button>
	</div>
</form>
```
## Result
Liste where items will be append.  
Button `filterAjax-more` - add items until `max_page`
```html
<ul class="filterAjax-result">
	<li class="card">
		<a href="/">
			<div class="tag">tag</div>
			<h1>title</h1>
			<div class="desc">desc</div>
		</a>
	</li>
	<!-- <li>...</li> -->
</ul>
<button class="filterAjax-more">More result</button>
```
## Template
Template of items for ajax response.  
```html
<template id="tpl-card">
	<li class="card">
		<a href="${data.url}">
			<div class="tag">${data.tag}</div>
			<h1>${data.title}</h1>
			<div class="desc">${data.desc}</div>
		</a>
	</li>
</template>
```

## Javscript
```javascript
const myfilter = new FilterAjax({
    //namespace: 'filterAjax',
    onload(){
    }
});

// init filter with url get params on setting
// checkboxes and radio checked to true and myfilter.load();
```

## php
```php
add_action( 'wp_ajax_mmyAction', 'mmyAction_callback' );
add_action( 'wp_ajax_nopriv_mmyAction', 'mmyAction_callback' );

function myAction_callback()
{
    $response['status'] = 200;
	$response['page'] = 1;
	$response['max_page'] = 2;
	$response['msg'] = __('No result', 'lsd_lang');
	$response['msg'] = array(
		array(
			"tag" => "amet",
			"title" => "Lorem ipsum",
			"desc" => "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
			"url" => "/",
		)
	);

    wp_send_json($response);
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/LYRzwXB?editors=1011)


