# Styling with CSS

1. Purpose of CSS
2. Main principle
3. Inline, internal and external
4. Selectors
5. CSS properties
6. Cascading
7. Specificity
8. Inheritance
9. Box model
10. CSS units
11. BEM
12. Custom properties
13. CSS reset
14. Debugging

## Purpose of CSS

**Cascading Style Sheets**:

- The styling of a page
- Colours, fonts, positioning,...
- Using style rules

## Main principle

Using style rules:

- Selector: chich elements to select?
- Declaration:
  - Which property? (name)
  - Which value?

```css
strong {
  color: red;
}

selector {
  property: value;
}
```

## Inline, internal and external

3 possible locations to write CSS

- Inline: as an HTML attribute
- Internal: in the `<head>` of the HTML document
- External: in a separate file linked to the HTML

**We always use an external file to reuse CSS as much as possible (\*).**

(\*) Expect for the width and height of images.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width-device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie-edge" />
  <title>CSS demo</title>
  <link rel="stylesheet" href="css/style.css" />
</head>
```

## Selectors

You can select elements using one of the following selectors:

- **Universal** selector
- **Type** selector
- **ID** selector
- **Class** selector
- **Child** selector
- **Descendant** selector
- **Adjecent sibling** selector
- **General sibling** selectors

### Univeral selector

- Select all the elements
- big impact = use with case

```css
* {
  text-transform: uppercase;
}
```

### Type selector

- Select all elements with a certain tag
- For example: all `<h1>` tags

```css
h1 {
  font-size: 16px;
}
```

### ID selector

- Select the element with a certain value in the id attribute
- Pay attention: **must be unique**
- For example: all elements with `id="header"`
- Don't use this unless there is non other way

```css
#header {
  background-color: red;
}
```

### Class selector

- Select all elements with a certain value in the class attribute
- Pay attention: **case-sensitive**
- For example: all elements with `class="menu"`

```css
.menu {
  background-color: red;
}
```

### Child selector

- Selects **direct child** elements of an element
- For example: all elementd with `class="menu-item"` within an element with `class="menu"`

```html
<ul class="menu">
  <li class="menu-item">...</li>
  <li class="menu-item">...</li>
</ul>
```

```css
.menu > .menu__item {
  color: white;
}
```

### Descendant selector

- Select **all child** elements for an element (no need to be a direct child)
- For example: all links (`<a>`) within a `<ul>` tag.
  These links can (must) be withing `<li>` elements.

```html
<ul>
  <li>
    <a href="/">...</a>
  </li>
</ul>
```

```css
ul > a {
  text-decoration: none;
}
```

### Adjacent sibling selector

- Selects **only the first** element at the same level
- For example: one `<p>` tag directly after the `<h1>`tag

```html
<h1>...</h1>
<p>...</p>
<p>...</p>
```

```css
h1 + p {
  color: blue;
}
```

### General sibling selector

- Selects **all** elements at the same level
- For example: all `<p>` tags directly after the `<h1>` tag

```html
<h1>...</h1>
<p>...</p>
<p>...</p>
```

```css
h1 ~ p {
  color: blue;
}
```

### Selector list

You can group multiple selectors with the same declarations by separating them with a comma.

```css
.menu,
.intro,
.contact {
  font-size: 12px;
}
```

### Compound selectors

- Sequence of selectors that are **not separated by a space**
- A set of simultaneous conditions on a single element

```html
<article class="featured">
  <!-- code here -->
