// whatever comes inside the call stack , it gets executed then and there
// Call stack is inside JS engine which is in the browser
// To access the superpowers of browser like urls, timers, pages, elements, we use web APIs which gets attached to js through window object or the global object
// Web APIs include - setTimeout() , DOM APIs, fetch() , localStorage, console, location
// settimeout and console is not JavaScript
console.log("Start") // this calls the console web API, which is inside window object
setTimeout(() => {
    console.log("callback function")
}, 1000);
// Callback Queue is a basically a queue for maintain'g callbacks to be executed later, like in this case after 1s , the callback function is moved to callback Queue and then the event loop continously checks whether this queue has something or not, if yes, then it moves that callback to the call stack to be executed
// event loop acts like a gatekeeper between callback queue and call stack
// Event listeners remain there until browser is closed or we have explicitly removed an event listener
// Event loop continuously monitors call back queue and call stack
// Why do we need a callback queue? - Suppose the user clicks a button 5-10 times, then we must have a sort of storage in the form of a queue, to detect that, thus callback queue is needed
// microtask queue - same as callback queue, but with higher priority
console.log("Start")
setTimeout(() => {
    console.log("CB Timeout");
}, 1000);
fetch("https://api.netflix.com")
.then(function cbF(){
    console.log("CB Netflix")
})
.catch(function(){
    console.log("error")
})
console.log("END")
// Callbacks through Promises , Mutations Observers are in the microtask queue
// Callback queue - also known as task queue
// Once all the tasks in the microtask queue , the event loop give chance to the callback queue to be executed
// Starvation of functions in callback queue - when a function in a microtask queue, generates another task in microtask queue, and so on... , then call back queue, never gets a chance to be executed