function letsGetAPet(species) {
    const promise = Promise;
    if(species.toLowerCase() === 'dog') {
        return promise.reject("No Dog Allowed")
    }
    return promise.resolve("All other pet welcomed")
}

let result = letsGetAPet("snake")
    .then(result => console.log(result))
    .catch(error => console.log(error))