</article>
```

```css
article.featured {
  font-size: 12px;
}
```

## CSS properties

There are a lot of properties

Not about using `font-family`:

- sets the font
- font must be installed on the machine of the client
- only use web-safe fonts or web fonts

## Cascading

- Cascade = waterfall flowing from top to bottom
- Selecting the same element on multiple locations?
  - **Order**: last declaration will take precedence
  - **Specifcity**: e.g. class selector > tag selector
  - **Origin**: browser < local user styles < your own CSS
  - **Importance**: e.g. animation > `background-color`
- Check this in the inspector

## Specificity

- Which rule applies when multiple rules have different selectors but selecting the same element?
- Precedence for a more specific selector
  - For example: class takes precedence on type because of the higher specificity
  - Check this in the inspector

1. id selector (most specific)
2. class selector (second specific)
3. type selector (least specific)

## Inheritance

- Some properties are automatically inherited by child elements
- No need to set all properties over and over again
  - check this in the inspector

## Box model

- All elements have an invisible box
- Check with the inspector

### Width and height

- Only block elements are infected
- Default:
  - **width**: complete width of the parent element (or browser if parent is `<body>`)
  - **height**: required height to show the content
- Adjust with the properties width and height

### MArgin, border, padding

- **Margin**: distance to other elements (outside)
- **Border**: border of the element
- **Padding**: distance between content and border (inside)
- Adjust with properties, margin, border and padding (shorthand properties)
- Beware of inline elements

### `Box-sizing`

- Property `box-sizing` determines what is in the box
  - default: `content-box` = only the content
  - we choose **`border-box`** = content + padding + border
- Advantage:
  - properties width and height contain padding and border
  - easier to design with

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

### Display property

- Convert block elements into inline elements and vice versa
- **Display**: block, inline, or inline-block
  - **block**: width, height, margin, padding and border have the same effect as block elements
  - **inline-block**: margin, padding and border have the same effect as block elements
  - **inline**: width, height, margin, padding and border have the same effect as inline elements

### Overflow

- Occurs if content is bigger than the box
- 3 possiblities
  - visible
  - hidden
  - scroll

### Document flow

- Don't set explicit widths and heights (except sometimes for layouts)
  - let the content dictate the width or height of the elements
  - let the browser do the work
  - height of an element = content (`font-size` + `line-height`) + padding + border
  - width of an element
    - inline & inline-block elements: content + padding + border
    - block: maximum width of the parent
- Use the document flow of the content: from top to bottom, left to right

## CSS units

Multiple possibilities

- px is an **absolute** unit
- % is **relative to the parent**
- vw is relative to the viewport
- em is the width of the letter M -> also **relative to the parent**
- rem is the width of the letter M -> **relative to the root element**
- unitless is the line-height

### px

- Absolute unit
- Not flexible, always the same size
- **Do not use for font-size, this is not accessible**
- Use for properties that can remain fixed. E.g. border, border-radius, box-shadow, outline,...

### rem

- Relative unit
- Relative to the root element (HTML)
- Flexible, can change in size:
  - With CSS on the HTML tag
  - Browser user setting
- 1rem = default HTML font-size = 16px
  - 1.5rem = 16 x 1.5 = 24px
  - 2rem = 16 x 1.5 = 24px
  - 18px = 18 / 16 = 1.125rem
  - 25px = 25 / 16 = 1.5625rem

### %

- Relatieve unit
- Relative to the parent
- Flexible, can change in size
  - **always** relative to the width of its parent

### vw & vh

- Viewport width & viewport height
- Relative units
- Relative to the viewport
- Flexible, van change in size
  - **always** relative to the viewport width or height

## BEM

- Stands for Block Element Modifier
- Naming convention
  - Code is more readable
  - Code is easier to maintain

### Definitions

- Block: block of HTML that stands on its own
- Element: part of a block that is semantically linked to the block
- Modifier: "flag" for certain behaviour

```html
<ul class="menu">
  <li class="menu__item">First</li>
  <li class="menu__item">Second</li>
  <li class="menu__item menu__item--active">Third</li>
</ul>
```

### Naming convention

- Block: short concise name
- Element: block\_\_element
- Modifier: block\_\_element--modifier OR block--modifier

```html
<header class="header">
  <h1 class="header__title">Title</h1>
  <p class="header__subtitle">
    <span class="subtitle__word">Sub</span>
    <span class="subtitle__word subtitle__word--size-big">Title</span>
  </p>
  <img class="header__logo" src="assets/img/logo.jpg" alt="logo" />
</header>
```

### Multiple classes

- Prevent repetition
- menu\_\_item: styling all the items
- menu\_\_item--active: additional style for the active item

```html
<li class="menu__item menu__item--active">Third</li>
```

## Custom Properties

- Also known as CSS variables
- Name must start with a double hyphen (--)
- Use `:root` to make them accessible in the entire document
- Makes it easy to reuse colors, fonts, margins,...

```css
:root {
  --primary-color: red;
}

.content {
  color: var(--primary-color);
}
```

## CSS reset

- Browsers have their own default values for margin, padding, border,...
- Site must look similar
- Solution: reset the defaults
- **Warning**: reset first, style later

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width-device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie-edge" />
  <link rel="stylesheet" href="css/reset.css" />
  <link rel="stylesheet" href="css/style.css" />
  <title>Reset demo</title>
</head>
```

## Debugging

Use the inspector

- Check the values of properties
- Check which values are overwritten
- You can adjust values in the inspector

Leave the inspector open during development
