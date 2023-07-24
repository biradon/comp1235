class Mammal {
    name: string;
    age: number;
    height: number | string;
    private _weight: [string, number];
    furColor: string[];
    legs: number;

    constructor(
        name: string, 
        age: number, 
        height: number | string) {
    }
    set weight(value: [string | number]) {
        if(value[0] === 'fat'){
            console.error("That word is not allow here!")
        } else {
            this.weight = value 
        }

    }
    get weight(): [string, number]{
        return this._weight
    }
}

const flipper = new Mammal("Dolphine", 28, "short")
console.log(flipper.name, flipper.age, flipper.height)

flipper.weight = ["slim", 100]
console.log(flipper.weight);

flipper.furColor.push("Black", "Brown", "Gray")
console.log(flipper.furColor)