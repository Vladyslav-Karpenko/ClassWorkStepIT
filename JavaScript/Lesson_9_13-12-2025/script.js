// ! addEventListener
// const btn = document.querySelector('#btn')

// const click1 = () => console.log('first');
// const click2 = () => console.log('second');
// const click3 = () => console.log('third');

// const removeSecondEvent = () => {
//     console.log('SECOND TIME FUNC');

// }

// btn.addEventListener('click', click1)
// btn.addEventListener('click', click2)
// btn.addEventListener('click', click3)

// // ! removeListener

// btn.removeEventListener('click', removeSecondEvent)

// !PRACTICE
// !
// const btn = document.querySelector('#btn')
// const span = document.querySelector('#count')
// let total = 0
// const addCount = () => {
//     total++
//     span.textContent = `Count: ${total}`
// }

// document.addEventListener('click', addCount)

// const box = document.querySelector('#box')


// box.addEventListener('click', () => box.style.backgroundColor = `#${Math.floor(Math.random() * 255)}`
// )

// const btnStart = document.querySelector('#start')
// const btnStop = document.querySelector('#stop')
// const box = document.querySelector('#box')

// const changeColor = () => {
//     box.style.backgroundColor = `#${Math.floor(Math.random() * 255)}`
// }

// btnStart.addEventListener('click', () => {
//     setInterval(() => {
//         changeColor()
//     }, 2000)
// })

// !Event Object

// btnStart.addEventListener('click', (event) => {
//     console.log(event);

// })

// box.addEventListener('click', (event) => {
//     console.log('target: ', event.target);
//     console.log('current target: ', event.currentTarget);

// })

// !

// document.addEventListener('keydown', (event) => {
//     console.log('key ', event.key);
//     console.log('code ', event.code);
// })
const myText = document.querySelector('#myH')
// document.addEventListener('mousemove', (event) => {
//     myText.textContent = `X: ${event.clientX} Y: ${event.clientY}`
// })

const myList = document.querySelector('#list')

myList.addEventListener('click', (event) => {
    console.log(event.target);
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);

    }
});
