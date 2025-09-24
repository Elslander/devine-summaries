# Terminal

A basic knowledge of how to use the command line is essential in out field.

As a starter, have a look at [this article](https://www.freecodecamp.org/news/command-line-for-beginners/). You don't have to know everything by heart, its just to give you some background info. You can skip the 'Git' and 'script' part.

## Important Terminal commands

The following commands should be easy for any developer to use:

- **`ls`**: Display a list of files and folders in the current folder.
- **`cd foldername`**: NAvigates to the folder named after the command. This folder will then become the active folder in your Terminal. In this example, navigate to the folder named "foldername". Instead of a relative name (i.e. a name of a folder that is in the current active folder), you can also enter a full path (starting with a forward slash). Tip: you can drag a folder or file from your finder to the terminal window to place the full path to that folder or file in the window.
- **`cd ..`**: NAvigate to the parent directory so that it becomes the active directory.
- **`mkdir foldername`**: Create a folder with the anme specified after the command. In this case, create a folder called "foldername" in the active folder.
- **`rm -d foldername`**: Delete a particular folder. This only works if the folder is empty. If you want to delete a non-empty folder, you can use additional options: `rm -rdf foldername` will delete the folder including subfolders and files.
- **`rm filename`**: Delete a specific file.
- **`mv originalname newname`**: Move or rename a file. You can also use absolute / relative paths to move files to another folder.
- **`cp original`**: Copu a file to a new location.
- **`cat filename`**: Display the contents of a particular file in your terminal window.
- **`echo "hello world"`**: Display the text between the quotes in the terminal window.

### Dollar sign

When providing examples of command line commands and output, a dollar sign is used to indicate the different between a command and output. A `$` means that you have to run that command.

When a fragment only contains commands, no dollar signs are used.

### Terminal app

You can find your terminal in you applications -> Utilities folder. It might come in handy to put this in your dock.

VS Code has a terminal built in. (view -> terminal) This is convenient when you have to interact with your project.

You can open VS Code from another terminal instance with the `code` command. (if you set it up correctly)

The following command opens VS Code with the current directory as the active workspace: `code .`.

### options `-` and `--`

Commands have options, these are used to modify the behaviour of the command. Some options can be specified with either a signle dash (-) or double dash (--).

A single dash can only be followed bu a single character, a double dash can be followed by a multi-character option.

If we take a look at the `code` command, you will find a lot of options:

```sh
code -- help
# Visual Studio Code 1.104.1

# Usage: code [option] [paths...]

# To read from stdin, append '-' (eg 'ps aux | grep code | code -')

# Options
#   -d --diff <file> <file>
#   -m --merge <path1> <path2> <base> <result>
#   -a -add <folder>
#   --remove <folder>
# ...
```

There is no need to read all of them in detail (this is just an example) but notice that some options like `-a` also have a full varient `--add`.

### Combining

You can combine short (one character) options into one long option. Let's have an example with `ls`.

First the default command: 

```sh
ls
# Applications
# Documents
# Movies
```

Now with the `-l` option, to list them in the 'long format':

```sh
ls -l
# total 3
# ...
# ...
# ...
```

There is also a `-a` option, which lists all the files and folders, including the hidden ones.

### Hidden files

With the `-a` option of `ls` you can see hidden files. There is a reason they are hidden. Don't mess with them unless you know what you are doing.

If you want, you can show those hidden files in you Finder bu running the following commands:

```sh
defaults write com.apple.Finder AppleShowAllFiles true
killall Finder
```

If you want to hide them, you can set the `AppleShowAllFiles` to `false` and run the command again.

### Profile file

A profile-file gets read when you start a new terminal session. In there, some commands can be executed to set environment variable, aliasses, etc. Depending on the shell you are using, this file might be called something like `.profil` or `.bash_profile`. When you are using `zsh`, it is called `.zshrc` or `.zprofile`.

### Autocomplete

By using the `tab` key, you can trigger autocomplete on commands or file and folder names. Type part of the command or part of the path and press tab to autocomplete. This way you can save a lot of time, and you also avoid typing errors.

By using the `up` (and then `down`) keys, you can browse through your previous commands. Very useful!

### Passing output to somewhere else

You can also write output from a command to a file, using the `>` character:

- `ls > test.txt` will write the output of the ls command to a file called 'test.txt'.
- `echo "hello world" > hello.txt` will write the output of the echo command (the text "hello world") to a file called 'hello.txt'.

## Be careful

**Do not just copy-paste terminal statements without understanding what they do. If you are not sure, try to grasp them by using tools like https://explainshell.com/**.