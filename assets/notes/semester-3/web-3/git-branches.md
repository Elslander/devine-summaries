# Git Branches

## Branching

Use branches to:

- create new features
- bug fixes
- experiment
- ...

## Default branch

```sh
git config --global init.defaultBranch main
```

## Creating a branch

```sh
git branch "branch-name"
git branch
```

## Switching branches

- `checkout` & `switch` are almost the same, `checkout` can do extra things besides switching branches.

```sh
git checkout "branch-name"
git switch "branch-name"
```

## Deleting branches

```sh
git branch "branch-name" -D
```

## Merge

- An attempt to combine two histories together that have diverged at some point in the past.
- A common commit point between two -> best common ancestor.
  - ("merge base")
  - The branch you're on is the target branch and the branch you name in "branchname" will be the source branch.

## Undo commit: `revert`

- Create a new commit that undoes the changes from the previous commit (one or many).

```sh
git revert HEAD
git revert "sha"
```

## `.gitignore`

- Files we don't want to track.
- `.gitignore` file
  - Text file in your repo that specifies which files and directories are allowed to be ignored by git.
  - For example:
    - `nore_modules` (see later)
    - `uploads` folder
    - `DS_Store`
