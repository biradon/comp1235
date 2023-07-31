"use strict";

// Function 1
// async function getRandomNumber() {
//     return new Promise(function(resolve) {
//         setTimeout(function () {
//             // Generate random number from 1 to 5
//             const randomeNumer = Math.floor((Math.random() * 5) + 1);
//             resolve(randomeNumer);
//         }, 500)
//     });
// }

// Function 2
// async function getCityData(city) {
//         const URL = `https://geocode.xyz/${city}?json=1`
//         try {
//                 const response = await fetch(URL);
//                 const data = await response.json();
//                 return data;
//         } 
//         catch (error)
//         {
//                 return error;
//         }
// }

  
//Function 3
// async function fetchProducts(id) {
//         const URL = `https://dummyjson.com/products/${id}`
//         try {
//                 const response = await fetch(URL);
//                 const data = await response.json()
//                 console.log(data.title)
//                 if (!response.ok) {
//                         const errorMessage = "Could not get products: Error: HTTP error: 404"
//                         return errorMessage
//                 }
//                 return data.title;
//         }
//         catch (error)
//         {
//                 console.log(error.message)
//                 throw "Could not get products: " + error.message;
//         }
// }

// Function 4
// async function searchStorePrice(product_name) {
//         const URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
//         try {
//           const response = await fetch(URL);
//           if (!response.ok) {
//             throw new Error(`Could not find a product: ${product_name}`);
//           }
//           const data = await response.json();
//           const product = data.find(item => item.name === product_name);
//           if (product) {
//             console.log(product);
//             return product.price;
//           } else {
//             throw new Error(`Could not find a product: ${product_name}`);
//           }
//         } catch (error) {
//           console.error(error);
//           throw error;
//         }
//       }

// Function 5
async function getStarWarsCharacters() {
        const URL = "https://swapi.dev/api/people/";
        const response = await fetch(URL);
        const data = await response.json();
        const charactersCollection = {};
      
        data.results.forEach((character) => {
          charactersCollection[character.name] = character.url;
        });
        return { characters: charactersCollection };
      }

async function test() {
        const result = await getStarWarsCharacters()
        const final = result.characters["Luke Skywalker"]
        console.log(final)
        return final;
}

test();



