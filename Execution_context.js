// Everything in js happens inside EC.
// EC contains memory component(key value pairs) also known as variable environment, and code component known as thread of execution, also this execution context is created in two phases, memory creation phase, and then code execution phase
// JS is a synchronous single threaded language(one command at a time in a specific order), once the current line is executed , then it goes to next line
// in memory creation phase , variables are given the value undefined, and functions mai whole code is copied in the memory phase
// in code execution phase, for each function invoked , another sub execution context is created inside the global execution context code component. after execution of that function execution context, whole execution context created for the function will be deleted
// after execution of whole js code, global execution context also gets deleted
function square(num){
    // .
    return undefined
}
var square2 = square(2)
console.log(square2)
// num is parameter, v is argument
// return tells the program to return the control of the program to the place where the function was invoked.
// JS has it's own call stack, with bottom part populated with global execution context, then the function's execution context is pushed to the stack, and so on.
//  Call stack maintains the order of execution of execution contexts, known by many fancy names like machine stack , runtime stack, control stack etc.