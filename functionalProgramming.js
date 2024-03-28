// Higher order functions
// a function which takes a function as an argument or returns a function
const radius = [3,1,2,4];
const calculateArea = (radius) => {
    const output = [];
    for(let i = 0; i < radius.length; i++){
        output.push(Math.PI * radius[i] *radius[i])
    }
    return output
}
// DRY Principle - Do not repeat yourself
// optimsing code :-
const area = function (radius){
    return Math.PI * radius * radius;
}
Array.prototype.calculate = function (logic){
    const output = [];
    for(let i = 0; i < this.length; i++){
        output.push(logic(this[i]))
    }
    return output;
}
// just write a logic , and pass it to calculate, make the logic according to functions
// reusability, modularity, DRY Principle
console.log(radius.calculate(area));