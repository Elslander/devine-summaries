# Debugging
## Xdebug
- A PHP-extension to make debugging easier.
- A huge time saver.

- We've included it in our docker container!
- You do need to install a plugin. (PGP Debug - 13,2M downloads)

### Using it
Open the "Run" tab in the VSCode sidebar.

**Breakpoint** (red dot to the left of the line number):
A breakpoint is a stopping point in code, allowing the programmer to examine and manipulate variables or execute lines of code step-by-step.

**Debug actions**:
Once a debug session starts, the Debug toolbar will appear on the top of the editor.
# Superglobals
## Forms
What happens when we submit a form?
```html
<form method="get" action="index.php">
	<input type="text" name="name" placeholder="John Doe" />
	<button type="submit">Submit</button>
</form>
```
### Action
- Where to send the from-data when the form is submitted.
- *Relative URL*: current or different page on the same website.
- *Absolute URL*: external website.
### Method
**Get**:
- Appends form-data into the URL.
- Length is limited.
- Never use GET to send sensitive data! It will be visible in the URL!

**Post**:
- Appends form-data inside the body of the HTTP request.
- Data is not shown in the URL.
- No size limitation.
## Superglobals
- Associative arrays:
	- `$_GET`
	- `$_POST`

- Automatically created by PHP.
- Available in all scopes. (everywhere)
- `$_GET` and `$_POST` are both used when working with forms.
### The `$_GET`
- Loading a URL = GET request.
	- http://www.google.be/?q=devine
- You can pass in variables with the "querystring", separated by ampersands. *Querystring*: the part after the question mark. 
  It is grouped by *key=value&key=value*.
> get.php?name=devine&email=devine@howest.be

```php
$_GET['name']    $_GET['email']
```
# What happened
1. You submit a form
2. Server processes the requested PHP script
3. Server sends back the result of the PHP logic
4. Your browser renders the content
## The `empty()`
The `empty()` function is an inbuilt function in PHP that is used to check whether a variable is empty or not.
- "" (an empty string)
- 0 (0 as an integer)
- 0.0 (0 as a float)
- "0" (0 as a string)
- NULL
- FALSE
- array() (an empty array)
## The `isset()`
The `isset()` function is an inbuilt function in PHP that is used to determine if the variable is declared ad its value is not equal to NULL.

## Difference between `empty()` and `isset()`
The `isset()` function will generate a warning or notice when the variable does not exist.

The `empty()` function will not generate any warnings or notice when the variable does not exist.
## The `$_POST`
- Pass variables using a POST request.
- A bit more secure: not readable in the URL

**Example**:
```html
<form action="post.php" method="post">
	<input type="text" name="name" />
	<input type="email" name="email" />
	<input type="submit" name="send" />
</form>
```

```php
<?php
echo ("Hello" . $_POST['name']);
echo (" (" . $value . ")");
?>
```
# Form validation (server)
## Never trust user input
- *Querystrings* and *post requests* are potential security weaknesses: always validate these inputs.
- Validate for "emptyness" using `empty()`.

**Example**:
```php
<?php
if(empty($_POST['name'])) {
	echo ("Please fill in your name.<br />");
} else {
	echo ("Your name is " . $_POST['name'] . "<br />");
}
?>
```
# Tips & Tricks
## Ternary Operator
The ternary operator is a shorthand for the if...else statement.

Instead of writing:
```php
if(condition) {
	$result = value1;
} else {
	$result = value2;
}
```
You can write:
```php
$result = condition ? value1 : value2;
```
## The `var_dump` / `json_encode`
**`json_encode`**:
- Returns a string containing the JSON representation fo the supplied value.
- If the parameter is an array or object, it will be serialised recursively.

**`var_dump`**:
- This function displays structured information about one or more expression.
- Includes its type and value.
- If the parameter is an array or object, it will be serialised recursively.
## Include / require
- The `include` (or `require`) statement takes all text/code/markup that exists in the specified file.
- Copies it into the file that uses the include statement.
- Useful when you want to include the same PHP, HTML on multiple pages.
- The include and require statements are identical except upon failure:
	- *require* will produce a fatal error (E_COMPILE_ERROR) and stop the script;
	- *include* will only produce a warning (E_WARNING) and the script will continue.