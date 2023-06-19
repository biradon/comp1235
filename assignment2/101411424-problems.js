"use strict";

// Function 1: Find the Number of Digits in an Argument

function _findNumOfDigits(argument1){
    var num = '' + argument1;
    let count = 0;
    for (let i = 0; i < num.length; i++)
    {
        if (!isNaN(num[i]))
        {
            count += 1;
        }
    }
    return count
}


// Function 2: Surplus Function

function _surplus(argument2){
    return inner(argument2);
}

function inner(argument2a) {
    return argument2a;
}


// Function 3: Strings with Numbers

let finalResult3 = [];

function _strNumbers(array) 
{
    // Access the array
    for (let i = 0; i < array.length; i++)
    {
        // Check each character inside the value of array
        for (let k = 0; k < array[i].length; k++)
        {
            // Check if the value have the number or not
            // And Ignore the space
            if (!isNaN(array[i].charAt(k))  && array[i].charAt(k) != " " )
            {
                finalResult3.push(array[i]);
                break;
            } 
        }
    }
    return finalResult3;
}


// Function 4: Class Grading

// Create the array to store the result
let finalResult4 = [];

// Variable use inside the array
let sum = 0;
let average = 0;
let passGrade = 0;
let failGrade = 0;

function _determineClassGrading(grading)
{
    // Access the grading array
    for (let i = 0; i < grading.length; i++)
    {
        // Define passgrade and failgrade
        // If grade >= is passgrade, otherwise is failgrade
        if (grading[i] >= 50)
        {
            passGrade += 1;
        } else 
        {
            failGrade += 1;
        }
        // Convert string to int to calculate sum
        sum += grading[i];
    }

    // Calculate average and round to 1 deciman
    average = parseFloat((sum / grading.length).toFixed(1));

    // Access the array and pass the result inside
    finalResult4[0] = passGrade;
    finalResult4[1] = failGrade;
    finalResult4[2] = average;
    return finalResult4
}


// Function 5: Move Capital Letters
const _moveCapitalLetters = (example) => {
    // Find all the uppercase character
    let upper = example.replace(/[^A-Z]*/g, "");

    // Find all the lowercase character
    let lower = example.replace(/[^a-z]*/g, "");

    // Replace the uppercase character location -> lowercase character location
    let result = upper.concat(lower);
    return result
}

