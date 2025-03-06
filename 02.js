"use strict";
// type inference
// understanding type inference
// type annotation
// type Inference -  not defining anything ts will know the type itself
// type annotation
let b;
function solve(a) { } // type annotations in the parameters
function getData(obj) {
    return obj;
}
function getData2(obj) {
    return obj;
}
function getData3(obj) {
    return obj;
}
function user(user) {
    console.log(user.email, user.name);
}
let a;
let a2 = 12;
// arrays
const arr = [1, 2, 3, 4, 5, 6]; // just put a dot and we can get the method which can be used on numbers array
//or we can write it like
const arr2 = ["raman", "suman"]; //and similarly here we can see string method
const newFunc = (n, m, l) => {
    if (typeof m === "number" && typeof l === "number")
        return n * m * l; // we can't directly do this because m and l can be other data type too
    //and if the conditions are not met we will return n which is number type because we already defined it
    return n;
};
const func3 = (...m) => {
    return m;
};
const getProductData = (product) => {
    console.log(product);
};
const productOne = {
    name: "macbook",
    price: 99999,
    id: "abc123"
};
getProductData(productOne);
