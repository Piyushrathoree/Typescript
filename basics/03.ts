// classes
//access modifiers

class player {
    constructor(
        public height: number,
        private weight: number,
        protected age?: number
    ) {
        // the protected variable can be access in class and its subclass
        // in js swe don't need to assign value directly to the constructor because it assigns them automatically  but we need to assign it properly using access modifiers
    }

    showDetails = (): number => {
        return this.weight;
    };
}

const abhi = new player(5.1, 60, 20);
console.log(abhi.height); //  now it will return properly
// but for the weight which is private we can't directly access it because it is private and only can be used under the class so we intruduce a method check line 14

class player2 extends player {
    constructor(
        public special: boolean,
        weight: number,
        age: number,
        height: number
    ) {
        super(height, weight, age); // super is used to get the constructor value of parent class
        // special has already assigned to this.special
    }
    getProtectedValue = () => this.age; // here we access the protected variable but not the private variable
}

const newPlayer = new player2(true, 56, 20, 5.9);
console.log(newPlayer.getProtectedValue()); //  now this is how i can get protected too

class fruit {
    constructor(public name: string, private price: number) {}
    //getter 
    get getPrice(): number {
        return this.price;
    }
    //setter
    set changePrice(oldPrice:number){
        this.price=oldPrice
    }
}

const fal=new fruit('mango', 100)
console.log(fal.getPrice);
fal.changePrice=120
console.log(fal.getPrice);



 