// function myFunc(name, surname) {
//     return `Hello ${name} ${surname}`
// }

// console.log(myFunc('Vladyslav', 'Karpenko'));

// function sum(a, b) {
//     console.log(a + b)
// }

// let someVar = sum(5, 3)

// function sum(a, b = 5) {
//     console.log(a + b)
// }

// let someVar = sum(5)


// !! FUNCTION WITH ARR
// function sum(...a) {
//     for (i of a) {
//         console.log(i);
//     }
// }

// sum(1, 5, 3, 5)

// !! FUNCTION ANONIM


// function() {
//     return ('Hello')
// }

// const sum = function () {
//     return ('Hello')
// }

// console.log(sum());

// !! FUNCTION ARROW

// const sum = (a, b) => a + b;
// console.log(sum(5, 4));

// const sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(5, 4));

// const salaries = {
//     vlad: 1500,
//     evngenii: 1300
// }

// function myFunc(x) {
//     let sum = 0
//     let newArr = Object.values(x)
//     for (i of newArr) {
//         console.log(i);
//     }
// }

// myFunc(salaries)

// !! 

// const greetUser = (obj) => {
//     const { name, age } = obj
//     return `Hello ${name} You are ${age} years old`
// }

// console.log(greetUser({ name: 'Vlad', age: 25 }))

// !!
// const my_object = {
//     name: 'Vlad',
//     surname: 'Karpenko'
// }
// const hasProperty = (obj, str) => Object.values(obj).includes(str)

// console.log(hasProperty(my_object, 'Vlad'));

// !!

function filterByLength(arr, minLen) {
    let newArr = []
    for (i of arr) {
        if (i.length < minLen) {
            newArr.push(i)
        }
    }
    return newArr
}
console.log(filterByLength(['VLadyslav', 'Karpenko', 'Vlad'], 10));


// const myArrTest = ['Vlad', 'Vova', 'Evgenii']
// myArrTest.push('Vadafgagvv')
// console.log(myArrTest);
