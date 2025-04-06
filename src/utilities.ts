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


// partial<type>  ---  it make any type of props options
type obj2 = {
    name :string,
    email:string
}
// type obj2Copy= { now for creating this we use partial <type >
//     name?:string,
//     email?:string
// }   

type obj2copy = Partial<obj2>


// Required <type > -- it make types required from optional 

type USER = {
    name?: string;
    email?: string;
};
type USER2= Required <USER>


// //readonly <type > 
type User2 = Readonly<obj2 > // we can't changes these values 

////records <keys , type > -- use for creating similar objects and make some add ons aswell 
type User3 = Record<'name'|'email'|'gender',string> // directly create any type aliases

// // pick <type , keys > --use to make a type with using some props from another 
type user2 = {
    name:string,
    age:number,
    readonly id :string,
    state:string,
    number:number,
    email:string
}

type User4= Pick<user2 , 'name'|'id'>

// //omit <type , keys > -- opposite of pick removes any element and copy the whole rest obj
type User5 = Omit<user2 ,'email'>

//// exclude <type , excludeUnion >
type myUnion = string | number |boolean
type random = Exclude<myUnion , boolean> // now it will become not boolean
// extract <type , union>
type random2 = Extract<myUnion , boolean> // and now it will become only boolean


// nonNullable <type>
type random3 = NonNullable<myUnion> // it can't be null or undefined now



// parameters<types > -- used for extract the type of parameters 
const myFunc = (a:number , b:number)=>{
    return a +b
}
type Random = Parameters< typeof myFunc>

// contructorParameters<type > // extract class contructor paramters 
class num {
    constructor(public a:number ){

    }
}
type random4 = ConstructorParameters<typeof num>

// returnType <type>

const myFunc2 = (a: number, b: number) => {
    return a + b;
};
type random5 = ReturnType<typeof myFunc2>

// instanceType <type >

class num2 {
    constructor(public a: number) {}
}
type Random2 = InstanceType<typeof num2>
const tester: Random2 ={
    a:23, // it only allow number because we define numbers 
}