// // Function 1: Find the Number of Digits in an Argument

// let userInput1 = prompt("Question 1 - Please input here: ");
// let result1 = _findNumOfDigits(userInput1);
// console.log("The result of question 1: " + result1);


// function _findNumOfDigits(argument1){
//     argument1 = argument1.length;
//     return argument1
// }

// // Function 2: Surplus Function\

// let userInput2 = prompt("Question 2 - Please input here: ");
// while (!isNaN(userInput2)){
//     alert("Please input string")
//     userInput2 = prompt("Question 2 - Please input here: ");
// }
// let result2 = _surplus(userInput2);


// function _surplus(argument2){
//     inner(argument2);
// }

// function inner(argument2a) {
//     console.log("The result of question 2: " + argument2a);
//     return argument2a;
// }


// // Function 3: Strings with Numbers

// let numInStr1 = ["1a", "a", "2b", "b"];
// let numInStr2 = ["abc", "abc10"];
// let numInStr3 = ["abc", "ab10c", "a10bc", "bcd"];
// let numInStr4 = ["this is a test", "test1"];

// _strNumbers(numInStr4);

// function _strNumbers(array) 
// {
//     // Access the array
//     for (let i = 0; i < array.length; i++)
//     {
//         // Check each character inside the value of array
//         for (let k = 0; k < array[i].length; k++)
//         {
//             // Check if the value have the number or not
//             // And Ignore the space
//             if (!isNaN(array[i].charAt(k))  && array[i].charAt(k) != " " )
//             {
//                 console.log(array[i]);
//             }
//         }
//     }
// }

// // Function 4: Class Grading

// let grading1 = ['50', '51', '80', '45'];
// let grading2 = ['35', '45', '25', '10', '6', '33'];
// let grading3 = ['80','90'];

// // Create the array to store the result
// let finalResult = [];

// // Variable use inside the array
// let sum = 0;
// let average = 0;
// let passGrade = 0;
// let failGrade = 0;

// _determineClassGrading(grading1);

// function _determineClassGrading(grading)
// {
//     // Access the grading array
//     for (let i = 0; i < grading.length; i++)
//     {
//         // Define passgrade and failgrade
//         // If grade >= is passgrade, otherwise is failgrade
//         if (grading[i] >= 50)
//         {
//             passGrade += 1;
//         } else 
//         {
//             failGrade += 1;
//         }
//         // Convert string to int to calculate sum
//         sum += parseInt(grading[i]);
//     }

//     // Calculate average and round to 1 deciman
//     average = parseFloat(sum / grading.length).toFixed(1);

//     // Access the array and pass the result inside
//     finalResult[0] = passGrade;
//     finalResult[1] = failGrade;
//     finalResult[2] = average;

//     // Print the value inside array
//     for (let k = 0; k < 3; k++)
//     {
//         console.log(finalResult[k]);
//     }
// }

// // Function 5: Move Capital Letters

// let example1 = "hApPy";
// let example2 = "moveMENT";
// let example3 = "shOrtCAKE";

// // Temporary variable to swap location
// var temp = 'a';

// const _moveCapitalLetters = (example) => {
//     // Using split method to convert string => array
//     let character = example.split('');

//     // Access the array to swap position of 2 value in the array
//     for (let i = 0; i < character.length; i++)
//     {
//         for (let k = i+1; k < character.length; k++)
//         {
//             // Condition to check if the character is a uppercase or not
//             if (character[k] == character[k].toUpperCase())
//             {
//                 // Swap the position of 2 characters
//                 temp = character[k];
//                 character[k] = character[i];
//                 character[i] = temp;
//                 break;
//             }
//         }
//     }
//     // Convert from array to string without commas
//     example = character.join("");
//     return example;
// }

// console.log("This is the result: " + _moveCapitalLetters(example2));
