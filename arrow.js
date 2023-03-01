const array = [1,2,3];
array.forEach(function (n, idx) {
    console.log(n, idx);
  });
//   is the same thing as
array.forEach((n, idx) => {
    console.log(n, idx);
})
// difference between function decleration and function expression
// this is a function decleration 
function greet(){
    console.log('hi');
}
// this is a function expression
const add = function(x,y){
    return x + y;
};

const sum = (x,y) => {
    return x + y;
}

// [2,3,6,78,99,104,23].reduce(function(max, currNum){
//     return Math.max(max, currNum);

// });
// below is the same code just writtin with arrow function
[2,3,6,78,99,104,23].reduce((max, currNum) => {
   return Math.max(max, currNum);

});

// arrow function Shortcuts
// [1,2,3,4,5].forEach((n) => {
//     console.log(n * 10);
// })
// you can skip using parameters only if your using 1 arguement
// for example
[1,2,3,4,5,6].forEach( n => {
    console.log(n * 10);
})
// so if you have 1 parameter u can leave them off but if you have no parameter or more than 1 u need
// to use parenthesis
const bye = () => {
    console.log('BYE!')
}
// arrow functions have an implicit return(means it return without typing return) if you
// leave out the curly braces.
let numbs = [1,2,3];
let arrSquared = numbs.map(n => n ** 2);
// this is an implicit return ^^
[1,2,3,4,5,6].filter( n => n % 2 === 0)

const dbls = (n) => n * 2;

const dailyRainTotals =[
    [1.2, 0.35, 2.2],
    [1.7, 0.6, 0.1],
    [2.5, 0.9, 1.5]
];
// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//         return sum + inchesOfRain
//     });
// });
// now lets write the same code but with an explicit return
dailyRainTotals.map((hourlyRainTotals) => 
    hourlyRainTotals.reduce((sum, inchesOfRain) =>  sum + inchesOfRain)
);

// answer 1
const double = (arr) => {
    return arr.map(val => {
        return val *2
    })
};
// or like this
const dbl = arr => arr.map(val => val * 2);

// answer 2
const squareAndFindEvens = (numbers) => numbers.map(num => num ** 2).filter(square => square % 2 === 0); 