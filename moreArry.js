// below are examples of the array method some / every
// some iterates through an array, then runs a callback on each value in the array.
// if the callback returns true for at least one single value, return true
// otherwise it will return false and the results of the callback will always be a boolean.
// simple example below of the some method.
// let numbers = [1,2,3];

// numbers.some(function(value, index, array){
//   return value < 3;
// });

// true

// let numbers = [1,2,3];

// numbers.some(function(value, index, array){
//   return value > 10;
// });

// false

const words = [
    'bankai',
    'tsktsk',
    'spiritbomb',
    'kamehameha',
    'zanpakto',
    'immunoelectrophoretically'
];
words.some(function(word){
    return word.length > 25;
})
words.some(function(word){
 // we use !== -1(not equal to negative one) here so we can return a word that contains 'thyroid'.
    return word.indexOf('thyroid') !== -1;
})

// every is another array method it is also a boolean but instead of checking if a single element
// passes the callback it checks to see if the callback is true for every single value in the array
// otherwise returns true.
words.every(function(word){
    return word.length > 5;
})
// here i made my own varaible and called it allStr i wrote code to return all strings in the words array.
const allStr = words.every(function(w){
    return w.includes('')
})
// below is a function called allStrings it accepts and array and the returns the every string in the array.
function allStrings(arr){
    return arr.every(function(w){
        return typeof w === 'string'
    });
}
// we are checking to see if all the checkboxes have been checked when they click the submit button
// first we select the button then we attach an event listner to the button for a click
// when someone clicks the submit button the function inside the event listner checks to see if
// ever checkbox is checked.
const btn = document.querySelector('button')
btn.addEventListener('click',function(e){
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(checkboxes).every(function(checkbox){
       return checkbox.checked;
    }); 
    if(!allChecked) alert('Please check all boxes')
});
// I built my own function called mySome it is a visual replica of how the Some method works.
function mySome(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr))return true;
    }
    return false;
}
// I built my own function called myEvery it is a visual replica of how the Every method works. 
function myEvery(arr, callback){
    for(let i = 0; i < arr.length; i ++){
        if(!callback(arr[i], i ,arr))return false 
    }
    return true;
}
// below is my answers to the Some Every Exercise

// Write a function called hasOddNumber which accepts an array 
// and returns true if the array contains at least one odd number, otherwise it returns false.
function hasOddNumber(arr){
    return arr.some(function(odd){
       return odd % 2 != 0
    })
}
// Write a function called hasAZero which accepts a number and returns true if that number 
// contains at least one zero. Otherwise, the function should return false
function hasAZero(num){
    // first we must turn the number to a string and then split the individual numbers apart 
    // so we can run the some function to find a 0 in th number. 
    return num.toString().split('').some(function(n){
        return n === '0'
    })
}
// Write a function called hasOnlyOddNumbers which accepts an array 
// and returns true if every single number in the array is odd. 
// If any of the values in the array are not odd, the function should return false.
function hasOnlyOddNumbers(arr){
    return arr.every(function(e){
        return e % 2 !== 0
    })
}
//Write a function called hasNoDuplicates which accepts an array and 
// returns true if there are no duplicate values 
// (more than one element in the array that has the same value as another). 
// If there are any duplicates, the function should return false 
function hasNoDuplicates(arr){
    return arr.every(function(e){
        return arr.indexOf(e) === arr.lastIndexOf(e) 
    })
}
// Write a function called hasCertainKey which accepts an array of objects and a key, 
// and returns true if every single object in the array contains that key. 
// Otherwise it should return false.
function hasCertainKey(arr, key){
    return arr.every(function(value){
        return key in value;
    })
}
// 
// Write a function called hasCertainValue which accepts an array of objects and a key, 
// and a value, and returns true if every single object in the array contains that value 
// for the specific key. Otherwise it should return false.
function hasCertainValue(arr, key, value){
    return arr.every(function(v){
        return v[key] === value;
    })
}