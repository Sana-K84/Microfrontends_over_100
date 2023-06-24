const board = document.querySelector('#board')
const colors = ['#00FFFF', '#000000', '#0000FF', '#FF00FF', '#808080', '#008000', '#00FF00', '#800000', '#000080', '#808000', '#800080', '#FF0000', '#C0C0C0', '#008080', '#FFFFFF', '#FFFF00'];

const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',
        setColor)


    square.addEventListener('mouseleave',
        removeColor
    )

    board.append(square)
}


function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {


    return colors[Math.floor(Math.random() * colors.length)]
}