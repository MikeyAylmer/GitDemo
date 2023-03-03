function plus(){
    const arg = (Array.from(arguments));
    // arguments object is not an array its an "array like object" so we have to convert it to an
// array first before using reduce, so we use Array.From(arguments) to turn the argument into an array.
    return arg.reduce((sum, value) => {
        return sum + value;
    });
};
// below code will not work because arguments do not work in a arrow function.
const max = () => {
    console.log(arguments);
}
// max function as a regular function expression
const maximum = function(){
    const args = Array.from(arguments);
    // first we turn the argument to an array
    return args.reduce((max, currVal) => {
    // then we use reduce on the array to filter through the array and return the highest number in the array.
        return currVal > max ? currVal : max;
    });
};
// the rest operator collects all the arguments, like the arguments object did, but its an
// actualy array, and whatever you name the argument you will have access to that inside
// your function body and that will contain the arguments passed to the function.
function addition(...nums){
    return nums.reduce((sum, n) => sum + n);
}
// using the rest (...) allows us to get by without useing the term arguments, we can we can give it 
// a name that makes more sense, and we dont need to worry about converting to an array, and it
// likes arrow functions.
const sumAll = (...values) => {
    if(!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
}
// above we used it to collect every argument but now we are going to use it to collect the remaining
// arguments, so we start out with named parameters that will capture on their own, then we can use the
// rest operator (...) to collect the rest, the remaining arguments.
// lets try it out below is a code called makeFamily it will return and object, with parents in one array
// and children in another seperate array.
function makeFamily(parent1, parent2, ...kids){
    return{
        parents: [parent1, parent2],
        // kids.length ? checks to see if there are kids inputed and then if there is it return kids if not it shows 'no kids' 
        childern: kids.length ? kids : 'No Kids'
    }
}

makeFamily('cindy', 'peter', 'cody', 'carly')

// the next example of rest is a function called filter by type it will accept a string as the first
// argument and then pass in some values.
const filterByType = (type, ...vals) =>  vals.filter((v) => typeof v === type);
// next we will learn about another use for these (...) called spread.
// the spread operator spreads out a collection of something into smaller individual arguments.
const math = [5,22,345,34,50,1,232];
Math.max(math) //NaN
Math.max(...math)//345
const randomThings = [23, 45, true, false, 'hello','goodbye', 0];

filterByType('string', ...randomThings); // 'hello', 'goodbye'
// below is examples of using spread inside of array literals [] , and array literal look like below
const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette.slice();
const paletteCopy = [...palette, 'grass green'];
// ^^ above i made a copy of the array and added my own colors without mutating the OG array

// here we spread the string into an array where each letter(element) in the array is one character.
const vowels = 'aeiou';
const vowelArr = [...vowels] // ['a','e','i','o','u'];
// spread is useful to create copies of an array, or combine multiple arrays, or create new arrays
// based of the exsisting arraY without ever mutating or updating the original array.

// we can also use spread with object literals aswell.
const teas = {
    type : 'oolong',
    name : 'winter sprout',
    origin : 'taiwan'
};
const tea2 = {...teas};

const teaTin = {...tea2, price: 22.99};
// when changing one of the values in the object literal you must put the spread first or it will overwrite
const newTea = {...teas, name : 'golden frost'};
// we can also use spread to combine object literals
const teaData = {
    steepTime : '30s',
    brewTemp : 175
};

const fullTea = {...teas, ...teaData};

// answer 1
const filterOutOdds = (...nums) => nums.filter(n => n % 2 === 0);

// answer 2
function findMin(...arg){
    return Math.min(...arg);
};
// or as a arrow function 
const findSmall = (...arg) => Math.min(...arg)

// answer 3
function mergeObj(obj, object){
    return {...obj, ...object}
}
// or as a arrow function
const mergeObjs = (obj1, obj2) => ({...obj1, ...obj2});

// answer 4
const doubleAndReturnArgs = (arr, ...arg) => [ arr,  ...arg.map(v => v * 2)];

// answer 5
const removeRandom = (items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx +1)];
}

// answer 6
const extend = (array1, array2) => ([...array1, ...array2]);

// answer 7
const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

// answer 8
const removeKeys = (obj, key) => obj.filter(obj => obj.pop[key]);

// answer 9
const combine = (obj1, obj2) => ({...obj1, ...obj2});

// answer 10
const update = (obj, key, val) => ({...obj, [key]: val})