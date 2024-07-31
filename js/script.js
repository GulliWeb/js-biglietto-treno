// STEP 1 - RACCOLTA DATI
const km = parseInt(prompt('Ciao ! quanti km vuoi percorrere sul treno oggi ?'))
const age = parseInt(prompt('Ora inserisci la tua età'))

// STEP 2 - ELABORAZIONE DATI + BONUS DUE NUMERI DECIMALI

let ticketPrice = km * 0.21
let result = ticketPrice.toFixed(2)
let message
// CONDIZIONI IF 
if (age < 18) {
    ticketPrice = ticketPrice * 0.20
    message = `Avendo ${age} anni hai diritto ad uno sconto del 20% ! il prezzo finale sarà ${result}€`;
} else if (age >= 65) {
    ticketPrice = ticketPrice * 0.20
    message = `Avendo ${age} anni hai diritto ad uno sconto del 40% ! il prezzo finale sarà ${result}€`;

    
}
console.log(message)

   


