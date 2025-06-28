# Introduction
Web Development consists of client-side and server-side development.
## Building Blocks
- **HTML** = Structure
- **CSS** = Styling
- **JavaScript** = Interactivity / Client-side functionality

- **PHP** = Server-side functionality
- **SQL** = Database management
## Client-side
- Our code runs in the browser on a device.
- Technologies: **HTML, CSS, JavaScript**
## Server-side
- Our code runs on a server somewhere...
  - A physical machine in our company or at home.
  - In the 'Cloud'.
- Technologies: **PHP, SQL**
# PHP
- **Hypertext Preprocessor**
- Server-side scripting language
- Current version: **8+**
- Introduced in **1995** by **Rasmus Lerdorf**
- Large community support
# Server
- A computer, usually *not the same* as the client/browser machine.
- Accessible via a network. In the case of a web server, it is accessible through the internet.
- Runs specific server software:
  - **Operating System** (Windows, Linux, macOS)
  - **Web Server** (Apache, IIS, etc.)
  - **Database Server** (MySQL, SQL Server, etc.)
  - **Programming Language** (PHP, ASP, JSP, etc.)
# Docker
- Software used to simulate a server on your machine.
- Easy to set up and use.
- Good for mimicking specific "stacks":
  - Server OS
  - Database version
  - Programming language version
  - ...
# Setup
...
# Explanation
1. You navigate to `http://localhost`.
2. The server processes the requested PHP script.
3. The server sends back the result of the PHP logic.
4. Your browser renders the content:
   - Content is text.
   - Content (text) can contain HTML tags.
# Theory
## Echo HTML
We use `echo` in PHP to generate HTML tags.
```php
<?php
echo("<h1>Hello Devine!</h1>");
?>
```
## Mixing HTML & PHP
We can mix HTML tags with PHP code.
```html
<html>
<head>
    <meta charset="utf-8">
    <title>Hello World</title>
</head>
<body>
    <?php
    echo("<h1>Hello Devine!</h1>");
    ?>
</body>
</html>
```
## Variables
Variable names start with a dollar sign (`$`).
```php
<?php
$name = "Devine";
?>
```
## String Concatenation
Use a dot (`.`) to combine text and variables.
```php
<?php
$first = "Devine";
$last = "Howest";

echo($first . $last); // Output: DevineHowest
?>
```

You can mix variables with text:
```php
// Example 1
<?php
$first = "Devine";
$last = "Howest";

echo($first . " - " . $last); // Output: Devine - Howest
?>

// Example 2
<?php
$first = "Devine";
$last = "Howest";
$full = $first . " - " . $last;

echo($full); // Output: Devine - Howest
?>
```
## Arrays
Use the `array()` function or `[]` shorthand. Arrays start counting at **0**.
```php
<?php
$cats = array();
?>

<?php
$cats = [];
?>

<?php
// Different ways to add elements to an array
$cats = ["cat1", "cat2"];
$cats[] = "cat3";
$cats[] = "cat4";
?>
```
## Associative Arrays
Associative arrays allow you to give elements specific keys.
```php
<?php
// Different ways to add elements to an associative array
$associations = ["devine" => "best degree"];
$associations["devine"] = "best degree";
?>
```
## Looping Through Arrays
### Regular foreach loop:
```php
<?php
$cats = ["cat1", "cat2"];

foreach ($cats as $cat) {
    echo($cat . "<br />");
}
?>
```
### foreach loop with keys:
```php
<?php
$associations = [];
$associations["devine"] = "best degree";
$associations["integration"] = "hard work";

foreach ($associations as $key => $value) {
    echo($key . " : " . $value . "<br />");
}
?>
```

