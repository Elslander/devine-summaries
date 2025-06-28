Create Read Update Delete.

- **Create**: add a new row;
- **Read**: select a row;
- **Update**: edit a row;
- **Delete**: delete a row.

# Create

## In the view

- Via a form.
- Method is always on **POST**, action points to the necessary route.
- Contains **a hidden field** with a name "action"; important for the controllers.
- Each field has a **name attribute**: will not be sent otherwise.

```html
<form method="post" action="index.php?page=home" class="form-general">
  <input type="hidden" name="action" value="add_show" />
  <div class="form-general__field">
    <label>
      Title
      <input type="text" required placeholder="Best show ever" size="50" />
    </label>
  </div>
</form>
```

## In the controller

- Check if there is data in `$_POST['action']`.
- Check which form we are submitting.
- Save the new model.
- **Redirect to convert `POST` to `GET`**.

## Validation

Always validate before a create, update or delete.

**Via the client**:

- based on HTML attributes and JavaScript;
- _is only for UX and easy to circumvent_.

_Validate on the server aswel_.

### In the model

- Create a separate static **function in the model** that tests all fields.
- Usually via `empty()` and `isset()`:
  - but everything is possible;
  - for example - `is_numeric`.
- Store errors in an array `$errors`.
- If no errors, the array is empty.

```php
<?php
public static function validate($data) {
	$errors = [];

	// Create an if-statement for each field of the entry in the database
	if(empty($data['title'])) {
		$errors[] = 'Please fill in a title';
	}
	if(empty($data['rating'])) {
		$errors[] = 'Please fill in a rating';
	}
	if(empty($data['released'])) {
		$errors[] = 'Please fill in a year';
	}
}
?>
```

### In the controller

- Check for errors.
- No errors: `save()`.
- Errors: send to view.

```php
$errors = Show::validate($newShow);

if(empty($errors)) {
	$newShow-save();

	header('Locate:index.php');
	exit();
} else {
	$this->set('errors', $errors);
}
```

### In the view

Show the content of `$errors`.

```php
<?php
// Show the errors
if(!empty($errors)) {
	var_dump($errors);
}
?>
```

# Update

## In the view

- The same as insert, but values are already filled in.

```html
<form method="post" action="index.php?page=show-detail?id=<?php echo $show['id']; ?>" class="form-general">
	<input type="hidden" name="action" value="update_show">

	<div class="form-general__field">
		<label>
			Title
			<input type="text" name="title" required placeholder="Best show ever" size="50" value="<?php echo $show['title']; ?>">
		</label>
	</div>
	<div class="form-general__field">
		<label>
			Rating
			<select name="rating">
				<option <?php if($show['rating'] === "PG-13") { echo "selected";} ?> value="PG-13">PG-13</option>
```

## In the controller

- Almost the same as insert, but first **get the model** (if you do not have it already).
- Also **validate**!
- Also redirect!

```php
$updated_show = Show::find($_POST['id']);
$updated_show->title = $_POST['title'];
$updated_show->rating = $_POST['rating'];
$updated_show->released = $_POST['released'];
$updated_show->score = $_POST['score'];

$errors = Show::validate($updated_show);
if(empty($errors)) {
	$updated_shows->save();
	header('Location:index.php');
	exit();
} else {
	$this->set('errors', $errors);
}
```

# Delete

## In the view

- Usually through a link with href attribute.
- And so via a GET request: the href contains an **action** and an **id**.

```html
<a
  class="delete-link"
  href="index.php?page=hame&action=delete_show&id=  <?php echo $show['id']; ?>">
  Link
</a>
```

## In the controller

- Checking the values in the query string.
- Validation is not necessary here: user just clicks.
- Redirect is also not needed (is a GET request).

There are 2 options:

1. `delete()`: first find the object, then delete.
2. `destroy(id)`: if you know the primary key.

```php
if(!empty($_GET['action']) && !empty($_GET['id'])) {
	if($_GET['action'] == 'delete_show') {
		// Option 1 - delete
		$showToDelete = Show::find($_GET['id']);
		$showToDelete->delete();

		// Option 2 - destroy
		Show::destroy($_GET['id']);
	}
}
```

# Soft Delete

A soft delete will not delete records from your database but instead make them 'inactive'.

- Add an extra column '_is_active_' to your database / table:
  - tinyint / boolean;
  - default value 1.

## Useful

To update all current rows in a table you can use the following query:

```sql
update shows set is_active = 1;
```

## In the controller

1. Add an extra filter when fetching data:

```php
$shows = Show::where('is_active', '=', 1)>orderBy('id', 'DESC')->get();
```

2. Use update instead of delete:

```php
if(!empty($_GET['id'])) {
	$show = Show::find($_GET['id']);
	$show->is_active = 0;
	$show->save();
}
```
