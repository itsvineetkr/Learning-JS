// single if
if (true || true && false){
    console.log("Hello World!");
}

// if with an else
if (true){
    console.log("One");
} else{
    console.log("Two");
}

// nested if else
if (true){
    console.log("Nest1");
} else if(true){
    console.log("Nest2");
} else if(true){
    console.log("Nest3");
} else{
    console.log("End");
}


// switch case
const day = "sat"

switch (day) {
    case "mon":
        console.log("Monday")
        break

    case "sat":
        console.log("Saturday")
        break

    default:
        console.log("Default")
        break
}

// If no break is there then by default it runs all the other cases except for default coming after the success case.

/*
Truthy and Falsy values:

all those values which are presumed to be false are falsy values and except them all are truthy.

falsy: false, 0, -0, '', 0n, null, undefined, NaN

some keep in mind truthy values:
{}, [], " ", "0", "false", function(){}
*/


/*

Nullish Coalescninc Operator: ??

Basically when you are getting a response or return value from a server or function 
then either you will have something or not, to manage that not condition this operator is there

*/

function func(){
    return undefined
}

function func2(){
    return "Yup Backup is working"
}

const val = func() ?? func2()

console.log(val);



/*
Terniary Operator:

condition ? true : false
*/

100 < 1000 ? console.log("Yup it is!") : console.log("Oops it isn't!");
