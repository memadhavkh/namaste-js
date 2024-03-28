a(); // Function will be executed
b(); // Error
// Function Statement or Function Declaration
function a(){
    console.log("a called")
}

// Function Expression
var b = function(){
    console.log("b called")
} // assigned undefined initially

// Anonymous Functions - they are used when functions are used as values, anonymous functions cannot be used as function statements , it will give error as the following
function(){

}

// Named Function Expression
// it's a function expression without using anonymous function or giving name to the function
var c = function xz(){
    console.log("named function expression")
}
xz(); // wrong, will give error

// Difference between parameters and arguments
function parameters(param1){
    console.log("parameters")
}
parameters("kuch bhi"); // Arguments

// First Class Functions / First Class Citizens
// passing functions inside functions, and returning functions from a function, the ability of functions to be used as values, from these reasons, the functions in js are named as first class functions

// Arrow Functions - Ecma Script 6
() => {

};