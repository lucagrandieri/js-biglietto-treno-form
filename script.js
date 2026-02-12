//Scrivere un programma che chieda all’utente:
//Il numero di chilometri da percorrere
//Età del passeggero
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.

// Chiedo i km
/* const kmUser = prompt('Quanti km vuoi percorrere?'); */
// Chiedo l'età
/* const ageUser = Number(prompt('Quanti anni hai?')); */
// Prezzo base
/* let defaultPrice = 0.21 * kmUser; */
// Prezzo User
/* let userPrice = 0; */
// Condizionali per scontistiche 
/* if (ageUser < 18) {
    userPrice = defaultPrice * 0.80
} else if (ageUser >= 65) {
    userPrice = defaultPrice * 0.60
} else {
    userPrice = defaultPrice
}
console.log(userPrice); */

//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
//La risposta finale (o output) sarà anch’essa da scrivere in console.

const kmEl = document.getElementById('km')
const etaEl = document.getElementById('eta')
const calcButtonEl = document.getElementById('calcButton')

// Prezzo User
let userPrice = 0;

calcButtonEl.addEventListener('click', function(){
    const defaultPrice = 0.21 * kmEl.value;
    
    if (etaEl.value === 'u18') {
    userPrice = defaultPrice * 0.80
}   else if (etaEl.value === 'o65') {
    userPrice = defaultPrice * 0.60
}   else {
    userPrice = defaultPrice
}  
console.log(userPrice);
 
})