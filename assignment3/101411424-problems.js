"use strict";

// Function 1 

let radius = 9; 
let finalResult1 = circle(radius); 
console.log(finalResult1); 

function circle(radius) 
{ 
    let areaResult = area(radius); 
    let perimeterReuslt = perimeter(radius); 
    return {areaResult, perimeterReuslt} 
}; 

function area(radius) 
{ 
    // Formula to calculate area radius^2 * pi
    let areaResult = Math.pow(radius,2) * Math.PI; 
    return areaResult.toFixed(2); 
} 

function perimeter() 
{ 
    // Formula to calculate perimeter 2 * pi * radius
    let perimeterResult = 2 * Math.PI * radius; 
    return perimeterResult.toFixed(2); 
} 

 

// Function 2 
let days = ([10,10,10,0,8,0,0]); 

// Create the arrays to assign new value to calculate
let days1 = [];

// Calculate the salary
let calculateSalary = (days) =>
{ 
    let salary = 0;
    for (let i = 0; i < days.length; i++) 
    { 
        // Check if the day is the weekend or not
        if (days[i] == days[days.length - 1] || days[i] ==  days[days.length - 2])
        {
            // If the weekend double salary
            salary = days[i] * 2;
            // Add value inside created array
            days1[i] = salary;
        } 
        // Check if hours is normal
        else if (days[i] <= 8) 
        { 
            salary = days[i] * 10; 
            // Add value inside created array
            days1[i] = salary;
        } 
        // Check if hours is overtime
        else if (days[i] > 8) 
        { 
            // 8 hours still calculate in mornal, but the overtime hours will be multiple with 15
            salary = 8 * 10 + (days[i] - 8) * 15; 
            // Add value inside created array
            days1[i] = salary;
        } 
    } 

    // Using reduce function to sum all of the value in new array
    const finalResult2 = days1.reduce((monday, sunday) => {
        return monday + sunday
    })
    return finalResult2
} 


let finalResult2 = calculateSalary(days)
console.log(finalResult2);



// Function 3
let example1 = ([1, 2, 3, 4, 5]);
let example2 = ([-3, 0, 8, -6]);
let example3 = ([15, 16, -100, 50]);

// Create temporary array to store the value
let newArray = [];


let indexMultipler = (index) => {
    for (let i = 0; i < index.length; i++)
    {
        // Assign for the new array to multiple value with position
        newArray[i] = index[i] * i;
    }
    // Sum all of the value in array
    const finalResult3 = newArray.reduce((begin, end) => {
        return begin + end
    })
    return finalResult3;
}

let finalResult3 = indexMultipler(example1)
console.log(finalResult3);

// Function 4
let JSON1 = [{
    id: 1, 
    u: "batman"
}];
let JSON2 = [{
    id: 11, 
    u: "spidey"
}];

let JSON3 = [
    {id: 1, u: "batman"}, 
    {id: 11, u: "spidey"}
];

let pattern = /^[m-z]/i;


let filteredJSON = (JSON0) => {
    if (JSON0.id > 10 && pattern.test(JSON0.u))
    {
        return true;
    }
    return false;
}

const finalResult4 = JSON3.filter(filteredJSON);
console.log(finalResult4);


// Function 5
let sample1 = ([2,3,4,5]);
let nsample1 = 2;

let sample2 = ([2,3,4,5,6]);
let nsample2 = 2;

let sample3 = ([2,3,4,5,6,7]);
let nsample3 = 3;

let sample4 = ([2,3,4,5]);
let nsample4 = 1;

let sample5 = ([2,3,4,5,6,7]);
let nsample5 = 7;

let devidedNumber = 0;

let finalResult5 = [];

const breakAway = function(sample, nsample) {
    devidedNumber = Math.ceil(sample.length / nsample);
    for (let i = 0; i < devidedNumber; i++)
    {
        finalResult5[i] = sample.splice(0, nsample);
    }
    return finalResult5;
}

console.log(breakAway(sample4, nsample4));