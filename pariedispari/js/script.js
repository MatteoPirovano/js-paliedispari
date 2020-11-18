// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.
function pari(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function randomNumber(min, max)  {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var domanda;
var button = confirm("Pari?");
if (button === true) {
  domanda = true;
} else {
  domanda = false;
}

var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 5'));
console.log(numeroUtente);
var numeroComputer = randomNumber(1,5);
console.log(numeroComputer);
var sommaNumeri = numeroUtente + numeroComputer;
console.log(sommaNumeri);
var even = pari(sommaNumeri);
console.log(even);

if (even == true && domanda==true) {
 document.getElementById('risultato').innerHTML = 'Hai vinto'
} else {
  document.getElementById('risultato').innerHTML = 'Hai perso'
}
