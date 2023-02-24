// FIND iterates through an array and runs a callback on each value in the array,
// if the callback returns true at any point, return the value in the array that we're iterating over.
// so if it doesn't find that element or an element that matches your condition or your callback
// it returns undefined. the most important thing about find is it only returns the first match.
const scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0, 
    55,
    59,
    69,
    73,
    73,
    75,
    79,
    83,
    88,
    91,
    93
];

scores.find(function(num){
    return num > 75;
});

scores.find(function(num){
    return num !== 0 && num % 2 === 0
});

const evenScores = scores.filter(function(num){
    return num % 2 === 0
});
// next is examples of findIndex, which does exactly what it sounds like it iterates through an array
// runs a callback on each value in the array, if the callback returns true for any single value,
// return the index which the value is found.
const firstEven = scores.findIndex(function(num){
    return num !== 0 && num % 2 === 0
});
// so we use findIndex when indexOf wont work, indexOf is good when we want to find a specific value
// but we can't use indeOf to find and even or a odd or a number of greater than something or a string
// that contains some value we can only use indexOf when we look specifically for a number like 2 or 73
function partition(arr, pivot){
    const pivotIndex = arr.findIndex(function(el){
        return el > pivot
    });
// what we do now is create two new arrays based off the pivot index and we can use slice to do that
// we can also use splice that would mutate the array and we dont wanna do that
    const left = arr.slice(0, pivotIndex)
//so here we slice starting from 0 up until the pivotIndex
    const right = arr.slice(pivotIndex);
    return [left, right];
}
// the pivot is the value on that we want to split the array on, so if we call partition(scores, 0)
// in the console we get a pivot index of 8 which is where the first value is greater then the pivot
// which is 0 and if we count the array the first element greater then 0 is the pivot.

function myFind(arr, callback){
    for(let i = 0; i < arr.length; i++){
      if(callback(arr[i], i, arr) === true) return arr[i]
    }
}
myFind(scores, function(score){
    return score > 91
})
// i defined my function called myFindIndex and passed it in an array and a callback
function myFindIndex(arr, callback){
// i then looped through the array using a for loop
    for(let i = 0; i < arr.length; i++){
// then i ran a callback function on each value in the array and if it returns true return the index
        if(callback(arr[i], i , arr) === true) return i;
    }
// otherwise return -1
    return -1
}
myFindIndex(scores, function(score){
    return score !== 0 && score % 2 === 0
})

// Write a function called findUserByUsername which accepts an array of objects, 
// each with a key of username, and a string. The function should return the first object 
// with the key of username that matches the string passed to the function. 
// If the object is not found, return undefined
function findUserByUsername(arr, username){
    return arr.find(function(val){
        return val.username === username;
    })
}

function removeUser(arr, username){
    let idx = arr.findIndex(function(val){
        return val.username === username
    })
   if(idx === -1) return;
   return arr.splice(idx,1)[0]
}