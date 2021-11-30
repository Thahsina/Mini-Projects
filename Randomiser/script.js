// const choicesEl = document.querySelectorAll('tags')
// const textarea = document.querySelector('textarea')

// textarea.focus()

// textarea.addEventListener('keyup', (e)=>{
    
//         createChoices (e.target.value)
// })

// function createChoices(input){
//     const choices = input.split(',').filter(choice => choice.trim() !== '').map(choice => choice.trim())
//     // console.log(choices);

//     choicesEl.innerHTML = ''

//     choices.forEach(tag => {
//         const choiceEl = document.createElement('span')
//         choiceEl.classList.add('tag');
//         choiceEl.innerText = tag;
//         console.log(choiceEl);
//         choicesEl.appendChild(choiceEl);


//     })
// }







const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === "Enter")
    {
        setTimeout(() => e.target.value= '',10)
        randomSelect()
    }


})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    
    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
    // return tags;
}

function randomSelect(){
    const interval= setInterval(() =>  {
        const randomTag= pickRandomtag();

        if (randomTag !== undefined){
            highlight(randomTag)

            setTimeout(() => {
                unHighlight(randomTag)
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomtag()

            highlight(randomTag)
        }, 100);
    }, 30*100);
}

function pickRandomtag(){
    const tags = document.querySelectorAll('.tag')
    return (tags[Math.floor(Math.random()* tags.length)])
}

function highlight(tag){
    tag.classList.add('highlight')
}

function unHighlight(tag){
    tag.classList.remove('highlight')
}