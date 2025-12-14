const btnToggle = document.querySelector('#btn-toggle')
const savedItem = localStorage.setItem('theme', 'dark')
const btnClear = document.querySelector('#btn-clear')

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    const theme = document.body.classList.contains('dark') ? 'dark' : 'light'
    localStorage.setItem('theme', theme)
})

btnClear.addEventListener('click', () => localStorage.clear())
