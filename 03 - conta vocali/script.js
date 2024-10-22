/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let vocali = 0

function numVowels(text) {
    
    for (let i = 0; i < text.length; i++) {

        text = text.toLowerCase()

        const letter = text[i]


        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            vocali = vocali + 1
            
        }
            
    }

    return vocali

}



// Invoca la funzione qui e stampa il risultato in console

console.log(numVowels(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
