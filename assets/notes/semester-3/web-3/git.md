# Git

## About git

- version control system
- collaboration
- Linus Torvalds
- since 2005
- git is something different from GitHub
- we will use git from the command line
- 147 commands
- internal operation

## Why git

- easy to do distributed development
- scalable: being able to collaborate with 1000+ developers
- fast & efficient and reliable
- know who did what
- branching
- for free

## Man

A built-in manual.

```sh
man git-add
man git-commit
man git-"command"
```

## Install git

Git is installed when you install the xcode command line tools.

```sh
xcode-select --install
```

## Username & email

```sh
git config --add --global user.name "username"
git config --add --global user.email "email@adress"
git config --add --global core.editor "nano"

git config --get user.name
git config --get user.email
git config --get core.editor
```

## Create a new git-repo

- you can turn any existing directory into a git repository
- be aware where exactly you initialise the new repo
- `pwd` = print the current working directory
- **repo(sitory)**: a git tracked project

```sh
git init
```

### Oops..

You wouldnt be the first to accidentally put its whole documents' directory under source control.

- go to the folder that you want to get out of git's version control
- show hidden files (shift + command + .)
- delete the `.git` folder

## Checking status

- current status of the repo
- which files have been
  - changed
  - added
  - deleted

```sh
git status
```

## Checking diff

- `git diff`: shows difference in unstaged files from their committed version.
- `git diff --staged`: shows difference in staged files from their committed version.

```sh
git diff
git diff --staged
```

## Staging files

- Git doesn't automatically keep track of changes.
- `git add` is the command that stages the changes.
- You're selecting specific files (or parts of files) that will be included in the next commit.
- Yo delete files, you need to add the `-A` flag to the command.

```sh
git add "path-to-file | pattern"
git add .
git add -A .
```

## Committing files

- Commit tkes a snapshot of the files that are staged.

```sh
git commit
git commit -m "My commit message"
```

## Tracking & committing files

You local repo consists of three "trees" maintained by git:

1. **Working directory**: holds the actual files.
2. **Index**: acts as a staging area.
3. **HEAD**: points to the last commit you've made.

### Add

- Updating the index using the current content found in the working tree, to prepare the content staged for the next commit.

### Commit

- Point in time representing the project in its entirety.
- Now the file is committed to the HEAD, but not in your remote repository yet. Everything is still local/
- **sha**: 40 a-f 0-9 characters, is calculated from contents of change, author, time, and more.

## Untracked, staged, and tracked files

### Untracked files

- Not yet part of version control.
- Easy to accidentally lose work, since git does not have any information about these.

### Indexed / staged

- This is where the changes are to be committed.
- You must stage before you commit.
- don by using `git add`.

### Tracked

- Already in version control and may have staged changes awaiting commit.

## Undo changes after staging

```sh
git restore --staged hello.txt
git restore hello.txt
```

## Logging

**`decorate`**: puts branches / HEAD in the commit logs so you can see in a friendly way where your branches are pointed at.
**`graph`**: shows a graph...

```sh
git log
git log --graph --decorate
```

## How git works internally

- The contents of files are stored in blob objects.
- History is kept in commit objects.
- The structure is maintained in tree objects.
- If you have multiple files with the same content, the tree will reference the same blob object multiple times, saving storage.