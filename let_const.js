// let and const declarations are hoisted, but they are in a temporal dead zone
// the var's values are given the value undefined, but for let they are given the undefined value , but they are stored in a different memory space than global execution context, and we can't access that before initialization
console.log(a)
let a = 10
var b = 100
// here , the time between line 3 and 4 is a temporal dead zone , because for that time , a is hoisted, in temporal dead zone, we get a reference error
// there will be a syntax error , while reinitializing a with let or var
let a = 100 // error
var a = 100 // error
var b = 20 // no error
// const also has temporal dead zone
const d;
d = 1000; // error, const has to be initialized then and there only
// type error - assignment to const second time
// syntax error - the code is rejected and not executed, duplicate declaration
// reference error - in temporal dead zone, and if the variable is not in global ec
