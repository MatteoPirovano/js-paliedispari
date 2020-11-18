// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.
function palindroma(parola1,parola2) {
  if (parola1 == parola2){
    return true;
  } else {
    return false;
  }
}

var parola = prompt ('insirisci una parola');
var parolaCheck=' ';

for ( i = parola.length-1; i >= 0; i-- ) {
  parolaCheck += parola[i];
}

if (palindroma(parola, parolaCheck)==true) {
  document.getElementById('paliparola').innerHTML = 'la tua parola è palindroma';
} else {
  document.getElementById('paliparola').innerHTML = 'la tua parola non è palindroma';
};
