const colors =['red', 'blue', 'purple', 'pink'];

// here we are making our own forEach function that works the same as a forEach array method
function forEach(arr, callback){
    for (let i = 0; i < arr.length; i++){
        callback(arr[i], i, arr);
    }
}
// we call on that function and pass it in the colors array and then a function
// and for each color we console.log(value, index, array);
forEach(colors, function(color, i, arr){
    console.log(color.toUpperCase(), 'at index of', i, arr);
})

// this is just the same thing just using the built in forEach array method instead of making our own function.
colors.forEach(function(color, i){
    console.log(color.toUpperCase(), 'at index of', i);
})
// the main trick here is that we are calling on the arguments that is passed in as a function.
// so we pass in that second argument were calling the perameter callback and we excute it and pass in some valueas

// now we will some examples of the map callback function.
// the callback function map creates a new array and then iterates through an array.
// runs a callback function for each value in the array. then adds the results of that callback.
// function to the new array and returns the new array the same length as the original.

const numbers = [21, 37, 64, 99, 142];
const negatives = numbers.map(function(num){
    return num * -1;
});


const doubles = numbers.map(function(num){
    console.log(num * 2)
});


const todos = [
    {
        id:1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id:2,
        text: 'walk the chicken',
        priority: 'high'
    },
    {
        id:3,
        text: 'feed the cat',
        priority: 'low'
    },
    {
        id:4,
        text: 'put out fire in the kitchen',
        priority: 'very high'
    }
];
// so map will call this function one time and pass each object through the function and we return
//  the text in a new array.
const todoText = todos.map(function(todo){
    return todo.text;
})

// the problem here is that an <a> tag is a node list element not an array. so we can't use fancy
// array methods on it but we can turn the node list to an array using Array.from().
const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a){
    return a.href;
// could also do return a.getAttribute('href')
})

// lets write our own version of map
// define your function you can call it whatever you want
// write two perameters it needs to accept an array as the first argument
// and a callback function as the second. then you want to make a new empty array,
// loop over the array that was passed in and call the callback function once per item in the array.
// take the return value and push it onto the array and return that array at the very end

function myMap(arr, callback){
    let newArr= [];
    for(let i = 0; i < arr.length; i++){
        const val = callback(arr[i], i, arr);
        newArr.push(val);
    }
    return newArr;
}
// above is a function that operates the same as the callback array method .map(function(){});
const priorityMap = myMap(todos, function(todo){
    return todo.priority;
})
// in the example below we are taking the index and using it because we have access to it when we passed
// it in to the callback when we defined the function myMap.

const repeatedStrings = myMap(['a','b','c','d','e'], function(str, idx){
    return str.repeat(idx);
})

// next is the callback function .filter(function(value, index, array){return})
let letters = ["a", "b", "c", "b", "c"];
// we have an array of letters and we are calling our function which we are returning
// wether the value that is passed in is true. so only 'b' would be included because its true(value === b)
letters.filter(function(value, index, array){
  return value === "b";
});
// console shows ["b", "b"]
// above is simple example showing how filter works.
// filter will create a new array where we can filter based of a condition
// we can select certain elements out of an array instead of all of them.
const words = [
    'senpai',
    'sensei',
    'gambarre',
    'idatakimas',
    'kawaii',
    'manga',
    'arigato',
    'tsktsk'
]

const mywords = words.filter(function(word){
    return word.length >= 6;
})
// above code is to filter through words that are greater than or equal to the index of 6
 const coolWords = words.filter(function(s){
    return s[0] === 's' || s[0] === 'g';
 })
// above is code to filter out words that dont start with 's' or 'g'.

// so first we iterate using a for of loop and for each character we are going to call isVowel of char
// and if this ever returns true we know that this word contains a vowel. so then if isVowel is true we return false
const containsVowel = function(word){
    for(let char of word){
        if(isVowel(char)) return true;
    }
    return false;
}
// to check if something is a vowel we would do a,e,i,o,u dot index of char not equal to negative one.
// because if you go to the console and return aeiou u get back a 1 so setting it to not equal one will
// give u a true or false value instead of a number.
const isVowel = function(char){
    return 'aeiou'.indexOf(char) != -1;
}

const containVowels = words.filter(containsVowel);
const noVowels = words.filter(function(word){
    return !containsVowel(word);
});
// we can pass containsVowel directly to words.filter because containsVowel is a boolean method
// which means it returns true or false. So filter will pass in a word, one at a time, to containsVowel
// containsVowel returns true or false that filters the words containing vowels out the array and 
// returns only the words containing no vowels.

