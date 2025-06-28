Databases - ORM

# What is a database?

- A system for storing data.
- Focus on flexible consultation and use. (quickly retrieve and store data)

# What is a (relational) database?

- Commonly used type of database.
- Stores data in **tables**. (1 table = 1 **entity**)
- Tables can have **relationships**.
- A table has **columns**. (1 column = 1 **property**)
- A table has **rows**. (1 row = 1 **record**)

## RDBMS

Relational Database Management System.

- Software installed on the server.
- To manage data.

## MariaDB

- Is an example of an RDBMS.
- Open source.
- Free.
- Popular.
- Good PHP integration.
- Forked of MySQL.

- **Maria**: daughter's name Michael Widenius.
  - Developer of MariaDB.
  - Also has a daughter named My -> MySQL.
- **SQL**: Structured Query Language.
  - Standard language to communicate with databases.
  - Not only with MySQL or MariaDB.

### Use of MariaDB

- Can be done entirely through Terminal. (for die hards only)
- Can be done via **graphical interface**:
  - phpMyAdmin;
  - open source;
  - written in php;
  - is already installed with Docker;
  - http://localhost:8080 (root/devine4life).
- Easier / faster via Sequel ACE. (mac only)

#### phpMyAdmin

http://localhost:8080

- Username: **root**.
- Password: **devine4life**.

#### Sequal ACE

https://sequal-ace.com/

- Host: localhost.
- Username: **root**.
- Password: **devine4life**.

# Naming conventions

## Database

- Lowercase
- Singular
- Sometimes 'db' is added.
- Examples:
  - netflix
  - devine
  - food
  - moviedb

## Tables

- Plural
- Lowercase
- No spaces, use underscores.
- Examples:
  - products
  - movies
  - actors
  - blog_posts
  - product_reviews

## Columns

- Unique ID per table:
  - field name: id
  - datatype: int
  - AUTO_INCREMENT (A_I): checked
  - mark field as primary key
- Foreign keys: name of table in singular.

# Data Types

- VARCHAR(maxLength)
- CHAR
- TEXT
- INT
- DECIMAL
- BOOL(EAN) or TINYINY
- DATE
- TIME
- DATETIME

Every column in our tables should have the correct data type.

**Why**?

- Improve storage.
- Faster
- Data quality. (restriction)

## String

- **VARCHAR(maxLength)**
  - recommended
  - 255
- TEXT
- VAR(length)
  - fixed length columns

## Numeric

- INT
  - Integer
  - Length: 11
  - Whole numbers
- DECIMAL
  - Decimal
  - Length: 10.2
  - High precision

## Temporal

Everything date or time related.

- DATE
  - yyyy-mm-dd
- TIME
- DATETIME

## Boolean (TINYINT)

The way to store booleans in MySQL as a 0 (false) or 1 (true).

# Tips & Tricks

## Unique id

Tables without a primary key tend to be quite slow.

## Backup

- Create backups!
- After each successful / major change in your database.

# ORM

Object Relational Mapping.

## Eloquent ORM

- Part of Laravel PHP web application framework.
- Each table has a corresponding model.
- What can we do?
  - connect to database
  - retrieving model **collections or single models**
  - **insert** / **update** / **delete** model(s)
  - managing / working with **relationships**

# Connecting to the database

1. Fill in the DB connection details in `./boodstrap/database.php`

```php
use Illuminate\Database\Capsule\Manager as Capsule;
$capsule = new Capsule;

$capsule->addConnection([
	'driver' => 'mysql',
	'host' => 'mysql', // (can change)
	'database' => 'netflix', // database name (can change)
	'username' => 'root', // username (can change)
	'password' => 'devine4life', // password (can change)
	'charset' => 'utf8mb4',
	'collation' => 'utf8mb4_unicode_ci',
	'prefix' => '',
])
```

1. Require autoload.php and database.php in your index.php and start your docker server.

```php
require_once "../../../../vendor/autoload.php";
require_once "./bootstrap/database.php";
```

# Selecting a model

## An Eloquent Model

In `./model/Show.php`:

```php
use \Illuminate\Database\Eloquent\Model;

class Show extends Model {
	//
}
```

### Naming convention

Model and file name is the same as the table name, but **singular** and **capitalised**.

- Each table must have a primary key column **id**.
- Id must be an **incrementing integer**.
- Each table must have **created_at** and **updated_at** columns.

What if my table has no created_at and updated_at columns?`
Do this:

```php
use \Illuminate\Database\Eloquent\Model;

class Show extends Model {
	//
	public $timestamps = false;
}
```

## Selecting

### Selecting everything

Get every record from the database:

```html
<section class="content">
	<h1>Netflix Database</h1>
	<ul>
		<?php
		$allShows = Show::all();
		foreach($allShows as $show) {
			echo ("<li>" . $show->title . "</li>");
		}
		?>
	</ul>
</section>
```

**Warning**: with very big datasets there will be memory issues!

_Solution1_: use the chunk method.

```php
<?php
  Show::chuck(100, function($allShows)) {
    foreach($allShows as $show) {
      echo ("<li>" . $show->title . "</li>");
    }
  };
?>
```

_Solution 2_: use the cursor method.

```php
<?php
  $allShows = Show::cursor();
  foreach($allShows as $show) {
      echo ("<li>" . $show->title . "</li>");
  }
?>
```

### Selecting where...

```html
<ul>
  <?php
   $allShows = Show::where('rating', 'G')->
  get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

where...(<=, <, >, =, <>)

```html
<ul>
  <?php
   $allShows = Show::where('released', '<=', 1990)->
  get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

where...like

```html
<ul>
  <?php
   $allShows = Show::where('title','LIKE','Marvel%')->
  get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

where... and where...

```html
<ul>
  <?php
   $allShows = Show::where('rating', 'TV-Y7')->
  where('released','<=',1990)->get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

where... or where ...

```html
<ul>
  <?php
   $allShows = Show::where('rating', 'TV-Y7-FV')->
  orWhere('released','=',1982)->get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

### Special functions

count, max, min, avg, sum,...

```php
// maximum
<?php
   $maxScore = Show::all()->max('score');
     echo ('Maximum score: ' . $maxScore);
  ?>

// average
<?php
   $avgScore = Show::where('rating','PG')->avg('score');
     echo ('Average score: ' . $avgScore);
  ?>
```

### Order

ascending or descending

```html
<ul>
  <?php
   $allShows = Show::where('rating', 'G')->
  orderBy('title','asc')->get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

### Limit and offset data

```html
<ul>
  <?php
   $allShows = Show::where('rating', 'G')->
  orderBy('title','asc')->offset(10)->limit(5)->get(); foreach ($allShows as
  $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

### Retrieving single fields

```html
<ul>
  <?php
   $allShows = Show::select('title')->
  where('rating', 'G')->get(); foreach ($allShows as $show){ echo ("
  <li>" . $show->title . "</li>
  "); } ?>
</ul>
```

### Retrieving single models

```html
<ul>
  <?php
   $oneShow = Show::find(2);
   $oneshow = Show::findOrFail(1);
   ?>
</ul>
```
