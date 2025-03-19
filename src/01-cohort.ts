function showOutput(n: number) {
    console.log(n);
}
let n: number = 10;
showOutput(n);

// showing name
function showName(name: string) {
    console.log("hello " + name);
}

let str: string = "piyush";
showName(str);

//sum

function number1(n: number) {
    return n;
}

function number2(n: number) {
    return n;
}
function sum(num1: number, num2: number) {
    console.log(num1 + num2);
}

sum(number1(10), number2(20));

//  return true if you are 18+

function areYouAdult(age: number): void {
    if (age < 18) {
        console.log(false);
    } else {
        console.log(true);
    }
}
areYouAdult(19);

// create a function taking another function as input and returning the result after 1 second

function returnNum(callback: (n: number) => void): void {
    setTimeout(() => {
        callback(n); // Log 10 after 1 second
    }, 2000);
}

returnNum((n) => console.log(n));

const greet = (name: string) => console.log(`hello ${name}`); // not allowed to work with 'any' type

greet("piyush");

// abstract classes

abstract class User {
    constructor(public name: string) {}
    abstract greet(): string;
    hello (){
        console.log('hello devs');
        
    }
}

class employee extends User {
    constructor(public name: string) {
        super(name);
    }
    greet(): string {
        return "hey there";
    }
}

const e = new employee('Piyush')
e.hello();
console.log(e.greet());

 //  the interfaces and abstract classes let us do almost similar kind of work but there are some differences like 'we can define some default functions as well in abstract classes ' but this can't be done with the interfaces 
// and the interface can also be implemented as well as extends but the abstract class can only be extends 
