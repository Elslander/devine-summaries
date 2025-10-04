# Npx

Don't worry, we won't introduce another entirely new thing here. `npx` is a command line tool that comes installed when installing Node.js. It allows is to run node scripts without installing them first (technically they are 'cashed' locally, but not installed...).

But first, let us see how to install a package 'globally'.

## `-g` flag

When installing a package, by default it is installed in the current project. This makes sense if we need some kind of library for our project. But since Node.js can do almost anything, it is often used as a tool for us, developers. So it makes more sense to install this 'globally' so it becomes available everywhere on the command line. The least useful example of this must be 'cowsay', but is fine to act as an example. Who doesn't want a cow to say some lines, available - everywhere - on your system? It doesn't matter where you run the following command, since it will be installed global.

```sh
npm install -g cowsay
```

Now, let the beast go! You can run this from anywhere now.

```sh
cowsay Devine FTW
#  ____________
# < Devine FTW >
#  ------------
#         \   ^__^
#          \  (oo)\_______
#             (__)\       )\/\
#                 ||----w |
#                 ||     ||
```

But now, this is installed. By using the command `which` you can see where a certain command is installd.

```sh
which cowsay
```

This can become a hassle when you need different versions somehow.

Let us remove this globally installed package.

```sh
npm uninstall -g cowsay

# removed 41 packages, and audited 1 package in 259ms

# found 0 vulnerabilities
```

## npx

With npx, you can run commands without installing them. The first time you run it, `npx` will ask you to install it, but in fact, it is added to a cache...

```sh
npx cowsay devine
# Need to install the following packages:
#   cowsay@1.5.0
# Ok to proceed? (y)
#  ________
# < devine >
#  --------
#         \   ^__^
#          \  (oo)\_______
#             (__)\       )\/\
#                 ||----w |
#                 ||     ||
```

## A more useful example

Making a cow speak won't add any additional value to your resume. A better use case for `npx` is `gitignore` which adds a new .gitignore file to your project, especially tailored for your type of project.

```sh
npx gitignore
# Need to install the following packages:
#   gitignore
# Ok to proceed? (y)
# Usage: gitignore [PROJECT TYPE]
# Example: gitignore rails
# Available project types can be found by running `gitignore -types` or at https://github.com/github/gitignore
```

We need to add a type run `npx gitignore --types`, visit the url or just follow our advice and run `npx gitignore node` for a typical node/web project.

```sh
npx gitignore node
# Created .gitignore file for flag type node.
```

And there you have it, a .gitignore file in your project.
