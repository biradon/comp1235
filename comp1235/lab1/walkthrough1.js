//Get a popup box to show up on the screen
//alert("JS successfully linked externally");

//Use the newest keyword for creating a changable variable
//Just a decoration - so we se it prints as undefined
let name;
console.log("The name is: " + name);

// age variable has not even been delcared (or defined) os it will give a reference letter
// console.log("The age is: " + age);

// Hoisting (ie. declaration pulled up to the top of the code) does not happens here because it is a let key word
// console.log(answer);
// let answer = 2;

// Hoisting (ie. declaration pulled up to the top of the code) happens here because we use var
console.log("answer2 is: " + answer2);
var answer2 = 2;

// temp has been declared and defined so it will just output the value as we'd expect
let temp = "bob";
console.log("The value in the temp variable is: " + temp);

console.log(hair_color);
console.log(shirt_color);
let hair_color = "Brown";
var shirt_color = "Blue";
