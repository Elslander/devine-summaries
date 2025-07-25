# Pseudo

1. Purpose of pseudo
2. Pseudo-classes
3. Pseudo-elements

## Purpose of pseudo

- In general: additional styling
- Pseudo-classes
  - style based on state
  - style based on position relative to other elements
- Pseudo-elements
  - style a part of an element

## Pseudo-classes

**The state of an element**:

- One colon
- Indicate the state of an element
  - Especially for hyperlinkgs and forms
  - Most common for hyperlinks (MDN):
    - `:link` -> default state
    - `:visited` -> user visited the link
    - `:hover` -> mouse moves over the link
    - `:active` -> user is clicking on the element
  - The order is important (LVHA)

**Selecting an element based on its position**:

- One colon
- Style elements based on their position relative to other elements
- Some examples:
  - `:first-child` -> first element in a series of siblings
  - `:last-child` -> last element in a series of siblings
  - `:nth-child()` -> elements are based on a formula

## Pseudo-elements

**Selecting part of an element**:

- Two colons
- Select specific part of an element
  - `::first-letter` -> first letter of a paragraph / text
  - `::first-line` -> first line of a paragraph / text

**Adding extra content**:

- Two colons
- Add extra content inside an element
  - `::before` -> add content as the first child element
  - `::after` -> add content as the last child element
- Insert symbols using their code

```html
<h2 class="title">
  <!-- ::before -->
  Content
  <!-- ::after -->
</h2>
```