// we are selecting all items on the todo list that have a check in the checkbox
const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
// here we turn allCheckboxes froma node list to an array with the method Array.from()
// then we use the filter array method to filter through the array and return only the boxes that 
// have been checked.
const checked = Array.from(allCheckBoxes).filter(function(box){
    return box.checked;
})

// so here we have our array of the checked boxes then for each one
// we are creating a new array off of those three checked items
// where we access the parent element, which is an <li> and get the innerText
// from that parent and we return that and map will create a new array with whatever we return.
const completedItems = checked.map(function(checkbox){
    return checkbox.parentElement.innerText;
})

// here we combine the array method tools map and filter together to help extract
// pieces of info and turn it into an array.
function extractCompletedTodos(){
    const allCheckBoxes = document.querySelectorAll('input[type="checkbox"]');
   return Array.from(allCheckBoxes).filter(function(box){
        return box.checked;
    })
    .map(function(checkbox){
        return checkbox.parentElement.innerText;
    });    
}
// this is a function called myFilter which works the same way as the built in method .filter
// so first we make a function give it any name i chose myFilter then we pass in an array and callback
// then inside our function we make and empty array to put the filtered values into
// then we use a for loop to loop through the array and call a callback function if returned true if not
// nothing happens
function myFilter(array, callback){
    const filteredArray = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i], i, array)){
            filteredArray.push(array[i])
        }
    }
    return filteredArray
}

const shorties = myFilter(words, function(word){
    return word.length <= 10;
})

const everyOtherWord = myFilter(words, function(word, i){
    return i % 2 === 0;
})
// quiz answer 1
function doubleValues(arr) { 
    let newArr = [];
    arr.forEach(function(num){
    newArr.push(num * 2);
});
    return newArr;
}
// quiz answer 2
function onlyEvenValues(arr){
   let evenNums = [];
   arr.forEach(function(num){
    if(!(num % 2)){
        evenNums.push(num)
    }
   })
   return evenNums;
}
// quiz answer 3
// Write a function called showFirstAndLast which accepts an array of strings 
// and returns a new array with only the first and last character of each string.
function showFirstAndLast(arr){
    let newArr = [];
        arr.map(function(letter){
            newArr.push(letter[0],letter.charAt(letter.length-1))
        })
        return newArr;
    }
    
// Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and 
// returns the array passed to the function with the new key and value added for each object   
function addKeyAndValue(arr, key, val){
    arr.map(function(obj){
        obj[key] = val;
    })
    return arr;
}
// Write a function called vowelCount which accepts a string 
// and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should count.
function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}
// Write a function called doubleValuesWithMap which accepts an array 
// and returns a new array with all the values in the array passed to the function doubled
function doubleValuesWithMap(arr){
    let numbers = [];
    arr.map(function(num){
        numbers.push(num * num)
    }) 
    return numbers;
}
// Write a function called valTimesIndex which accepts an array and 
// returns a new array with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr){
    let newArr = [];
   arr.map(function(val, index){
    newArr.push(val * index);
   })
   return newArr;
}
// Write a function called extractKey which accepts an array of objects 
// and some key and returns a new array with the value of that key in each object.
function extractKey(arr, key){
    return arr.map(function(obj){
       return obj[key]
    });
}
// Write a function called extractFullName which accepts an array of objects 
// and returns a new array with the value of the key with a name of “first” 
// and the value of a key with the name of “last” in each object, concatenated together with a space.
function extractFullName(arr){
    return arr.map(function(val){
        return val.first + " " + val.last;
    })
}
// Write a function called filterByValue which accepts an array of objects 
// and a key and returns a new array with all the objects that contain that key.
function filterByValue(arr, key){
    return arr.filter(function(val){
      return val[key] !== undefined;
    })
}
// Write a function called find which accepts an array and a value and returns the first element 
// in the array that has the same value as the second parameter or undefined 
// if the value is not found in the array.
function find(arr, key){
    return arr.filter(function(val){
        return val === key;
    });
}
// Write a function called findInObj which accepts an array of objects, a key, 
// and some value to search for and returns the first found value in the array.
function findInObj(arr, key){
    return arr.filter(function(val){
        return val[key] === true;
      })
}
// Write a function called removeVowels which accepts a string 
// and returns a new string with all of the vowels (both uppercased and lowercased) removed. 
// Every character in the new string should be lowercased.
function removeVowels(str){
   const vowels = 'aeiou';
   return str.toLowerCase().split('').filter(function(val){
    return vowels.indexOf(val) === -1
   })
   .join("");
}
// Write a function called doubleOddNumbers which accepts an array and 
// returns a new array with all of the odd numbers doubled 
// (HINT - you can use map and fitler to double and then filter the odd numbers).
function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !==0;
    }).map(function(val){
        return val * 2;
    });
    
}

