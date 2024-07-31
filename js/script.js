// STEP 0 INDIVIDUALIZZAZIONE PARAMETRI
const finalPrice = document.getElementById('finalPrice')
const infoBonus = document.getElementById('infoBonus')

// STEP 1 - RACCOLTA DATI
const km = parseInt(prompt('Ciao ! quanti km vuoi percorrere sul treno oggi ?'))
const age = parseInt(prompt('Ora inserisci la tua età'))

// STEP 2 - ELABORAZIONE DATI + BONUS DUE NUMERI DECIMALI
let ticketPrice = km * 0.21
let message = ` Il prezzo del biglietto sarà di ${ticketPrice.toFixed(2)} €`

// CONDIZIONI IF 
if (age < 18) {
    let discount = ticketPrice * 0.20
    let tot = ticketPrice - discount
    message = `Avendo ${age} anni hai diritto ad uno sconto del 20% ! il prezzo finale, percorrendo ${km} km sarà di ${tot.toFixed(2)}€`;
} else if (age > 65) {
    discount = ticketPrice * 0.40
    tot = ticketPrice - discount
    message = `Avendo ${age} anni hai diritto ad uno sconto del 40% ! il prezzo finale, percorrendo ${km} km sarà di ${tot.toFixed(2)}€`;
}

// STEP 3 - OUTPUT
console.log(message)
finalPrice.innerText = message
infoBonus.innerText = ` Il prezzo prima dello sconto era di ${ticketPrice} € `



   


