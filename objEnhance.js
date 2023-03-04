// object property shorthand
// function makePerson(first, last, age){
//     return{
//         first: first,
//         last: last,
//         age: age,
//         isAlive : true
//     }
// }
// if you want to create a new object and you have properties you want to set in that object base
// off an exsisting varaible and u want to use the name of that varable like first,last,age as a key in the obj.
function makePerson(first, last, age){
    return{
        first,
        last,
        age,
        isAlive : true
    }
}
// it allows us to quickly write shorthand propert names, when we want to use the name of a variable
// as the key name and the value of the variable as the value.

// the next example will show us how to add methods to object in a easier way.
// a method is just a function you are storing as a property in a object.

// const mathStuff = {
//     x : 200,
//     add : function(a,b){
//         return a + b;
//     },
//     square : function(a){
//         return a * a;
//     }
// };
// below we will rewrite using the shorthand properties.

const mathStuff = {
    x : 200,
    add(a,b){
        return a + b
    },
    square(a){
        return a * a
    }
};
// pro tip - arrow functions are not named so they wouldnt work with the above code mathStuff.

// next we will learn about computed propert names
// computer property names is a concise way of adding a key to the object, where the key name is a variable

const colors = {
    periwinkle: '9c88ff',
    '9c88ff' : 'periwinkle'
};
// above ^^ is a object that we can look up a color based off the name or the hex code.
// below is the old way we would write a function for makeColor
function makeColor(name, hex){
    const color = {};
// the square brackets will evaluate the value, the variable which is name and get back a string 'bright ube'
    color[name] = hex;
    color[hex] = name;
    return color;
}
// then in the console we input this and get back the hex as the color
makeColor('bright ube', 'D6A2E8') // { bright ube: "D6A2E8", "D6A2E8": "bright ube" }

// next we will use computed property names & arrow functions to write the same function in a shorter code.
const colorMaker = (name, hex) => ({ [name] : hex, [hex] : name});
// we use the [] to set name as the key for hex and hex as the key for name.

// answer 1
const createInstructor = (firstName, lastName) => ({firstName, lastName });

// answer 2
let favoriteNumber = 42;
let professor = {
    userName : 'colt',
    [favoriteNumber] : 'that is my favorite'
};

// answer 3
let instructor = {
    firstName : 'Colt',
    sayHi(){
        return "Hi!";
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
};

// answer 4
function createAnimal(species, verb, noise){
    return {
        species,
        [verb] (){
            return noise;
        }
    }
} 