// create object liteeral called restaurant:
//     name, address, employees
//     addEmployee
//     getNumEmployees

let restaurant = {
    name: "Bob",
    address: "1 Main Street",
    employees: [],
    addEmployee: function (name, age) {
        this.employees.push({"name": name, "age": age})
        console.log(name,age)
    },
    getNumberOfemployees: function() {
        return this.employees.length
    }
};

console.log(restaurant.name);
console.log(restaurant.address);
restaurant.addEmployee("Ben", 20);
restaurant.addEmployee("Mary", 21);
console.log(restaurant.getNumberOfemployees()); // 2
