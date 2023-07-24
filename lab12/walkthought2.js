// create a module

const fav_food = "pizza"

// function that will a return a string
async function returnValue() {
    // return a promise object
    return Promise.resolve("Coming Right Up!")  
}

// const e1 = returnValue();
const e1 = returnValue()
    .then( res => console.log(res))
    .catch(e => console.log("Error!"))

console.log("Hello")