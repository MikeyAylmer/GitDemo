// destructuring helps you write compact more concise code
// when you have a data structure with different values in it, wether it an array or an object
// we can use the new destructuring syntax to extract certain values into new varaibles with a short syntax.
const teaOrder = {
    variety : 'oolong',
    teaName : 'winter sprout',
    origin : 'taiwan',
    price : 12.99,
    hasCaffeine : true,
    quantity : 3
};
// this is how we would extract the price and quantity and teaName before we had destructuring.
    // const price = teaOrder.price;
    // const quantity = teaOrder.quantity;
    // const teaName = teaOrder.teaName;
// ^^^ this is kinda obnoxious to have to continually type the name of the object (teaOrder.)

    // const {price, quantity, teaName} = teaOrder;
// // above ^^ we extract or destruct values our of the teaOrder object into new variables
// you must use {curly braces} that tells javascript we are destructuring these values into stand alone variables.
// destructuring does not mutate the code. its just unpacking or creating new variables based off of these values.
const {origin} = teaOrder;
const {continent = 'Asia'} = teaOrder;
// ^^ this only works if there is not an already an existing existing value for {continent} 

// below is practice examples using the rest operator in conjunction with destructuring
    // const {price, quantity, teaName, ...restOfTea} = teaOrder;
// ^^ we use the rest (...) operator to collect the rest of the teaOrder data.
const { teaName : tea} = teaOrder; //we rename to tea
// ^^ here we use a colon ( : ) and then whatever new name we want to name the variable which is tea.
function checkout(tea){
    const {price, quantity} = tea;
    return price * quantity;
}
// we wrote a function called checkout that multiples the quantity and the price so we start by extracting the values.

// next is examples of array destructuring 
// so when we destructor and array it is done off of position in our destructuring statment and we use square brackets []
const animeList = [
    { name: 'Attack on Titan', rating: 10},
    { name: 'Dragonball', rating: 7},
    { name: 'Naruto Shippuden', rating: 8},
    { name: 'One Piece', rating: 11},
    { name: 'Yu Yu Hakisho', rating: 10},
];

const [scariestAnime, funniestAnime,, personalFav] = animeList
// ^^ this is telling javascrip to take the first element in the array, 
// make a new variable to hold that element and call it scariestAnime. we can also use a coma (,) to
// skip elements personalFav = {name: 'One Piece', rating: 11}, we can also use the rest(...) operator

// next is examples of using destructuring as a parameter in a function
const teaTotal = ({quantity, price}) => quantity * price;

// next is ecxample of using destructuring as a parameter for an array function.
const longJumpResults = ['Tammy', 'Jessica', "Violet"];
const swimMeetResults = ['Japan', 'France', 'Chile'];

function awardMedals([gold, silver, bronze]){
    return {
        gold,
        silver,
        bronze
    };
}
// so to sum it all up we can set the parameter list with both arrays and objects.

const movie = {
    title: 'One Piece : World Z',
    ratings : [
        {source: 'imdb', value : '8.3/10'},
        {source: 'Rotten tomatoes', value : '93%'},
        {source: 'Metacritic', value : '88/100'},
        
    ]
};
// now lets destructur some nested data structures.
// so we are now doing multiple levels of destructuring, we're going throught the object to a specific property,
// which gives us an array and then based off of the position in that array, we're destructuring those individual 
// objects, specifically, the value object or the value property, and then we rename name it
const {
    ratings: [
        {value: imdbRating},
        {value: rtRating},
        {value: meteRating}
    ]
} = movie;

// next is examples of destructuring by swapping variables values.
let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';
// the old way we would just decalare an empty variable to save one of the values at and then assign properly
    // let temporaryVariable = delicious;
// sets temporaryVariable to 'Mayonnaise'
    // delicious = disgusting;
// sets delicious to equal 'Whipped Cream'
    // disgusting = temporaryVariable;
// sets disgusting to be 'Mayonnaise'

// another option though and cleaner option is to destructor
    // let both = [delicious, disgusting];
    // [disgusting, delicious] = both;
// so we put them and array called both, and then we swapped there indicies and set it back equal to both.

// next is and example of the fancy destructuring swap syntax
[disgusting, delicious] = [delicious, disgusting]
// on the right side we put delicious and disgusting doesnt matter which way and we use the reverse order on the left side

// question 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;
// answer 1
console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered) // 1846

// question 2
let planetFacts = {
    numbPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numbPlanets, ...discoveryYears} = planetFacts;
//   answer 2
console.log(discoveryYears); //{yearNeptuneDiscoveresd: 1846, yearMarsDiscovered: 1659}

// answer 3
getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'your name is Alejandro and you like purple'
getUserData({firstName: "Melissa"}) // 'your name is Melissa and your like green'
getUserData({}) // 'your name is undefined and you like green'

// answer 4
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // "Maya"
console.log(second); // "Marisa"
console.log(third); // "Chi"

// answer 5 
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "Whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); // "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"

//   answer 6

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10,30,20]

// answer 7
let obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };

const {a,b} = obj.numbers;

// answer 8
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

[arr[0],arr[1]] = [arr[1],arr[0]]

// answer 9
function raceResults (arr){
    return{
        first,
        second,
        third,
        ...rest 
    };
}
// one liner
const racingPosition = ([]) => ({first, second, third, ...rest})
