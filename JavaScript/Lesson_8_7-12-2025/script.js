// const containerID = document.getElementById('cont')
// console.log(containerID);
// const containerClass = document.getElementsByClassName('container')
// console.log(containerClass);



// const cont2 = containerClass.getElementsByClassName('div2')
// console.log(cont2);

// const container = document.querySelector('.container')
// console.log(container);

// !!

// const items = document.querySelectorAll('.item')
// console.log(items);
// console.log(items[0]);


// !!

// const firstItem = document.querySelector('#list > li:first-child')
// console.log(firstItem);

// !!

// const logo = document.querySelector('#logo')
// // console.log(logo);
// logo.src = 'https://docs.python.org/3/_static/py.svg'
// logo.alt = 'picture'
// console.log(logo);
// logo.width = '300'

// !! TEXT CONTENT

// const div2 = document.querySelector('.div2')
// div2.textContent = 'Hello JavaScript'
// console.log(div2.textContent);
// !! STYLE
// const div2 = document.querySelector('.div2')

// div2.style.color = 'red'
// div2.style.fontSize = '56px'
// console.log(div2.style);

// !! CLASS LIST
// const div2 = document.querySelector('.div2')

// div2.classList.add('div3') // add class
// div2.classList.remove('div2') // remove class
// div2.classList.toggle('div1') // toggle class
// div2.classList.replace('div2', 'div7') //replace class 

// !! CREATE ELEMENTS ON HTML

// const title = document.createElement('h1')
// const paragraph = document.createElement('p')
// const btn = document.createElement('button')
// title.textContent = 'Hello'
// paragraph.textContent = 'Description'
// btn.textContent = 'Click me'

// // btn.classList.add('btn')
// const sec = document.querySelector('#sec')

// const section = document.createElement('section')
// section.append(title, paragraph, btn)
// // sec.append(title, paragraph, btn)

// // !! insertAdjacentHTML

// // sec.insertAdjacentElement('afterbegin', title)
// // sec.insertAdjacentHTML('afterbegin', '<h2>Hi guys!</h2>')

// document.script.insertAdjacentElement('beforebegin', section)

// !! PRACTICE CREATE UL < 5 LI

// const list = document.createElement('ul')
// for (let i = 1; i <= 5; i++) {
//     let item = document.createElement('li')
//     item.textContent = `Element ${i}`
//     list.append(item)
// }
// document.body.appendChild(list)

// !! PRACTICe REMOVe ELEMENTs

// const remEl = document.querySelectorAll('.remove-me')

// remEl.forEach(item => item.remove())


// !
// const list = document.querySelector('#list')
// list.firstElementChild.remove()


// !PRACTICE TABLE 3 X 3

// const table = document.createElement('table')
// let count = 1
// for (let i = 1; i <= 3; i++) {
//     let tr = document.createElement('tr')
//     for (let j = 1; j <= 3; j++) {
//         let td = document.createElement('td')
//         td.textContent = count
//         tr.append(td)
//         count++
//     }
//     table.append(tr)
// }

// document.body.append(table)

// !! PRACTICE CREATE CArD Of Product

const products = [
    { id: 1, name: 'Product # 1', img: 'product1.jpg', price: '1000 czk' },
    { id: 2, name: 'Product # 2', img: 'product2.jpg', price: '2000 czk' },
    { id: 3, name: 'Product # 3', img: 'product3.jpg', price: '3000 czk' },
]
products.forEach(product => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    h3.textContent = products.name
    img.textContent = product.img
    div.append(img, h3)
    document.body.appendChild(div)
})
