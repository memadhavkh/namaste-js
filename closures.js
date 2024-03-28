function x(){
    var a = 6;
    function y(){
        console.log(a);
    }
    y();
}
x();
// Function bundles with it's lexical scope forms a closure
// if we put a debugger on line 4, then we get a closure in scope section (browser debugging sources tab) 
function x(){
    var a = 6;
    function y(){
        console.log(a);
    }
    return y;
    // we can also put return before the function y on line 13
}
var z = x(); // here not just the function , but the function along with it's lexical scope is returned inside z, thus when we run it after thousands of lines of code, it is able to return the reference of a
// if we update the value of a in function x , then it prints the updated value, because it has a's reference and not it's value
console.log(z); // returns y function
// .. thousands of lines of code
z(); // 6
// after calling x and y the ec is gone, but then too , the function prints the value of a , because the function remembers from where it came from , it's lexical env, lexical binding.
// if we go deep to more levels by making more functions inside functions, it will still be a closure
// Uses of closures = functions like once, maintaining state in async world, currying in js, setTimeouts, iterators
// Due to closures, functions remember something, which make it very useful