const button= document.querySelector('.btn')

    button.addEventListener('click', function(e){
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInsideBtn = x - buttonLeft;
        const yInsideBtn = y - buttonTop;

        const circle = document.createElement('span')
        circle.classList.add('circle')

        circle.style.top = yInsideBtn + 'px'
        circle.style.left= xInsideBtn + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)


    })

// const buttons = document.querySelectorAll('.btn')

// buttons.forEach(button => {
//     button.addEventListener('click', function (e) {
//         const x = e.clientX
//         const y = e.clientY

//         const buttonTop = e.target.offsetTop
//         const buttonLeft = e.target.offsetLeft

//         const xInside = x - buttonLeft
//         const yInside = y - buttonTop

//         const circle = document.createElement('span')
//         circle.classList.add('circle')
//         circle.style.top = yInside + 'px'
//         circle.style.left = xInside + 'px'

//         this.appendChild(circle)

//         setTimeout(() => circle.remove(), 500)
//     })
// })