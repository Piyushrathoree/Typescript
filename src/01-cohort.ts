
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

function areYouAdult(age: number):void {
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



const greet = (name :string )=>console.log(`hello ${name}` ) // not allowed to work with 'any' type 

greet('piyush')


