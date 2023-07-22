// Create object constructor
//     Person 
//         name, height, weight
//         isTall
//         hasLongName

function Person(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.isTall = () => this.height > 130;
    this.hasLongName = () => this.name.length > 8;
    this.hasHealthyWeight = () => this.weight > 10;
}

let ben = new Person("Ben", 150, 100);
console.log(ben.name)
console.log(ben.isTall())