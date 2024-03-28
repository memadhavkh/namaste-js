// Lexical Env , lexical meaning hierarchy
// Lexical env refers to the parent of the local memory , like c is lexically inside a , and a is lexically inside global scope  
function a() {
    function c() {
        console.log(b)
    }
}
var b = 10
a();
// Here since the global ec remains after the deletion of function EC , thus, we can access b in this case
// from the above code, we can access b which is 10 even if there is no b in local function execution context, but if it's other way around, like b is defined in a function and we try to access b outside, we'll get a reference error
function d(){
    var b = 10;
    function e(){
        return
    }
}
console.log(b);
// but here , since the function EC contains the value of b, and this ec will be deleted after the execution of function, thus ,we can't access the value of b in global ec
// Lexical env = local env + reference to parent's env
// now this whole chaining of lexical env like c pointing to a , and then a pointing to global ec , is called as *** scope chain ***
// In browser , sources tab , anonymous inside call stack is global ec
// thus e has access to all the variables