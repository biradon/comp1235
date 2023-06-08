"use strict";

// Function 1 

// let radius = 9; 
// let finalResult1 = circle(radius); 
// console.log(finalResult1); 

// function circle(radius) 
// { 
//     let areaResult = area(radius); 
//     let perimeterReuslt = perimeter(radius); 
//     return {areaResult, perimeterReuslt} 
// }; 

// function area(radius) 
// { 
//     // Formula to calculate area radius^2 * pi
//     let areaResult = Math.pow(radius,2) * Math.PI; 
//     return areaResult.toFixed(2); 
// } 

// function perimeter() 
// { 
//     // Formula to calculate perimeter 2 * pi * radius
//     let perimeterResult = 2 * Math.PI * radius; 
//     return perimeterResult.toFixed(2); 
// } 

 

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


