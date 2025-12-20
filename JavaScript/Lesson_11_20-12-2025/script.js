// const promise = new Promise((resolve, reject) => {
//     // asynch functions or operations
//     const isSucces = false
//     if (isSucces) {
//         console.log('Everything is good');
//     } else {
//         reject('error')
//     }
// })

// promise
//     .then(result => console.log(result))
//     .catch(reject => console.error(reject))
// !!

// console.log('start');
// setTimeout(() => console.log('SetTimeot'), 0);
// Promise.resolve().then(() => console.log('Promise'))
// console.log('end');

// !!

// const user = {
//     id: 1,
//     name: 'Vladyslav',
//     age: 36
// }

// const getUser = () => {
//     const isSucces = !true;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             isSucces ? resolve(user) : reject('Error download');
//         }, 1000)
//     })
// }
// getUser()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(console.log('Запрос завершился'))

// !! SIMPSONS API

// const BASE_URL = 'https://thesimpsonsapi.com/api'

// async function loadSimpson() {
//     try {
//         const response = await fetch(BASE_URL)

//         if (!response.ok) {
//             throw new Error('Server error: ' + response.status)
//         }

//         const data = await response.json()
//         console.log(data)

//     } catch (error) {
//         console.error(error.message)
//     }
// }

// loadSimpson()