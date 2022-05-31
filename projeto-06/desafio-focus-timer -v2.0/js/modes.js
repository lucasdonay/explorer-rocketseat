import {
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFirePlace,  
  btnDarkMode,
  btnLightMode,
  timers,
  controles,
  cards } from "./elements.js"

export function Modes() {

btnLightMode.addEventListener('click', lightMode)
btnDarkMode.addEventListener('click', darkMode)

function lightMode() {
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
}

function darkMode() {
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
}
}