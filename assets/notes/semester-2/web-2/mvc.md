**Purpose**:
Achieving Separation of Concerns, holy grail in development.

- Keeping things separate.
- A change in one component has a little impact as possible on other components.
- _Result_:
  - code is easier to extend;
  - code is easier to debug.

# 3 layers

Every application is built in 3 layers:

1. **Model** layer: selecting and manipulating data.
2. **View** layer: rendering output (HTML).
3. **Controller** layer: implementing logic.

Each layer has its own responsibilities.0

## Model layer

Responsable for:

- retrieving data and returning it;
- validating data;
- writing data to the database.

## Controller layer

Responsable for:

- handling `$_GET` and `$_POST` requests;
- addressing the data layer;
- handling any logic (if statements, calculations,...);
- passing variables to the view layer;
- redirecting to the correct url.

## View layer

There is a view for every page of the website.

Responsable for:

- rendering dynamic HTML;0
- filling in the data obtained by the controller.

## Routing

- Through routing is determined:
  - which controller is addressed;
  - which view is rendered.
- The chosen route depends on the query string in the url.

## Project structure

- **Bootstrap**:
  - _database.php_: connecting to the database;
  - _router.php_: define route(s).
- **Index.php**: routing to the requested controller / view. (**DO NOT TOUCH**)
- **Model**: all our models. (classes)
- **Controller**: base class controller.php + various controllers.
- **View**: layout.php as container + different views.
- **Assets**, **CSS** and **JS**: see Web 1 and Creative Code 2.

# Routing

## The `router.php`

- Required in index.php.
- Receives all requests.
- Views the querystring: searches for a parameter page.
- Looks for a route in the array for the parameter page:
  - not found: load main page;
  - if found: execute appropriate controller.

```php
<?php
$routes = array (
	'home' => array (
		'controller' => 'Pages',
		'action' => 'index'
	),
	'about' => array (
		'controller' => 'Pages',
		'action' => 'about'
	),
	'contact' => array (
		'controller' => 'Pages',
		'action' => 'contact'
	),
)
?>
```

# Controllers

## The `controller.php`

- You get from us. (We get it from the teachers?)
- Always serve as parent class for your own controllers.
- Require it in your own controllers.
- **DO NOT MAKE ANY CHANGES TO THIS FILE!!**

## The `xxxController.php`

- Write your own.
- Inherits from Controller.php.
- Contains the necessary public methods that match the routes.
<div class="page-break" style="page-break-before: always;"></div>

**Example**:

```php
<?php
require_once __DIR__ . '/Controller.php';

class PageController extends Controller {
	public function index() {
	// ...
	}

	public function about() {
	// ...
	}

	public function contact() {
	// ...
	}
}
?>
```

- Passing values to the view via `$this->set(name, value)`.
  **Example**:

```php
<?php
public function index() {
	$message = "Hello everyone.";
	$this->set('welcome', $message);
}
?>
```

```html
<section>
  <header>
    <h2><?php echo $welcome; ?></h2>
  </header>
</section>
```

# Views

- Layout.php:
  - contains the general html-structure;
  - does one echo of `$content`:
    - `$content` contains the info for a specific page;
    - `$content` is replaced by the HTML of a file;
  - file is always `view/controllername/functionnale.php`.
- Always one folder per controller.
- File per controller action / function.

- Variables set via `$this->set()` can be user.
- via if...else structures, determine wether or not to render parts of HTML.
- **Attention**:
  - do not write logic in the view;
  - logic = controller.
