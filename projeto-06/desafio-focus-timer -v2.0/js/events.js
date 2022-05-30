import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonIncreaseMinutes,
  buttonDecreaseMinutes,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,
  minutesDisplay, 
  } from "./elements.js"

let minutes = Number(minutesDisplay.textContent)

export default function({controls, timer, sound}) {

function turnItOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}

buttonIncreaseMinutes.addEventListener('click', function() { 
  sound.pressButton() 
  minutesDisplay.textContent = String(minutes + 5).padStart(2, '0')
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0) {
     timer.updateDisplay(0, 0)
  }  
})

buttonDecreaseMinutes.addEventListener('click', function() {
  sound.pressButton()
  minutesDisplay.textContent = String(minutes - 5).padStart(2, '0')
  minutes = Number(minutesDisplay.textContent)
  if (minutes <= 0) {
    timer.updateDisplay(0, 0)
  }
})

buttonPlay.addEventListener('click', function() {
  controls.play()
  sound.pressButton()
  timer.countdown()
})

buttonPause.addEventListener('click', function() {
  controls.pause()
  timer.hold()    
  sound.pressButton()
})

buttonStop.addEventListener('click', function() {
  controls.resetControls()
  timer.reset()
  sound.pressButton()
})

buttonForest.addEventListener('click', function() {
  buttonForest.classList.toggle('active')
  sound.pauseMusic()
  turnItOff(buttonFirePlace)
  turnItOff(buttonRain)  
  turnItOff(buttonCoffee)
  sound.pressButton()
  sound.playForest()
})

buttonRain.addEventListener('click', function() {
  buttonRain.classList.toggle('active')
  sound.pauseMusic()  
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)  
  turnItOff(buttonCoffee)
  sound.pressButton()
  sound.playRain() 
})

buttonCoffee.addEventListener('click', function() {
  buttonCoffee.classList.toggle('active') 
  sound.pauseMusic() 
  turnItOff(buttonFirePlace)
  turnItOff(buttonForest)
  turnItOff(buttonRain) 
  sound.pressButton() 
  sound.playCoffee()   
})

buttonFirePlace.addEventListener('click', function() {
  buttonFirePlace.classList.toggle('active') 
  sound.pauseMusic()
  turnItOff(buttonCoffee)
  turnItOff(buttonForest)  
  turnItOff(buttonRain)  
  sound.pressButton()
  sound.playFire()
})

buttonSet.addEventListener('click', function() {  
  let newMinutes = controls.getMinutes()
  if (!newMinutes) {
    timer.reset()
    return
  }   
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
  sound.pressButton()
})
}