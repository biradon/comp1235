class Human {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    isAdult() {
        return this.age >= 18;
    }
}

let ben = new Human("Ben", 18);
console.log(ben.isAdult())
console.log(ben.name);

export default Human