// Two ways to define a function

// 1. Function Declaration: This type of function can be called even before they are defined. This phenomenon is known as Hoisted.

function functionName(parameter1, parameter2){
    return [parameter1, parameter2]
}

// 2. Function Expression: These types of functions are not hoisted and hence they can't be called before they are defined. 

const anotherFunctionName = function(parameter1, parameter2){
    return [parameter1, parameter2]
}

// 3. Arrow Function: These functions inherit their current context from parent scope. Basically they don't have their own "this" value.
// and hence not suitable for methods and constructors

const arrowFunction = (parameter1, parameter2) => {
    return [parameter1, parameter2]
}

// one liners:

const add = (num1, num2) => num1 + num2

// 4. Constructor Fucntion: This type of functions are used to create objects. Named with first letter Capital.

function Node(val){
    this.val = val
    this.next = None
}

// 5. Immediately invoked function expression (IIFE):
// These are made to get rid of global variable pollution. They can be named(regular declaration) or unnamed(arrow)
// You should end it with semicolon otherwise further code execution won't work.

(function(){
    console.log("Hello World!")
})();

((name) => {
    console.log(name);
})("Vineet");

