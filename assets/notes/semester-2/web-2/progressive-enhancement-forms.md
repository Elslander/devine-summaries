Validate and CRUD using JavaScript

# Validation

| Client side                                         | Server side                                                                                      |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Fast:<br>- No server roundtrip<br>- No page refresh | Slower:<br>- Send data to the server<br>- Server checks the data<br>- Send back result or errors |
| Improve the experience.                             | Is essential:<br>- Only process / store data                                                     |
| Easy to bypass.                                     | A lot harder to circumvent.                                                                      |

What we want:

1. Validation while we fill out the form.
2. When leaving each field.
3. Error messages next to the invalid fields.
4. Full control over the contents and styling of the errors.

# HTML5 browser validation

- See #Web1, form chapter.
- Via **type attributes**: `<input type="email" ...>`, `<input type="number" ...>`, ...
- Via **validation-related attributes**: `required`, `min`, `max`, `step`, `maxlength`,...

- Is a standard functionality of modern browsers.
- Styling is different in each browser.

- Validates the field values but...
  - not while filling out,
  - not when leaving a field,
  - no control over the contents and styling of the errors.

# Use JavaScript to improve browser validation

## Step 0 - HTML5 constraints

- Not hard, something you're (hopefully) already doing:

```html
<!-- the attributes: required, maxlength, type, min, max, value,... -->
<label>
  <span>Name *</span>
  <input type="text" class="input name" required maxlength="50" />
  <span class="error"></span>
</label>

<label>
  <span>Name *</span>
  <input type="email" class="input name" required />
  <span class="error"></span>
</label>

<label>
  <span>Name *</span>
  <input type="number" class="input name" min="1" max="5" value="1" />
  <span class="error"></span>
</label>
```

## Step 1 - Disable default validation

- Set the `noValidate` form property to true.
  - Default error messages no longer displayed.
  - **BUT**: form is submitted with invalid data (will fix this later).

```javascript
const init = () => {
  const $form = document.querySelector("form");
  $form.noValidate = true;
};
```

## Step 2 - Check validity of an input

- Select all form elements.
- Listen for the `blur` event (when user exits a field) for each element.

```javascript
const inputs = document.querySelector(".input");
inputs.forEach(($input) => $input.addEventListener("blur", handleBlurInput));
```

- Use the built-in function `checkValidity()` on each element.
  - _true_: the field is valid
  - _false_: something is wrong with the field
- Test with different inputs.

```javascript
const handleBlurInput = (event) => {
  const $input = event.currentTarget;
  if ($input.checkValidity()) {
    console.log("valid");
  } else {
    console.log("not valid");
  }
};
```

## Step 3 - What causes the invalidity

- Check the `validityState`.
- Check for specific error.
- Show this error in the HTML element.

```javascript
const handleBlurInput = () => {
  const $input = event.currentTarget;

  const $error = $input.parentElement.querySelector(".error");

  console.log($input.validity);

  if ($input.validity.valueMissing) {
    $error.textContent = "The field is mandatory";
  }
  if ($input.validity.typeMismatch) {
    $error.textContent = "This input is of the wrong type";
  }
};
```

- Check all possible errors.
- Further checks for `typeMismatch`.

```javascript
if ($input.validity.valueMissing) {
  $error.textContent = "The field is mandatory";
}
if ($input.validity.typeMismatch) {
  $error.textContent = `We expect a valid ${showTypeMismatch(
    $input.getAttribute("type")
  )}`;
}
if ($input.validity.tooLong) {
  $error.textContent = `Please enter no more than ${$input.getAttribute(
    "maxLength"
  )} characters`;
}
if ($input.validity.tooShort) {
  $error.textContent = `Please enter at least ${$input.getAttribute(
    "minLength"
  )} characters`;
}
if ($input.validity.rangeUnderflow) {
  $error.textContent = `The value has to be at least ${$input.getAttribute(
    "min"
  )}`;
}
if ($input.validity.rangeOverflow) {
  $error.textContent = `The value has to be less than ${$input.getAttribute(
    "max"
  )}`;
}
```

```javascript
const showTypeMismatch = () => {
  switch (type) {
    case "email":
      return "e-mailadres";
    case "url":
      return "website url";
    case "tel":
      return "telephone number";
  }
};
```

## Step 4 - Listen for the correct events

- `blur`: field loses focus
  - Validate the field and show the error if applicable.
- `input`: field changes value
  - Clear the error when the value is valid.

```javascript
const inputs = document.querySelector(".input");
inputs.forEach(($input) => {
  $input.addEventListener("blur", handleBlurInput);
  $input.addEventListener("input", handleInputField);
});

const handleInputField = (event) => {
  const $input = event.currentTarget;
  const $error = $input.parentElement.querySelector(".error");

  if ($input.checkValidity()) {
    $error.textContent = "";
  }
};
```

## Step 5 - Do not submit a form with errors

- Check for errors on submit:
  - use the `checkValidity()` again
  - use `event.preventDefault()` to prevent submitting the form

```javascript
const handleSubmitForm = (event) => {
  const $form = event.currentTarget;
  if (!$form.checkValidity()) {
    event.preventDefault();
  }
};
```

## Step 6 - Display errors on submit

- We're already checking for errors in `handleBurInput`.
- Refactor, to use the function in other contexts -> `showValidationInfo()`.
- Iterate over all fields and call the funtion:

```javascript
event.preventDefault();

const inputs = document.querySelectorAll(".input");
inputs.forEach(($input) => showValidationInfo($input));
```

## Result

- You may use `validate.js` for all your client side validation needs.
- Requirements:
  - all form fields have the css class `input`
  - there is an element with the css class `error` which has the same parent as the input
  - you are using HTML5 validation attributes
- Possibilities:
  - changing the error message(s)
  - further checks if needed

# CRUD using JavaScript

## Posting forms using fetch

1. Get a reference to your `<form>` element:

```javascript
const $createTodoForm = document.querySelector("#createTodoForm");
```

2. Pass it to the `FormData` constructor:

```javascript
const formData = new FormData($createTodoForm);
```

3. Fetch using `POST`:

```javascript
const response = await fetch("index.php?page=api-create-todo", {
  method: "post",
  body: formData,
});
```

## Feedback while fetching

- Give people feedback something is happening.
- Define a _loading_ css modifier and toggle it using JavaScript.

```css
.form .loading-indicator {
  display: none;
}
.form.form--loading .loading-indicator {
  display: inline-block;
}
```

```javascript
$createTodoForm.classList.add("form--loading");

// here be dragons (idk this was in the slides, i think it just means that there is code in between that makes something happen)

$createTodoForm.classList.remove("form--loading");
```
