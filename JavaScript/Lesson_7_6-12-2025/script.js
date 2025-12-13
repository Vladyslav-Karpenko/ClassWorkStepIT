// !! CALLBACK FUNCTION

// function welcome(name, func) {
//     func(name)
// }
// function function2(name) {
//     console.log(`Hello, ${name}`)
// }

// welcome('Alex', function2)

// !! MASSIVE METHODS

// !! FOR EACH

// const myArr = ['apple', 'orange', 'banana']
// myArr.forEach((el, i) => {
//     console.log(`${el}:${i}`);

// })

// !! MAP
// !
// const myArr = ['apple', 'orange', 'banana']
// const newArr = myArr.map((el) => {
//     return el.toUpperCase()
// })
// console.log(myArr)
// console.log(newArr);
// !
// const users = [
//   { name: 'Alex', age: 35 },
//   { name: 'Oleg', age: 25 },
//   { name: 'Maria', age: 17 }
// ]

// const updateUsers = users.map((user) => ({
//     ...user,
//     isAdult: user.age >= 18
// }))

// console.log(updateUsers);

// const html = users.map((user) => {
//   return `
//       <h1>${user.name}</h1>
//       <p>${user.age}</p>
//     `
// }
// )
// // document.body.innerHTML = `<div>List of users ${html}</div>`
// console.log(`<div>List of users ${html}</div>`);
// !

const myArr = [1, 2, 3]

const newArr = myArr.map((el) => {
  return el * 3
})
console.log(newArr);

// !! FILTER

// const arr2 = [14, 45, 1, 78, 12]


// !! FIND
// const arr2 = [14, 45, 1, 78, 12]

// const newArr = arr2.find(el => el > 15)
// console.log(newArr);

// !! FINDINDEX

// const arr2 = [14, 45, 1, 78, 12]
// const findIndexArr = arr2.findIndex(el => el > 15)
// console.log(findIndexArr);

// !! SOME

// const arr1 = [14, 45, 1, 78, 12]

// const som = arr1.some(el => el > 5)
// console.log(som);

// const every = arr1.every(el => el > 7)
// console.log(every)

// !! SORT 
// const arrStr = ['apple', 'orange', 'banana']
// const arrNums = [14, 45, 1, 78, 12]

// arrNums.sort()
// console.log(arrNums);
// arrNums.sort((a, b) => b - a)
// console.log(arrNums);


// console.log(arrStr);
// arrStr.sort()
// console.log(arrStr);

// !! REDUCE

// const arrNums = [14, 45, 1, 78, 12]
// const sum = arrNums.reduce((total, el) => {
//   return total += el
// }, 0)
// console.log(sum);

// !! SETTIMOUT
// document.body.innerHTML = `<h1>Start</h1>`
// setTimeout(() => {
//   document.body.innerHTML += `<h1>Hello</h1>`
// }, 5000)

// document.body.innerHTML += `<h1>Finish</h1>`

// !! SETINTERVAL

// !
// setInterval(() => {
//   document.body.innerHTML += `<h1>Hello</h1>`

// }, 4000)

// !
// console.log(date.getHours(), date.getMinutes(), date.getSeconds());

// setInterval(() => {
//   const date = new Date()
//   console.log(date.toLocaleTimeString());

// }, 1000)

// setInterval(() => {
//   const date = new Date()
//   const hours = date.getHours()
//   const minutes = date.getMinutes()
//   const seconds = date.getSeconds()
//   document.body.innerHTML = `<h1>${hours}:${minutes}:${seconds}</h1>`
// }, 1000)

// !! PRACTICE

// const posts = [
//   { id: 1, name: 'Alex', text: 'Post#1' },
//   { id: 2, name: 'Vlad', text: 'Post#2' },
//   { id: 3, name: 'Sasha', text: 'Post#3' },
//   { id: 4, name: 'Vova', text: 'Post#4' },

// ]


// const updatePosts = posts.filter((post)=> {
//   post.name
// })