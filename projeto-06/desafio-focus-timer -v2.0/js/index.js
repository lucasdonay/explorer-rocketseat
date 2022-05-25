const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonIncreaseSound = document.querySelector('.increase-sound')
const buttonDecreaseSound = document.querySelector('.decrease-sound')
const buttonForest = document.querySelector('.forest')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFirePlace = document.querySelector('.fireplace')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

function resetControls() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide') 
}

function updateTimerDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0") 
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function turnItOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}

function countdown(){
 timerTimeOut = setTimeout(function() {
    let seconds =  Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)
    
    if (minutes <= 0 & seconds <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0 ) {
      seconds = 4
      --minutes
    }
    
    countdown()

    updateTimerDisplay(minutes, String(seconds - 1))

  }, 1000)
}
  


buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide') 

  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.add('hide')
  clearTimeout(timerTimeOut)  
})

buttonStop.addEventListener('click', function() {
  resetControls()
  reset()
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('active')  
  turnItOff(buttonFirePlace)
  turnItOff(buttonRain)  
  turnItOff(buttonCoffee)
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('active')
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)  
  turnItOff(buttonCoffee)   
})

buttonCoffee.addEventListener('click', function() {
  buttonCoffee.classList.toggle('active') 
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)  
  turnItOff(buttonRain)     
})

buttonFirePlace.addEventListener('click', function() {
  buttonFirePlace.classList.toggle('active') 
  turnItOff(buttonCoffee)
  turnItOff(buttonForest)  
  turnItOff(buttonRain)     
})

buttonSet.addEventListener('click', function() {  
  minutes = prompt("Quantos minutos?") || "0"
  updateTimerDisplay(minutes, 0)
})
