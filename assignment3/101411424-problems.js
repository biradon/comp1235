"use strict";

// Function 1 
function Circle(radius) {
    this.area = function () {
        return parseFloat((Math.pow(radius, 2) * Math.PI).toFixed(2));
    };
    this.perimeter = function () {
        return parseFloat((2 * Math.PI * radius).toFixed(2));
    };
};

 

// Function 2 
const calculateSalary = (days) => {
    const result = days.reduce((totalSalary, hours, dayIndex) => {
        //Normal working day
        const regularHours = Math.min(hours, 8) * 10;

        // When working overtime 
        const extraHours = hours > 8 ? (hours - 8) * 15 : 0;

        // When working during weekend
        const weekendHour = dayIndex > 4 ? (regularHours + extraHours) * 2 : 0;

        // If it's weekend, only sum weekendhour, else sum everything
        if (dayIndex > 4)
        {
            return totalSalary + weekendHour
        } else
        {
            return totalSalary + regularHours + extraHours + weekendHour;
        }
    }, 0); 
    return result;
} 


// Function 3
const indexMultiplier = (index) => {
    const calculate = index.reduce((accumulator, currentValue, index) => {
        return accumulator + (currentValue * index);
      }, 0);
      return calculate;
}

// Function 4
const filteredJSON = (JSON) => {
    // Regex to find the chacracter in range [M-Z] and ignore case-sensitive
    let pattern = /^[m-z]/i;
    
    // Filter the result, greater than 10 and with the regex above
    let result = JSON.filter(JSON => JSON.id > 10 && pattern.test(JSON.u))
    return result;
}



// Function 5
const breakAway = function(sample, nsample) {
    // Create the number to devided
    let devidedNumber = 0;

    // Create the array to store the result
    let finalResult5 = [];

    // Round the number after devided to become a real number
    devidedNumber = Math.ceil(sample.length / nsample);
    for (let i = 0; i < devidedNumber; i++)
    {
        // Separate the array
        finalResult5[i] = sample.splice(0, nsample);
    }
    return finalResult5;
}