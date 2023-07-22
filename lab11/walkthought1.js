// add method to Number object:
//             numberofDigits, isEven
//             is GreaterThan(another number)


Number.prototype.numberofDigits = () => {
    return this.valueOf().toString().length;
};

Number.prototype.isEven = function () {
    return this.valueOf() % 2 === 0;
};

Number.prototype.isGreaterThan = function (otherValue) {
    return this.valueOf() > otherValue;
}




let num1 = 123;
console.log(num1.numberofDigits()) // 3
console.log(num1.isEven()) // false
console.log(num1.isGreaterThan(200)) //false
console.log(num1.isGreaterThan(20)) // true