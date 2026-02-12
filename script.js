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

//Milestone 1
//Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente 
//due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. 
//La risposta finale (o output) sarà anch’essa da scrivere in console.

/* const kmEl = document.getElementById('km')
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
 
}) */

//Milestone 2
//Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form 
//in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il 
//prezzo. 
//Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
//(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul 
//prezzo). Questo richiederà un minimo di ricerca.

const userNameEl = document.getElementById('userName')
const kmEl = document.getElementById('km')
const etaEl = document.getElementById('eta')
const calcButtonEl = document.getElementById('calcButton')
const deleteButtonEl = document.getElementById('deleteButton')
const cardUserNameEl = document.getElementById('cardUserName')
const ticketTypeEl = document.getElementById('ticketType')
const carrozzaEl = document.getElementById('carrozza')
const codiceCpEl = document.getElementById('codiceCp')
const finalPriceEl = document.getElementById('finalPrice')

// Prezzo User
let userPrice = 0;

calcButtonEl.addEventListener('click', function(){
    const defaultPrice = 0.21 * kmEl.value;
    
    if (etaEl.value === 'u18') {
    userPrice = defaultPrice * 0.80;
}   else if (etaEl.value === 'o65') {
    userPrice = defaultPrice * 0.60;
}   else {
    userPrice = defaultPrice;
}  

cardUserNameEl.innerHTML = userNameEl.value;
ticketTypeEl.innerHTML = etaEl.value;
carrozzaEl.innerHTML = Math.floor(Math.random() * 6) + 1;
codiceCpEl.innerHTML = Math.floor(Math.random() * 100000) + 1;
finalPriceEl.innerHTML = userPrice.toFixed(2) + '€';

})

const formEl = document.querySelector('form')
formEl.addEventListener('submit', function(e){
    e.preventDefault()
})

deleteButtonEl.addEventListener('click', function() {
    userNameEl.value = '';
    kmEl.value = '';
    cardUserNameEl.innerHTML = '';
    ticketTypeEl.innerHTML = '';
    carrozzaEl.innerHTML = '';
    codiceCpEl.innerHTML = '';
    finalPriceEl.innerHTML = '';

})