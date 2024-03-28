function x(){
    var i = 1;
    setTimeout(() => {
        console.log(i);
    }, 1000); // this set timeout forms a closure, js does not wait for this line to be executed,after 1s , the execution of this function is put into the call stack
    console.log("Namaste JS") // first this will print
}
x();
// Problem - to print 1 to 5 at 1st to 5th second
for(let i = 1; i<= 5; i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000);
} // expected op is 1 after 1 sec, 2 after 2 sec, till 5,  but output is 6 , 6 , 6 , 6 , 6. It's because of a closure
// It's because js doesn't wait for anything, and for settimeout, it stores the reference to i, so after the i becomes 6, then these set timeouts are executed, thus 6 is printed everytime.
// an easy fix would be to change var i = 1, to let i = 1, because let is block scoped, thus, everytime the loop runs a new copy of i is created
// if we have to use var and not let, then we have to form a closure and pass i as a seperate variable all the time, like the following:-
for(var i = 1; i <= 5; i++){
    function closure(i){
        setTimeout(() => {
            console.log(i);
        }, i*1000);
    }
    closure(i); // as arguments are passed as copies , thus it will work
}
// Example of a closure, for an interview
function outer(){
    var a = 10;// if we put it after line 31. it will still work
    function inner(){
        console.log(a);
    }
    return inner; 
}
outer()(); // two parantheses for calling the inner function too which is returned in outer
// if we change var to let in line no 28, it will behave the same way , unless the inner function is inside the outer function
// if we take a parameter b in outer function, it will behave same
// if we increase layers of depth like outer nested inside outest, and so on, then also it will form a closure with the outest function
// if we have a conflicting name in global scope with let, there will be no issue + if we does not have the value of a defined in any of the functions, then it will move to global scope
// advantages of closures: module pattern, function currying, memoice and once, data hiding and encapsulation, eg of data encapsulation:-
// thus we can't directly access the variable counter , by forming a closure
function counter(){
    var counter = 0;
    return function incrementCounter(){
        counter++;
        console.log(counter)
    }
}
// to access counter , we have to call counter 
counter()();
// whenever this function is run, it forms a fresh new independent closure, thus it will not interfere with any other closure
// scalable and a good way to implement the above thing is to form a constructor function
function Counter(){
    var count = 0;
    this.incrementCounter = function(){
        count++;
        console.log(count);
    }
    this.decrementCounter = function(){
        count--;
        console.log(count);
    }
}
var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

// disadvantages: overconsumption of memory, if not handled properly, it may lead to memory leaks, what is a garbage collector: program in js engine , which freezes the unutilised memory, or unutilised variables
// in latest js engine and google chrome, the unutilised variable is gone out of memory , even if it forms a closure
