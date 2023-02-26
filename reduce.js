// reduce takes an array of elements and it allows us to reduce them down to a single value,
const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

let total = 0;
for(let num of nums){
    total += num;
}
console.log(total);

let min = nums[0];
for(let i = 0; i < nums.length; i++){
    if(nums[i] < min) min = nums[i];
}
console.log(min);

// what we are doing here with the for of and if and else statements are we use the for of to loop over
// each character in the string and then w as the char count to charfreq so the first L we encounter
// is there and l as a key in the the object of charFreq, well in the beginning we dont have notrhing
// there so we set the character frequency for L to be one, so when the loop encounters another
// L it will as += 1 onto the charfreqconst str = 'lollapalooza';
const charFreq = {};
for(let char of nums){
    if(charFreq[char]){
        charFreq[char] += 1;
    }else{
        charFreq[char] = 1;
    }
};
// more examples of using reduce.
// the way reduce works is it accepts an callback and also an optional second parameter,
// it iterates through the aray that you're reducing, it runs that callback on each value in the array
// now your callback has two parameters the first is called the accumulator, accumulator is the value
// you are reducing down to, its the thing your trying to figure out like min, max, total, average
// whatever your trying to get thats the first parameter, the second parameter will be each element in
// the array, each value, then whatever returns froma callback becomes the new accumulator value

const words = ['hello', 'I', 'love', 'you'];
const result = words.reduce(function(accum, nextWord){
    return accum + nextWord;
})
// the above code returns devConsole(hello I/ helloI love/ helloIlove you/)
// so the accumulator starts as hello and then we concatinate the  accum with the nextWord which
// is I so then the accummulator runs again but this time is helloI and the nextWord is love
// so now the new accumulator value is helloIlove and the nextWord value is you.

// next lets try some reduce on some numbers.
const midtermScores = [70, 88, 93, 64,62, 56 ];
const minScore = midtermScores.reduce(function(min, nextScore){
// min is the first parameter which is the accumulator and the next one represents each value(in
// this case the midtermScores) and runs the callback for each number
    if(nextScore < min){
        return nextScore;
    }
    return min;
})
// this code can also be cleaned up like this
const midtermLowestScore = midtermScores.reduce(function(min, nextScore){
// here we use a ternary operator to return next score less that min question mark, means if this is
// true, this is a boolean expression, so if this is true, next score is les than min we will return
//  next score, otherwise we return min.
    return nextScore < min ? nextScore : min;
})
const highestScore = midtermScores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore : max;
})
// we can also optionally pass in a value as the scond argument so for example below
let evens = [2,4,6,8,10]
const timesTen = evens.reduce(function(accumulator, nextValue){
    return accumulator + nextValue;
}, 10);
// the second argument 10 makes the accumulator start with 10 + 2 as the accum 
// so you would get 12,16,22,30,40 if you console log timesTen
const finalsScores = [92, 93, 76, 77, 78, 59, 61];
const minFinalScore = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
});
const maxFinalScore = finalsScores.reduce(function(max, nextScore){
    return nextScore > max ? nextScore : max;
});
// so below we are finding the lowest grade between both midterm and finals
const lowestOverall = finalsScores.reduce(function(min, nextScore){
    return nextScore < min ? nextScore : min;
}, midtermLowestScore);
