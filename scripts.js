let currentInput = document.querySelector('.current-input')
let answerScreen = document.querySelector('.answe-screen')
let buttons = document.querySelectorAll('button')
let erasebtn = document.querySelector('#erase')
let clearbtn = document.querySelector('#clear')
let evaluate = document.querySelector('#evaluate')

let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {
    realTimeScreenValue = ['']
    answerScreen.innerHTML = 0
    currentInput.className = 'current-input'
    answerScreen.className = 'answe-screen'
    answerScreen.style.color = "rgba(158, 158, 158, 0.87)";
})



buttons.forEach( (btn) => {
    btn.addEventListener("click", () =>{
        
        
        if(!btn.id.match('erase')){
           realTimeScreenValue.push(btn.value)
           currentInput.innerHTML = realTimeScreenValue.join('') 

           if(btn.classList.contains('num_btn')){
               answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
           }
        }

        if(btn.id.match('erase')){
            realTimeScreenValue.pop()
            currentInput.innerHTML = realTimeScreenValue.join('')
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''))
        }

        if(btn.id.match('evaluate')){            
            currentInput.className = 'answe-screen'
            answerScreen.className = 'current-input'
            currentInput.innerHTML = ''
            answerScreen.style.color = "white"
        }

        if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
            answerScreen.innerHTML = 0
        }

    })
})
