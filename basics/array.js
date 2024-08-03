// Ways to define an array:

const arr1 = [1,2,3,4,5,6]
const arr2 = Array(1,2,3)

/*
Array methods:
    1. push:        non_returning value_as_arg  #it add the value at the end 
    2. pop:         non_returning no_args       #it removes last item
    3. concat:      returning array_as_arg      #it does the same job as extend in python but is returning & doesn't change orignal one
    4. flat:        returning depth_as_arg      #it makes all subarrays not subarrays but values in the main array
    5. slice:       returning indicies_as_arg   #it returns a slice of array excluding the end index if given otherwise till end
    6. splice:      returning indicies_as_arg   #almost same as slice but it includes end index and reflects changes in orignal array
    7. includes:    returns true/false      #true: if element is present else false
    8. indexOf:     returns index of the argument element or -1 if it is not present
    9. join:        returns a string with all elements joined with the given parameter as sep (default = ",") 
                    if arg is a array then sep = "element,element,...."
    10. shift       non_returning #removes 0th value in the array itself 
    11. unshift     non_returning #it adds a given element in the starting
    12. ...         it is spread operator used before array identifier like ...arr1
    13. from        returning it takes an iterable as arg and makes it array
    14. of          returning it takes elements as args and makes an array of them and returns them
    15. isArray     returning it checks whether given parameter is an array or not
*/
