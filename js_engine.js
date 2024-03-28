// JS Runtime Env(Browser) - JS Engine, a set of APIs, Callback queue, and microtask queue, and event loop
// v8 engine is used in chrome as well as nodejs
// Js engine is not a physical machine, google's v8 engine is written in c++
// Architecture: -
// CODE -> Parsing(broken down into tokens, syntax parser - > code to AST(Abstract Syntax Tree)) -> COMPILATION(JIT(just in time compilation), interpreter - executes line by line, compiler(compiled into an optimised form, efficient), modern js engines use interpreter and compiler both) -> Execution
// Js Engine also has memory heap, garbage collector(mark and sweep algorithm to collect garbage variables memory ) and call stack , inlining , copy elision, inline caching
// astexplorer.net to generate ast's
// v8 is the fastest engine till now
// JS is a JIT language(Just in time)

// settimeout : it does not guarantee that the callback will run after the specified time
// the callback will not execute until the global execution context is removed out of the call stack - concurrency model
console.log("Start")
setTimeout(() => {
    console.log("Callback")
}, 1000);
console.log("End")
let startDate = new Date().getTime();
let endDate = startDate
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("While Expires")
// start , end , while expires, callback
// if we delay the callback for 0ms , then also the output will be start, end , callback, as settimeout has to go through the process of callbackqueue
// 