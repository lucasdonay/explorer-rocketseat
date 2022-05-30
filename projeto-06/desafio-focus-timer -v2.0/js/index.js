import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet, 
  minutesDisplay,
  secondsDisplay,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace} from "./elements.js"

let btnLightMode = document.querySelector('.ligthMode')
let btnDarkMode = document.querySelector('.darkMode')
let timers = document.querySelector('.timers')
let controles = document.querySelector('.controles')
let cards = document.querySelector('.sons')

btnLightMode.addEventListener('click', function() {
  btnLightMode.classList.add('hide')
  btnDarkMode.classList.remove('hide')
  document.body.classList.add('darkMode') 
  timers.classList.add('darkModeText')
  controles.classList.add('controlsDarkMode')
  cards.classList.add('cardDarkMode')
  buttonForest.classList.add('teste22')
  buttonRain.classList.add('teste22')
  buttonCoffee.classList.add('teste22')
  buttonFirePlace.classList.add('teste22')
  
})

btnDarkMode.addEventListener('click', function() {
  btnDarkMode.classList.add('hide')
  btnLightMode.classList.remove('hide')
  document.body.classList.remove('darkMode')
  timers.classList.remove('darkModeText')
  controles.classList.remove('controlsDarkMode')
  cards.classList.remove('cardDarkMode')
  buttonForest.classList.remove('teste22')
  buttonRain.classList.remove('teste22')
  buttonCoffee.classList.remove('teste22')
  buttonFirePlace.classList.remove('teste22')
  
})


const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,     
  resetControls: controls.resetControls
})

const sound = Sound()

Events({controls, timer, sound})