// MAP
const arr = [5,1,3,2,6]
// Double
const output = arr.map(function(i){
    return i * 2;
});
console.log(output)
// Binary
function binary(x){
    return x.toString(2);
}
console.log(arr.map(binary))

// FILTER
function isOdd(x){
    return x % 2; // true when odd otherwise 0 -> false
}
const output1 = arr.filter(isOdd);
console.log(output1);
const output2 = arr.filter((x)=> x<3)

// REDUCE - iterate over all elements to get a single value
// sum or max
const output3 = arr.reduce(function(acc, curr){ // acc - to accumulate the values, curr - current value arr[i] is curr
    acc = acc + curr;
    return acc

}, 0) // initial value of acc
const output31 = arr.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr
    }
    return acc
}, 0)

// we can also chain these map , filter and reduce...
arr.reduce(function (acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
}, [])