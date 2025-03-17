"use strict";
// partial <type >
// required <type >
//readonly <type >
//records <keys , type >
// pick <type , keys >
//omit <type , keys >
// exclude <type , excludeUnion >
// extract <type , union>
//notNullAble <type >
// parameters<types >
// contructorParameters<type >
// returnType <type>
// instanceType <type >
// parameters<types > -- used for extract the type of parameters 
const myFunc = (a, b) => {
    return a + b;
};
// contructorParameters<type > // extract class contructor paramters 
class num {
    constructor(a) {
        this.a = a;
    }
}
// returnType <type>
const myFunc2 = (a, b) => {
    return a + b;
};
// instanceType <type >
class num2 {
    constructor(a) {
        this.a = a;
    }
}
const tester = {
    a: 23, // it only allow number because we define numbers 
};
