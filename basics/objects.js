/* 
There are two types: 
    1. Singleton 
    2. Literal 
*/

// -------------------Literal Objects----------------------

const Obj = {
    name: "Vineet",
    gender:  "male",
    salary: 450000,
    isGoodPerson: true
}

// Ways to obtain data:

console.log(
    Obj.name,
    Obj["name"]
);

// Handling Symbols:

const sym = Symbol("key8866")

const Obj2 = {
    [sym]: "symbol is good",
    hash: "4B2131H41JHB241JH4"
}

console.log(Obj2[sym]); //Only way to call a symbol

// Changing values:

Obj.name = "Hitesh"
Obj["name"] = "Ravi"

// There can be functions in Objects:

Obj.func = function(){
    console.log("Hello World!");
}

console.log(Obj.func());

// Joining two objects:

let target = {1:"a"}
let source = {2:"b"}

// method 1

newObj = Object.assign(target, source, {3:"c"}) // it changes the target as well as returns
anotherObj = Object.assign({}, source, {3:"c"}, {4:"d"}) // good practice


// method 2

target = {1:"a"}
source = {2:"b"}

newObj2 = {...target, ...source}

console.log(newObj2);

// Keys and Value methods:

const keys = Object.keys(newObj)        //[ '1', '2', '3' ]
const values = Object.values(newObj)    //[ 'a', 'b', 'c' ] 
const entries = Object.entries(newObj)  //[[ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ]]

// Taking out keys as variables

const user = {
    name: "Vineet",
    gender: "male",
    isLoggedin: true
}

const {name: aliasname} = user

// if you print aliasname it will print user.name
