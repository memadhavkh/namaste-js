var x = 1;
a() 
b()
c()
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 200;
    console.log(x)
    a()
}

function c(){
    b()
}
// doubt, chat gpt