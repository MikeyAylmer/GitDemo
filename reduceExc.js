// Write a function called extractValue which accepts 
// an array of objects and a key and returns a new array with the value of each object at the key.
function extractValue(arr, key){
   return arr.reduce(function(accum, name){
        accum.push(name[key]);
        return accum;
    },[]);
}

// Write a function called vowelCount which accepts a string and returns an object 
// with the keys as the vowel and the values as the number of times the vowel appears in the string. 
// This function should be case insensitive so a lowercase letter and uppercase letter should count
function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc, char){
        let lowerCased = char.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}

// Write a function called addKeyAndValue which accepts an array of objects 
// and returns the array of objects passed to it with each object now including the key and value passed to the function.
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, indx){
        acc[indx][key] = value;
        return acc;
    },arr)
}
// partition function
function partition(arr, callback){
    return arr.reduce(function(acc, next){
        if(callback(next)){
            acc[0].push(next)
        }else{
            acc[1].push(next);
        }
        return acc;
    }, [[],[]])
}