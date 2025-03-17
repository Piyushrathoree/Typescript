"use strict";
let b;
function solve(a) { }
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
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = ["raman", "suman"];
const newFunc = (n, m, l) => {
    if (typeof m === "number" && typeof l === "number")
        return n * m * l;
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
