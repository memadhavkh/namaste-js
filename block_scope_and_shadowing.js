// let and const are block scoped , {}
// block is also known as compound statement, i.e. it groups multiple lines of code so that wherever we have to refer to multiple lines of code from a single line, we can use the reference to block
//**** group of multiple statements so that we can put it where js expects a single statement is block
{
    var a = 10
    let b = 20
    const c = 30
}
// b and c are block scoped and a is inside global scope, we cannot access b and c outside block
//* shadowing in js
var d = 100
{
    var d = 10
    console.log(d) // 10
}
console.log(d) // 10
// line no 13 shadows the declaration of d from line no 11. thus the original value is replaced by the block's value of var
// shadowing also works same for the function
// it is because both var are referring to same memory space
// this only happens when we access var outside block , for let and const with same case , it prints 10 inside block and 100 outside block scope
// illegal shadowing
let a = 20
{
    let a = 200 // possible shadowing
    var a = 200 // illegal shadowing , we can't shadow let using var
    // but we can shadow a var using let
}
// block scope follows lexical scope
// scope are same for normal and arrow functions