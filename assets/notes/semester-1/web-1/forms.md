# Forms - gethering user input

1. Purpose of forms
2. Building forms with tags
3. More attributes
4. Styling form with CSS

## Purpose of forms

- Sending data to the server
  - Store or retrieve data from a data source

Within this course

- Structure forms with HTML
- Style forms with CSS
- Sending to the server is NOT part of this course (it is in the next semester)

## Building forms with tags

### Tags: `<form>`

- `<form>` tag to indicate start and end of the form
- 2 attributes
  - method: how to send
  - action: where to send, (cannot be empty -> page would not be valid)

### Tags: `<fieldset>`

- Divide form into multiple parts
- Mostly used for larger forms
- Set a title for each part using `<legend>`

### Tags: `<input>`

- New input field
- Inline and unary tag
- 'tag' attribute = purpose of the field

### Attributes: name and value

- Required by the server to process the form
  - set them already as a good practice
- Also required for checkboxes / radiobuttons to determine the group

### Tags: `<label>`

- Adding explanatory text to an element
- Element is selected after clicking its label (a11y)
- Is a container tag and inline tag
  - **container**: wrap the field with the `<label>` tag
  - **inline**: link with **for** and **id** attributes

### Tags: `<textarea>`

- Large text over multiple lines
- Is a container tag and inline tag
- Set width and height through cols and rows attribute

### Tags: `<select>`

- Create a dropdownlist
- Is a container tag
- Use `<option>` tag to create elements for the list
- Use `<optgroup>` to group the options

### Tags: `<datalist>`

- Autocomplete functionality for an input field
- Link through the attributes **id** and **list**

## More attributes

Attributes so far:

- id -> link with a label / datalist
- name and value -> required by the server
- min, max, step -> refine numeric fields

**Extra** attributes:

- placeholder
- required
- autofocus
- size
- readonly
- disabled
- maxlength
- autocomplete

## Styling forms with CSS

- Browser uses its own default styling
- Be carefull changing this styling
  - Not easy
  - Not desirable in terms of
    - UX
    - Accessibility

### Pseudo-classes

- `:checked`
- `:valid`
- `:invalid`
- `:required`
- `:focus`

### Accessibility concerns

- Never just remove the focus outline
- MAke sure your form is completely accessible using the keyboard
