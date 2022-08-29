const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1

//Funcao callback
function handle(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) === randomNumber) {   
    document.querySelector('.screen2').classList.remove('hide')
    document.querySelector('.screen1').classList.add('hide')
    document.querySelector('.screen2 h2').innerText = `Voce acertou em ${xAttempts} tentativas`
  }

  inputNumber.value= ''
  xAttempts++
  console.log(randomNumber);
}

//Eventos

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

btnTry.addEventListener('click', handle)
btnReset.addEventListener('click', function() {
  window.location.reload()
})