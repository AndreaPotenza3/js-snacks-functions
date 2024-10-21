/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

text = ''

function saluto(text) {

    text = `ciao ${text}`

    return text

}

// Invoca la funzione qui e stampa il risultato in console

const hello = saluto(name)
console.log(hello)

//Risultato atteso se si passa 'Mario': // ciao Mario