// type inference
// understanding type inference
// type annotation

// type Inference -  not defining anything ts will know the type itself

// type annotation
let b: number;

function solve(a: number): void {} // type annotations in the parameters

//--------------------------------------------------------//

//Interfaces and type alliases
// -> defining Interfaces
// -> using interfaces to define object shapes
// -> extending interfaces
// -> type aliases
// -> intersection types

//using interfaces to define object shapes
interface User {
  // interfaces is used to define a structure of mostly object and reference data type
  name: string;
  email: string;
  password: string;
}
function getData(obj: User): object {
  return obj;
}

//extending interfaces - simply inherit the props of another interface and also some its own props

interface User {
  name: string;
  email: string;
  password: string;
}
interface Admin extends User {
  isAdmin: boolean;
}

function getData2(obj: User): object {
  return obj;
}
function getData3(obj: Admin): object {
  return obj;
}

// two interfaces of a single name will get merged automatically
interface abcd {
  name: string;
}
interface abcd {
  email: string;
}
function user(user: abcd): void {
  console.log(user.email, user.name);
}


// -> type aliases -- defining your own types 
type chacha = number // now it will work as numbers 

let a:chacha;
//usecase of type aliases
type value = string | number| null;
let a2:value= 12;


// intersection
type user={
    name:string,
    email:string
}

type admin =user & {
    getDetails(user:string):void
}
