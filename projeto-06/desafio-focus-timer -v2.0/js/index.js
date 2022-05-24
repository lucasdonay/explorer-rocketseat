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


buttonPlay.addEventListener('click', function() {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')  
})


function turnItOff(button) {
  if (button.classList.contains('active')) {
    button.classList.remove('active')
  }
}

buttonPause.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.add('hide')   
})

buttonStop.addEventListener('click', function() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')   
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
