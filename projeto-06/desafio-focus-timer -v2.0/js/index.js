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

const forestAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true')
const rainAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true')
const coffeeAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true')
const fireplaceAudio = new Audio('https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true')
const buttonPressAudio = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true')
const kitchenTimer = new Audio('https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true')

function Sounds() {

  function pressButton () {
    buttonPressAudio.play()
  }

  function endTimer () {
    kitchenTimer.play()
  }

  function pauseMusic() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireplaceAudio.pause()
  }

  const playForest = () => {
    forestAudio.play()
  }

  const playRain = () => {
    rainAudio.play()
  }

  const playCoffee = () => {
    coffeeAudio.play()
  }

  const playFire = () => {
    fireplaceAudio.play()
  }

    return {      
      pressButton,
      endTimer,
      pauseMusic,
      playForest,
      playRain,
      playCoffee,
      playFire
    }
}



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


function turnItOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}

function reset() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
 timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if(minutes <= 0 & seconds <= 0) {
      resetControls()
      Sounds().endTimer()
      return
    }

    if (seconds <=0) {
      seconds = 5
      --minutes
    }

    countdown()
    updateTimerDisplay(minutes, String(seconds - 1))

  },1000)
}

buttonIncreaseSound.addEventListener('click', function() {
  Sounds().pressButton()
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0) {
    updateTimerDisplay(0, 0)
  }
})

buttonDecreaseSound.addEventListener('click', function() {
  Sounds().pressButton()
  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0) {
    updateTimerDisplay(0, 0)
  }
})

buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide') 
  Sounds().pressButton()
  countdown()
})

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.add('hide')
  clearTimeout(timerTimeOut)  
  Sounds().pressButton()
})

buttonStop.addEventListener('click', function() {
  resetControls()
  reset()
  Sounds().pressButton()
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('active')
  Sounds().pauseMusic()  

  turnItOff(buttonFirePlace)
  turnItOff(buttonRain)  
  turnItOff(buttonCoffee)

  Sounds().pressButton()
  Sounds().playForest()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('active')
  Sounds().pauseMusic()
  
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)  
  turnItOff(buttonCoffee) 

  Sounds().pressButton()
  Sounds().playRain() 
})

buttonCoffee.addEventListener('click', function() {
  buttonCoffee.classList.toggle('active') 
  Sounds().pauseMusic()
 
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)  
  turnItOff(buttonRain) 

  Sounds().pressButton() 
  Sounds().playCoffee()   
})

buttonFirePlace.addEventListener('click', function() {
  buttonFirePlace.classList.toggle('active') 
  Sounds().pauseMusic()

  turnItOff(buttonCoffee)
  turnItOff(buttonForest)  
  turnItOff(buttonRain)  
  Sounds().pressButton()
  Sounds().playFire()
})

buttonSet.addEventListener('click', function() {  
  minutes = prompt("Quantos minutos?") || "0"
  updateTimerDisplay(minutes, 0)
  Sounds().pressButton()
})
