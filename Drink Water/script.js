// const remained = document.getElementById('remained')
// const liters = document.getElementById('liters')
// const smallCups = document.querySelectorAll('.cup-small')
// const bigCup = document.getElementById('cup')
// const percentage = document.getElementsByClassName('percentage')

// updateBigCup()


// smallCups.forEach((smallCup, idx) => {
//     smallCup.addEventListener('click', () => highlightCups(smallCup,idx))

// })

// function highlightCups(cup,idx){
//     console.log(idx);
//     cup.classList.toggle('full')

//     updateBigCup()
// }

// function updateBigCup() {
//     const fullCups = document.querySelectorAll('.cup-small.full').length
//     const totalCups = smallCups.length

//     if(fullCups === 0) {
//         percentage.style.visibility = 'hidden'
//         percentage.style.height = 0
//     } else {
//         percentage.style.visibility = 'visible'
//         percentage.style.height = `${fullCups / totalCups * 330}px`
//         percentage.innerText = `${fullCups / totalCups * 100}%`
//     }

//     if(fullCups === totalCups) {
//         remained.style.visibility = 'hidden'
//         remained.style.height = 0
//     } else {
//         remained.style.visibility = 'visible'
//         liters.innerText = `${2 - (250 * fullCups / 1000)}L`
//     }

// }



const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(cup,idx))
})

function highlightCups(cup,idx) {
    console.log(idx);
    cup.classList.toggle('full')
    updateBigCup()
    }

    


function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}




