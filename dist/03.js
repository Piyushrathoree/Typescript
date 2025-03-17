"use strict";
class player {
    constructor(height, weight, age) {
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.showDetails = () => {
            return this.weight;
        };
    }
}
const abhi = new player(5.1, 60, 20);
console.log(abhi.height);
class player2 extends player {
    constructor(special, weight, age, height) {
        super(height, weight, age);
        this.special = special;
        this.getProtectedValue = () => this.age;
    }
}
const newPlayer = new player2(true, 56, 20, 5.9);
console.log(newPlayer.getProtectedValue());
class fruit {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get getPrice() {
        return this.price;
    }
    set changePrice(oldPrice) {
        this.price = oldPrice;
    }
}
const fal = new fruit('mango', 100);
console.log(fal.getPrice);
fal.changePrice = 120;
console.log(fal.getPrice);
