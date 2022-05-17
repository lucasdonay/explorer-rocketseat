alert("Digite dois numeros para a calculadora inteligente")

let n1 = prompt("Qual o primeiro número?");
let n2 = prompt("Qual o segundo número?");

var parImpar = n1 + n2;
var total = parImpar/2;
if(parImpar%2 == 0){
	alert("A soma dos dois numeros escolhidos é: Par");
}else{
	alert("A soma dos dois numeros escolhidos é: Impar");
}

let adi = alert(`A soma dos dois números é: ${Number(n1) + Number(n2)}`);
let sub = alert(`A subtração dos dois números é: ${Number(n1) - Number(n2)}`);
let multi = alert(`A multiplicação dos dois números é: ${Number(n1) * Number(n2)}`);
let div = alert(`A divisão dos dois números é: ${Number(n1) / Number(n2)}`);