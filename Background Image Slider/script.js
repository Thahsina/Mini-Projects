const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0


rightBtn.addEventListener('click', () => {
    // here we keep incrementing activeSlide on every click on rightbtn
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide=0
    }
    // this if checks if aft incrementing activeSlide has surpassed the total number of slides i.e slides.length if yes then the activeSlide counter i sset back to 0 which get incremented at each click.
    setBgToBody()
    showSlide()
})

leftBtn.addEventListener('click', ()=>{
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1
    }

    setBgToBody()
    showSlide()
})

setBgToBody()
function setBgToBody() {
    //setting the img of active slide as bg image of body (both the bgground and foreground images are inline coz of height and width of front image is of same as the bgimage and overflow is hidden.)
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function showSlide(){
    slides.forEach(slide => slide.classList.remove('show'))
    // rms the class show on the current slide if it is present and then adds class show on the activeSlide i.e if activeslide =3 adds active class to slide 3 which becomes the front image and bg is taken care by setBgToBody()
    slides[activeSlide].classList.add('show')
}