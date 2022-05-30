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
  secondsDisplay,} from "./elements.js"

let btnLightMode = document.querySelector('.ligthMode')
let btnDarkMode = document.querySelector('.darkMode')
let timers = document.querySelector('.timers')
let controles = document.querySelector('.controles')
let cards = document.querySelector('.card')

btnLightMode.addEventListener('click', function() {
  btnLightMode.classList.add('hide')
  btnDarkMode.classList.remove('hide')
  document.body.classList.add('darkMode') 
  timers.classList.add('darkModeText')
  controles.classList.add('controlsDarkMode')
  cards.classList.add('cardDarkMode')
  
})

btnDarkMode.addEventListener('click', function() {
  btnDarkMode.classList.add('hide')
  btnLightMode.classList.remove('hide')
  document.body.classList.remove('darkMode')
  timers.classList.remove('darkModeText')
  controles.classList.remove('controlsDarkMode')
  cards.classList.remove('cardDarkMode')
  
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
  resetControls: controls.reset
})

const sound = Sound()

Events({controls, timer, sound})