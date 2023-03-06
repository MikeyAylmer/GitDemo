// maps allows us to create a key value data store just like objects 
// except we can use any data type for the key and it will not be converted to a string.
const myMap = new Map();
// .set is how wr store things inside the map
myMap.set(7, 'seven');
myMap.set('7', 'seven string');

// the array will not work because an array is a reference type so, [] === [] // false
myMap.set([], 'empty array!');
// so if you wanted to use an object, an array, or a function as a key here in a map you need to store a reference to it.
const empty = [];
myMap.set(empty, "empty array!")

// .get is how we retrieve things from the map.
myMap.get('7');

const bandData = [
    [3, '3 Doors Down'],
    ['three', 'Three Dog Night'],
    ['nine', 'Nine Inch Nails'],
    ['four', 'The Four Season'],
    [41, 'Sum 41'],
];
// this is an example of another syntax we can use to make a map but it follows this order [[key, val],[key, val],[key, val]]
const bandMap = new Map(bandData);
// then we can use the spread operator to make us an array with the exact same format
    // [...bandMap] // turns the map into an map of arrays
// you can also chain .set calls together
bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox Twenty');

// .has allows us to see if the map has something if it does it returns true if not its false
bandMap.has(41); // true
bandMap.has(9) // false
bandMap.has('nine') // true

// .delete will delete a pair based off a certain key
bandMap.delete('twenty') // removes 'Matchbox Twenty' and its key value pair 'twenty'.
// .clear will clean out the entire map so bandMap.clear() // leaves bandMap empty.

// we can use .keys() to collect all the keys from the map but its not an array it called a map iterator,
bandMap.keys() // gives us all the keys in the map back
// but if we wanted to we could use spread and its an array
bandMap.values() // does the same thing except for with values.

// below is examples of looping over maps, to iterate over a map we could use a for(of) loop,
// we can also use a for(each) method, maps also have a .size its not .length
// so with Map if we wanted to use the for(each) method it all we do is pass in a call back the trickest part
// to remember is the first parameter is the value the second is the key
bandMap.forEach((val, key) => {
    console.log(key + '=>' + val);
}) // returns this below 
// 3=>3 Doors Down
//  three=>Three Dog Night
//  nine=>Nine Inch Nails
//  four=>The Four Season
//  41=>Sum 41
//  182=>Blink-182

// when we use a for(of) loop we get an array, and we can use destructuring to grab they key and the value
for(let [key, value] of bandMap){
// notice that the key is first its opposite from a forEach loop with is (value, key)
    console.log(key, '=', value);
}

// now we will show examples of sets
// sets only store unique values you can not have any duplicates
const dogs = new Set(['Frenchie', 'Poodle', 'Labordor', 'Shitzu']);
// sets only takes the first argument everything else is ignored, and strings are iterable.
// .add lets you add onto the set
dogs.add('Chihuahua').add('Dalmation');
// .has checks to see if the value is in the set and it returns a boolean method (true, false)

// now lets make a function that removes a dogs from a list of animals.
function filterOutDogs(animals){
    const dogs = new Set(['Frenchie', 'Poodle', 'Labordor', 'Shitzu']);
//  remember filter looks for a true value to filter out so we want where is not included which is !dogs.has(animals)
    return animals.filter((animals) => !dogs.has(animals))
}
const housePets = ['Frenchie', 'Chameleon', 'Spider', 'Snake', 'Poodle'];
// sets are really useful for adding new valueas and checking to see if values already exsist in the set
// its also a really easy way to remove duplicates from an array.
const ages = [ 45, 42, 21, 23, 24, 98, 2, 4, 4, 12, 4, 12, 45];
const removeDuplicateAges = new Set(ages);
// and to make it back as an arry we just [...new Set(ages)] // []

// answer 1
    // {1,2,3,4}

// answer 2
    // {referee}

// answer 3
    // {1,2,3,true,false}

// answer 4
function hasDuplicates(arr){
    let newArr = new Set(arr);
    return newArr.size !== arr.length
}

// answer 5
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers 
// and the values are the count of the vowels in the string.
function isVowel(char){
    return "aeiou".includes(char);
  }
//   first set a function called is vowel that find a vowel. 
  function vowelCount(str){
    const vowelMap = new Map();
// turn the string into a map
    for(let char of str){
// loop over with a for(of)
      let lowerCaseChar = char.toLowerCase()
// make sure there lowercase
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }