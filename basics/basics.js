"use strict";
{ // primitive types numbers , booleans ,string
    //reference - arrays , tuples , enums, objects
    //any , unknown , void , null , undefined , never
    //primitive and refernce
    let a = [1, 2, 3, 4];
    let b = a; // now b got the reference of a means if i made a change in b it will directly changes its parent means a
    // typescript is highly type secured
    let arr = [1, 2, 3, "piyush"]; // but it also support this means now the type of array is number and string
    console.log(arr);
    let arr2 = [
        1,
        2,
        3,
        { name: "piyush", number: 1 },
        { number: 123, name: "rathore" },
    ];
    // primitive and references
    // primitive can be easily copied
    var x = 12;
    var y = x + 1;
    console.log(x, y);
    // but cant copy reference if you change something then it will change the parent
    // defining type safe array  -- code below is called [ tuples ]
    let arr3 = [12, "harsh"]; // already set that it has two types - defining types in ts
    //array of specific type
    let arr4 = ["piyush", "month"];
    //enums
    let roles;
    (function (roles) {
        roles["ADMIN"] = "admin";
        roles["MEMBER"] = "member";
    })(roles || (roles = {}));
    //any , unknown , void , null , undefined , never
    let p;
    p = 12;
    //any type
    let s; // any thing can be sent anytime - not a good practice in ts
    s = 12;
    s = "piyush";
    s.toUpperCase(); //  now this is problematic because it fails on the first value and pass of second value
    // but here comes the unknown keyword
    let r;
    r = 10;
    r = "piyush";
    //it will look same as any but it will not allow to pass any method like above , we need to specify
    if (typeof r === "string")
        r.toUpperCase(); // now we specify so it will work
    // void -- return type of function
    function solve() {
        console.log("hello ");
    }
    // and we can change it according to its return type 
    // null 
    let m;
    // we use unions for it 
    let n;
    // never - means its will not go anymore - infinite loops 
}
