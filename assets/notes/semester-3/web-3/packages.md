# Packages

When writing code it is beneficial to split things up by functinoality. It makes our code more structured and therefore clearer.

When we take this one step further, it becomes easier tto re-use the same code somewhere else.

If we go even further then, it becomes possible to share our code with others. And, off course, make use of other people's code in our project.

## Modules

Originally, JavaScript didn't have any mechanism to split and combine pieces of code. NodeJS came with support for this with `require()`, later, things like RequireJS, Webpack and Babel made this possible for JavaScript on the browser. It was waiting until ES6 for a native module syntax in the browser. Luckily for us, the same syntax is available now in NodeJS. Have a look at [this article](https://medium.com/@joabi/understanding-require-and-import-in-javascript-524b588c3b74) for some examples.