# Semantics

1. Purpose of Semantics
2. Block and Inline elements
3. Parts of a Web Page
4. Semantic tags
5. Generic tags
6. Document structure

## Purpose of Semantics

**Semantics**:

- Implicit meaning of a word
- Offering context to a subject
- Is needed by search engines, screen readers and other machines
- For example: correct use of `<h1>` to `<h6>`tag

## Block and Inline Elements

**Block** elements:

- Start a new part - or block - in the page
- For example: `<p>`, `<h1>`,...

**Inline** elements:

- Content continues on the same line
- For example: `<strong>`, `<em>`, `<a>`, `<img>`,...

## Parts of a Web Page

A lot of building blocks appear on many websites:

- header (with a call to action)
- navigation
- articles with multiple paragraphs
- footer with contact information and links to socials

Before HTML5: `<div>`-tag + class attributes to describe the role.

- Hard for search engines to read
- Hard for developers to read and maintain

```html
<body>
  <div class="page">
    <div class="header">
      <div class="nav"></div>
    </div>
    <div class="content">
      <div class="article"></div>
      <div class="article"></div>
    </div>
    <div class="footer"></div>
  </div>
</body>
```

HTML5: tags to describe each part

- More readable for search engines
- Easier to read and write for developers

```html
<body>
  <header>
    <nav></nav>
  </header>
  <main>
    <article></article>
    <article></article>
  </main>
  <footer></footer>
</body>
```

## Semantic tags

- Page consists of several parts or sections (!= `<section>` tag)
- Describe the content through semantic tags

### `<main>` tag

- Content is unique for the page
- There can only be one in a page

### `<header>` tag

- Group heading with other content (logo, subtitle, navigation,...)
- Only one heading tag (`<h...>`)

```html
<header>
  <h1>Title</h1>
  <!-- ... -->
</header>
```

### `<footer>` tag

- Mostly at the bottom of the page
- Used for copyright notice, contact info, social media links,...

### `<nav>` tag

- Indicates main navigation part of the website
- Not the hyperlinks
- Contains mostly a `<ul>` with `<li>` and `<a>` tags

```html
<nav>
  <ul>
    <li><a href="#">First</a></li>
    <li><a href="#">Second</a></li>
    <li><a href="#">Third</a></li>
  </ul>
</nav>
```

### `<article>` tag

- Content that "makes sense on its own"
- Occurs multiple times in a page
- For example: blog posts, articles on news sites
- Always contains a heading

```html
<article>
  <h2>Title of the article</h2>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</article>
<article>
  <h2>Title of the article</h2>
  <p>This is a paragraph.</p>
  <p>This is a paragraph.</p>
</article>
```

### `<section>` tag

Used in 2 ways, but always with a heading.

1. Indicates major parts of the site that cannot use another tag like `<header>`or `<nav>`.

```html
<section>
  <h2>Chaper 1</h2>
</section>
<section>
  <h2>Chaper 2</h2>
</section>
```

2. Indicate parts within an article

```html
<article>
  <h2>Chapter 1</h2>
  <p>This is a paragraph</p>
  <section>
    <h3>Subtitle 1</h3>
    <p>This is a paragraph.</p>
  </section>
  <section>
    <h3>Subtitle 2</h3>
    <p>This is a paragraph.</p>
  </section>
</article>
```

### `<aside>` tag

- Additional or related information about the parent
  - Can be used on an article
  - Can be used on the entire site
- Always contains a heading

### `<address>` tag

- Contact information for the website
- Only postal address if it is the address for the page

## Generic tags

- Tags without any semantic value
- Needed to group elements (mostly for positioning with CSS)
  - Block elements: `<div>`
  - Inline elements: `<span>`

## Document structure

- Use the correct heading tag (`<h1>` to `<h6>`)
- Rules:
  - only 1 `<h1>` tag
  - never skip a heading number
  - deeper level = higher heading number

```html
<h1>Title of the page</h1>
<main>
  <section>
    <h2>Title of this section</h2>
    <section>
      <h3>Title of this section</h3>
      <article>
        <h4>Title of this article</h4>
      </article>
      <article>
        <h4>Title of this other article</h4>
      </article>
    </section>
  </section>
</main>
```

### Meta tags

- Information about the page
- Always in the `<head>` tag

```html
<meta name="author" content="Rick Astley" />
<meta name="description" content="Rick is never gonna..." />
```

### Favicon

- Small icon in the browser tab
- Can be done with a single line of code

```html
<link rel="icon" href="favicon.ico" type="image/x-icon" />
```

## Final remark

Semantics is no hard science.

- Multiple solutions are possible
- Remain consistent in your choice
