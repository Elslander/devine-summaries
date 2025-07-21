# Structure With HTML

1. Purpose of HTML
2. W3C
3. Tags and Attributes
4. Structure of a document
5. Well-formed and valid
6. Tags, tags, tags,...
7. Entities
8. Comments
9. Documentation

## Purpose of HTML

- Describe the structure of a page
- By using **tags** and **attributes**
- HTML file = tetfile that has `.html` as extension

## W3C

- World Wide Web Consortium
- Responsible for the HTML standard
- Current version is HTML5

## Tags and Attributes

### Tags

- Tells something about the content
- Between a `<` and `>``
- Closing with a `/`
  - Containertags `<open>...</close>`
  - Unary tags `<open />`

### Attributes

- Setting properties for a tag
- `name="value"`

### Doctype

- Always the first line in a HTML document
- Informs the browser about the HTML version that is used
- The HTML5 doctype: `<!DOCTYPE html>`

## Strcuture of a Document

- Doctype
- **html** tag: the root tag
- **head** tag: contains the metadata
- **body** tag: contains the visual content

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My first website</title>
  </head>
  <body>
    <!-- code -->
  </body>
</html>
```

> **Hint**
>
> - Press `!` followed by `TAB` in an empty HTML document
> - The basic structure magically appears
> - This is an emmet abbreviation

### Nesting tags

- A tag within a tag
- Always close the child tag before the parent tag
- Each tag has
  - Exactly 1 parent
  - 0, 1 or multiple child tags

```html
<p>
  This is a paragraph of text
  <span>with an additional tag</span>
</p>

<!-- This is not nesting correctly, but the browser tries to render it -->
<p>This is a paragraph of text <span>with an additional tag</p></span>
```

## Well-formed and Valid

### Well-formed

- Browsers do their best to render even the most shitty code
- Code that is well-formed and valid is:
  - more cross-browser
  - more performant

**5 simple rules**:

1. The document can have __only one `<html>`tag__
2. All tags are written in __lowercase__
3. All tags are __nested__ correctly
4. Special characters use __entities__
5. The values of attributes are placed between __double quotes__

### Valid

- Each tag has its own set of rules
  - For example: alt attribute is required for the `<img>` tag
- You learn the rules through the course
- Check validity:
  - in VS Code: W3C Web Validator
  - online: https://validator.w3.org/

## Tags, tags, tags,...

- A lot of tags available
- Each tag has its own purpose
- Documentation on MDN
- Good overview on web.dev

## Entities

- Insert special characters through code
- For example: < | > | ¥ | € | copyright symbol | ...
- Overview: https://dev.w3.org/html5/html-author/charref 

## Comments

- Know why using a certain tag
- Comment out for experiment
- Between `<!--` and `-->``

## Documentation

- This course uses mostly MDN and web.dev
- Other resources: Google, StackOverflow,...