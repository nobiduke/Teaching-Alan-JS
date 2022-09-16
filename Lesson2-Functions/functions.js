
function aFunction(param){ // normal function declaration
    param += 1
}

const doThis = (param) => {console.log("This works as well", param)} // this is the shorthand

// () => {} creats a function as well
// param => {} this works as well

// In this example we will use the built in array method .find()
// It takes in a function as a parameter for what you are looking for
// Using the shorthand, you can make extremely compact functions

const arr = [1, 2, 3, 7, 8, 15, 5]; // semi colons are optional

let found = arr.find(item => item <= 5);
// found == 1 because that is the first element that satisfies the constraint
let everyFound = arr.filter(item => item <= 5); // for returning multiple values
// everyFound = [1, 2, 3, 5]
