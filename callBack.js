
// examples of Callbacks with functions 
function holler(){
    console.log("Hey You!");
}

const whisper = function(){
    console.log('pssst I have a secret');
}

function add(x, y){
    return x + y;

}
function sub(x, y){
        return x - y;

}
function multi(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function power(x,y){
    return x ** y;
}
// here we make individual functions and then group them as an array with a const
const mathFuncs = [add, sub, multi, divide, power];
// setting an array of functions using the names of idividual functions to a single function called mathFuncs
// that calls all functions within the array

setTimeout(whisper, 4000);
// 


function doMath(a,b,mathFunc){
   return mathFunc(a,b)
    // subtract(a,b)
    // divide(a,b)
    // multip(a,b)
    // add(a,b)
}
// this is a function called do math which allows us to pass in two numbers
// in the console you log doMath(a,b,and then call on add,sub,multi,or divide) will give us an answer
// the name mathFunc doesnt matter it can be anything its just better to be clear and meaningful
doMath(3,4, function(a,b){
    console.log(a ** b)
})

function doAllMath(a,b,mathFuncs){
    for(let func of mathFuncs){
       console.log (func(a,b));
    }
}
// so whatever mathFuncs is, we are iterating over it each time
// and the value of each element in the array, which is a function will be
// stored using the name func. so we excute it we pass a and b and then we have a callback function
// for all our math problems in one callback

// next is example of built-in array methods
// first method we will be learning about is the forEach method.
// forEach is an array method it operates on an array. you pass in a function
// and it calls that function for every value in the array.
// and then forEach always returns undefined. no matter what
// so the goal of forEach is to simply call some function for every element in an array.

const colors = ['teal', 'cyan', 'peach', 'purple'];
// colors.forEach(console.log) is a good was to show what forEach does.
// colors.forEach(function(value, index, array){});
colors.forEach(function(val, i){
   const caps = val.toUpperCase();
    console.log(`at index ${i}, ${caps}`)
})

const prices = [30.99, 19.99, 2.5, 99.0];
let total = 0;

// below is commented out to show it can be written both ways with same results.
// prices.forEach(function(price){
//     total += price;
// });
// console.log(total);

// can also be written cleaner with a forOf loop.
for(let price of prices){
    total += price;
};
console.log(total);
// forOf is used 99% of the time. more then forEach.

// if we define a function like in the example above this function will be passed three elements.
// or three items everytime forEach calls it, so the first time it will pass in 'teal'.
// as the first argument, then the second arguemnt is the value of the array which is 0,
// the third argument is the entire array which is why when we just console.log
// we get teal(value) 0(index) (array)['teal', 'cyan', 'peach', 'purple']
// you can also use only value argument if u want or only value and index arguments.

function forEach(arr, callback){
    for(let a of arr){
        callback(arr);
    }

}

forEach(colors, function(){
    console.log(colors.toUpperCase());
})