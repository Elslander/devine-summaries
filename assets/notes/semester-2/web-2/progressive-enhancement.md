# Goals

- Improving the user experience
- Making sure the basic functionalities always work:
  - readable content
  - navigation
  - minimum viable product (mpv)

> **Progressive Enhancement**<br />
> Progressive enhancement is a strategy for web design that emphasises core webpage content first. This strategy then progressively adds more nuanced and technically rigorous layers of presentation and features on top of the content as the end-user's browser/internet connection allow. The proposed benefits of this strategy are that it allows everyone to access the basic content and functionality of a web page, using any browser or internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth.

# An MnM

## The Peanut

- HTML
- The content
- The most important
- Works everywhere

## The Chocolate

- CSS
- The layout
- "Improves" the way your HTML looks

## Candy

- JavaScript
- The interactivity
- "Improves" the way your HTML feels

# No JavaScript

> _**Jake Archibals**_
> All your users are non-JS while downloading your JS.

"Progressive enhancement doesn't mean you can't use Javascript, but you do need to define what your baseline of support is for your website or application, and from there, build enhancement and features."

- Your website's content should be available without JavaScript.
- JavaScript may add extra (non-essential) functionalities ti improve the experience.

# Example

## PHP only

- This is what we already know.
- Filter when clicking on the submit button.

**Result**:

- Always works?
- UX could be improved: visitor has to aim for the filter button and tap it.

## JavaScript only

- Add a new route.
- JS: Use fetch to load a php page.
- Controller: Send back a JSON from PHP.

No more submit button needed, fetch on input.

```javascript
const submitWithJS = () => {
	const $form = document.querySelector('.filter-form');
	const data = new FormData($form);
	const entries = [...data.entries()];
	console.log('entries', entries);
	const qs = new URLSearchParams(entries).toString();
	console.log('querystring', qs);
	const url = `index.php?page=api-search&${qs}`;
	console.log('url', url);

	const response = await fetch(url);
	const shows = await response.json();
	updateList(shows);
}
```

- Only works when JavaScript is available.
- No JavaScript = No Content.

## PHP and JavaScript

When JavaScript becomes available:

- No need for a submit button -> we'll filter on input change.
- **Pro tip**: add a css class to your html tag, and make visual changes using css definitions.
- Execute a fetch call to the PHP page and update the DOM using JavaScript.

```javascript
const init = () => {
  document.documentElement.classList.add("has-js");
  // ...
};
```

```css
.has-hs .form-submit {
  display: none;
}
```

Update the URL, so it reflects the current page state.

```javascript
window.history.pushState {
	{},
	'',
	`index.php@page=home&${qs}`
};

```

When JavaScript is not available:

- The filter will still be visible...
- ... and the PHP implementation works.
