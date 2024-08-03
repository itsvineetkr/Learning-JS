"use strict"; // this will let the interpreter know that use all the newer version things

// Ways to define data variables or constants:

const pi = 3.14
var name = "Vineet"
let salary = 400000
let jobRole = "Software engineer"

/* 
Avoid using var because it can't see scopes and if you'll have same name for 
a local and a global variable then there changes will reflect in each other

If you won't use let or const then it will be a variable by default and it will 
identify it self what is the type. Only if use strict is not there.
*/

// to print something
console.log("Hello World!");

// type of
console.log(typeof "hello World", typeof (123));

/* Datatypes:
  A. Primitive
    1. number
    2. string
    3. boolean
    4. null
    5. undefiend
    6. symbol
    7. bigint

  B. Non-primitive
    1. objects
    2. functions
    3. array
*/

// undefined is a type of datatype it self so while doing typeof it shows undefiend
// null is a object type but it is considered to be a standalone value.

// ---------------Data conversion-----------------

/* 
Using Number on string:
    1. It is a number properly --> will become a number (ex. "33" = 33)
    2. It contains characters --> will become NaN i.e Not a Number

Using Number on boolean:
    1. "", false --> 0
    2. true, --> 1

Using Number on:
    null --> 0
    undefined --> Nan
*/



console.table([
    Number("33"), 
    Number("ab33"), 
    Number(""), 
    Number(false), 
    Number(true), 
    Number(null), 
    Number(undefined)
]);

/*

Using Boolean on string:
    1. Not Empty: true
    2. Empty: false

Using Boolean on number:
    1. 0: false
    2. not 0: true

Using Boolean on:
    null: false
    undefined: false

*/

console.table([
    Boolean(""), 
    Boolean("A"), 
    Boolean(112), 
    Boolean(0),  
    Boolean(null), 
    Boolean(undefined)
]);

// String is like it makes everything literal



// ----------------------COMPARISON-------------------------

/*
==, >=, <=, !=, === 

first typecast them to equal datatypes.

"22" == 22 --> true

but remember in case of null 
null == 0 --> false
cause it was a need... remember that temperature example!
but in >= or <= it will be true cause that was not the need.

in === it is strict and doesn't changes datatype

so 22 === "22" --> false

undefined is not equals to anything!
*/

// ----------------- String Functions ------------------------

// All are same as python mostly... Slice does that is takes two index one is necessary, 
// which is where to start and it slices the string from there and retruns the part from
// there to the end if second index is not given otherwise till the ending index

// ----------------- Number Functions ------------------------

console.log(1203.16034.toFixed(1)); // it rounds off... 1203.2 minimum value of arg can be 0 so there will be no decimal digits
console.log(1203.16034.toPrecision(2)); // from the left it leaves that many significant digits ... 1.2e+3 for this example

// There is math lib same as python
console.log(Math.random()); // 0 - 1
let max = 10
let min = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min) // max - min 

// -----------------------DATES in JS---------------------------

let dateNow = Date.now() // to get instant timestamp:
console.log(dateNow); // it will give a value in ms which is calculated from 1 Jan mid night 1970

let date = new Date() // this will also give the present instance of time if no parameters are given

console.table([date.getMonth(), date.getDay(), date.getTime(), date.toLocaleString()]);

// Note: Month is counted from 0

let bday = new Date("2004-12-10") // mm-dd-yyyy or yyyy-mm-dd
bday = new Date(2023, 11, 10, 13, 30) // yyyy, mm(0-11), dd, hr, min, sec (24hrs)

console.log(bday.toLocaleString(
    "default",
    {
        weekday: "long"
    }
));


// END of BASICS