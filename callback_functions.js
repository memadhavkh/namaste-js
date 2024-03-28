// What is a callback function in JS
// Callback functions gives us the power of asynchronity as callback functions can be called later, like settimeout
function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
}) // humne yha par x call kra hai, with y as a argument to the function x

// JS is a synchronous and single-threaded language (can do one thing at a time in a particular order/sequence)

// Blocking the main thread(call stack)
// when a particular code takes long time to execute, we have to make that code in async operation because otherwise it'll block the call stack for next executions/operations
// After a timeout in case of settimeout, or after execution of this code, the result appears in call stack , to perform operations in js

// Event Listeners
function attachEventListeners(){
    let count = 0;
    document.getElementById("id")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked" , ++count);
    })
}
attachEventListeners();

// Garbage Collections and removeEventListener
// Why do we need to remove event listeners?
// Event Listeners are heavy like they consume more memory