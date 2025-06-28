# Recap

Web development means client and server.

# Database deployment

## Export local database

(Sequel Ace)

- Open Sequel Ace, connect to localhost, select database.
- File > Export > SQL

## Import local database into Combell

1. Go to Combell
2. Manage Hosting

Combell > databases > click add > (fill in necessary fields)

## Connect to online database via Sequel Ace

Fill in the connection fields (name, host, username, password, database). Add it to favourites. (bottom left)

## Importing

In Sequel Ace:

- File > import

# PHP deployment

## Combell

- Set the PHP version in Combell to PHP 8.3.
- Manage Hosting > PHP settings > version > change version

## FileZill

- Same principle as HTML & CSS. (just drag the files in there like we did for integration 1)

## Show errors

- Update index.php
- copy index.php to FileZilla
- Navigate to your website (google it)

**You get errors**:

- Upload the 'vendor' folder in project directory (folder).
  - Many files to upload (can take some time).
  - Double check for failed transfers.
  - Edit the index.php file to reflect the new path.

```php
require_once "./vendor/autoload.php".
```

- Correct database connection details. (you got that huge ass error)
  - You can find hostname, database username, password on Combell.

> Case sensitive
> Online servers run on Linux, they are case sensitive (capitals).
> This means `model/Movie.php` is not the same as `model/movie.php`.
>
> Our macOS filesystem is not case sensitive.
