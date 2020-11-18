function pari(value) {
	if (value%2 == 0){
		return true;
	} else {
		return false;
	}
}
function randomNumber(min, max)  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var domanda;
var button = confirm("Pari (ok) dispari (annulla)?");
if (button === true) {
  domanda = true;
	alert('hai scelto PARI')
} else {
  domanda = false;
	alert('Hai scelto DISPARI')
}

var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
var numeroComputer = randomNumber(1,5);
var sommaNumeri = numeroUtente + numeroComputer;
 document.getElementById('numero').innerHTML =sommaNumeri + '<br>'
var even = pari(sommaNumeri);


if (even == true && domanda==true) {
 document.getElementById('risultato').innerHTML = 'Hai vinto'
} else {
  document.getElementById('risultato').innerHTML = 'Hai perso'
}
