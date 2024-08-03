// for of: this takes out directly the items from a iterable type of data like array, string, map

const map = new Map()
map.set(1, 2)
map.set(2, 3)

for (const [i, j] of map) {
    console.log(i + '--> ' + j);
}

// for in: this takes out the keys of data, index in case of array, a data must have some key not like map where a value is maped with a value

obj = { name: "Vineet", class: "BTech" }
for (const key in obj) {
    console.log(key, obj[key]);
}

/*

Array Specific: 

*/

// forEach: doesn't return anything, you can just perform some task in each item of array

let arr = [1, 2, 3, 4, 5]

function addAndPrint(num){
    num += 10
    console.log(`num is ${num}`);
}

arr.forEach(addAndPrint)

// filter: takes a callback function as arg and returns array with filtered value

const arr2 = arr.filter( (num) => (num % 2 == 0) )
console.log(arr2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, price: 21004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, price: 21008 },
    { title: 'Book Three', genre: 'History', publish: 1999, price: 21007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, price: 21010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, price: 21014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, price: 21010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, price: 11996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, price: 21016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, price: 11989 },
]

const books1 = books.filter( (item) => {
    c1 = item.genre == "Fiction"
    c2 = item.publish > 1985
    c3 = item.price >= 2004
    
    return c1 && c2 && c3
})




// map: takes callback function as arg and returns array with modified items

const books2 = books.map( (item) => {
    item.price += 10
    return item
} )



// reduce: it is like sum which adds up the array items from a initial val and returns that

initialVal = 0
const count = books.reduce( (acc, curr) => (acc + curr.price), initialVal)
