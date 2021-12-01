const counters= document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = parseInt(counter.getAttribute('data-target'))
        
        const c = Number(counter.innerText)
    
        const increment =Math.ceil(target / 200) ;
    

        if (c < target){
            counter.innerText = `${c+ increment}`
            setTimeout(updateCounter,1)
            // since inside the function no need of parentheses with updateCounter

        }
        else{
            counter.innerText = target;
        }
        
    }
    updateCounter();
})