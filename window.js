// shortest js program is nothing.
// in chrome it's v8 engine running js
// window is a global object created along with the global execution context, we can access these values from anywhere in js, in case of browsers , window is created
// at global level, the this keyword points to the window object
// console.log(this === window) -> true when you run in browser
// anything not inside a function is in global space , and those which are in global space gets attatched to the window object
var a = 10;
console.log(window.a)
console.log(this.a)
// window and this are same in global space and in browsers not in a vs code env


// not defined and undefined //

// undefined is like a placeholder for no value in js, undefined takes it's own memory, it's not empty
// js is a loosely typed or weakly typed language, it does not attach strict data types to the variables, thus js is  flexible unlike c, c++
a = undefined // not a healthy practice, undefined is not for this purpose