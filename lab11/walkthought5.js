import {Human} from './walkthought4'


let benny = new Human("Benny", 20);

class SuperHero extends Human {
    constructor(name, age, superHeroName, superPower) {
        super(name, age);
        this.superHeroName = superHeroName;
        this.superPower = superPower;
    }
}

console.log(benny);