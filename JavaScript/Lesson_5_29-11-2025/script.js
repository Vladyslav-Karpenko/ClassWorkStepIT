// const students = [
//     "Alena",
//     "Evgenii",
//     "Vlad",
//     "Sergei",
//     "Alexandr",
//     "Farid",
//     "Jusif",
// ];



// console.log(students);
// students[2] = "Vovan";
// console.log(students);
// !! SPLIT ARR
// let str = 'Hello world'
// let arr = str.split('')
// console.log(arr);
// !! JOIN ARR
// let arr = ["Apple", "Orange"]
// let str = arr.join()
// console.log(str);

// !! change str with array

// let str = 'Hello'
// let arr = str.split('')

// arr[4] = 'Q'
// console.log(arr.join(''));

// !! INDEXOF (RETURN -1 or INDEX) IN ARRAY AND INCLUDES (Return true / false)
// let array = ['JavaScript', 'React', 'Node.js']
// console.log(array.indexOf('React'));
// console.log(array.includes('JavaScript'));

// console.log(array.includes('Java'));
// array = array.join('')
// console.log(array.includes('Java'));

// !! ADD OBJECT IN ARRAY start / end
// let arr = ['Apple', 'Samsung', 'Nokia', 'LG', 'Alcatel']

// arr.push('Alcatel')
// console.log(arr);

// arr.unshift('LG')
// console.log(arr);

// let newArr = arr
// newArr.push('SOMETEXT')
// console.log(arr);
// console.log(newArr);

// !! POP SHIFT
// let arr = ['Apple', 'Samsung', 'Nokia', 'LG', 'Alcatel']

// console.log(arr.pop());
// console.log(arr.shift());

// !! SLICE
// let arr = ['Apple', 'Samsung', 'Nokia', 'LG', 'Alcatel']

// console.log(arr);
// console.log(arr.slice());

// !!  SPLICE

// let arr = ['Apple', 'Samsung', 'Nokia', 'LG', 'Alcatel']

// arr.splice(2, 2)
// console.log(arr);

// arr.splice(-1)
// console.log(arr);

// arr.splice(1, 2, 'Sobaka', 'Kot', 'Mouse')
// console.log(arr);

// !! CONCAT

// let arr1 = ['Vlad', 'Evgenii']
// let arr2 = ['Dog', 'Cat']

// let newArr = arr1.concat(arr2)


// for (i = 0; i < newArr.length; i++) {
//     console.log(i, newArr[i]);

// }

// for (i of newArr) {
//     console.log(i);

// }

// !! OBJECT

// let user = {
//     name: 'Vlad',
//     age: 36,
//     isOnline: true,
//     favoriteCity: ['Prague', 'Odessa']
// }

// console.log(user.name);
// console.log(user['age']);
// user.someValue = 'Apple'


// !!! FOR IN



// for (let value in user) {
//     console.log(value, user[value]);
// }

// !! VIEW ALL KEYS / VALUES
// let arrKeys = Object.keys(user)
// console.log(arrKeys);

// let arrValues = Object.values(user)
// console.log(arrValues);

// !! DESTRUCTION

// let user2 = {
//     name: 'Vlad',
//     age: 36,
//     isOnline: true,
//     favoriteCity: ['Prague', 'Odessa']
// }

// let { age, name, isOnline } = user2
// age = 45

// console.log(user2);


