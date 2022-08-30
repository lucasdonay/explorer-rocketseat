import { Modal } from "./modal.js"

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = e => {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  let result = IMC(weight, height)
  const message = `Seu imc e de ${result}`
  Modal.message.innerText = message
  Modal.open()
}


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
