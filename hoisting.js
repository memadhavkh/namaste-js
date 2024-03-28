// hoisting is a concept in js , through which we can access the variables or functions before even initializing them , and it will not result in an error
getName();
console.log(x);
console.log(getName); // prints the function's code
// in most languages error will be returned

var x = 7 // if we remove this line, then in memory creation phase, x is nothing. thus we get a reference error
function getName(){
    console.log("Madhav")
}
var getName = () => {// since it's a variable the value given to getname is undefined and not the function code
    console.log("Madhav") 
}