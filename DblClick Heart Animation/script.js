const times = document.querySelector('#times')
const images = document.querySelectorAll('.images')

let timesClicked = 0

images.forEach(image => {
    image.addEventListener('dblclick',(e) => createHeart(e))
})

const createHeart= (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')


    const x = e.clientX
    const y = e.clentY

    const leftOffset = e.target.offsetLeft
    const rightOffset = e.target.offsetRight

    const xInside = x-leftOffset
    const yInside = x-rightOffset

    heart.style.top= `${xInside}px`
    heart.style.left = `${yInside}px`

    images.forEach(image => {
        image.appendChild(heart)

        

        setTimeout(() => heart.remove, 1000)
    })

    times.innerHTML = ++timesClicked

    

}