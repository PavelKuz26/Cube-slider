let prevBtn = document.querySelector('.prev')
let nextBtn = document.querySelector('.next')
let box = document.querySelector('.box')

let deg = 0

prevBtn.addEventListener('click', () => {
    deg += 90
    box.style = `transform: perspective(1000px) rotateY(${deg}deg);`
})

nextBtn.addEventListener('click', () => {
    deg -= 90
    box.style = `transform: perspective(1000px) rotateY(${deg}deg);`
})