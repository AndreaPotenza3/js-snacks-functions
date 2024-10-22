/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function returnByLetter(array, letter = '') {

    const result = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        if(element[0].toLocaleLowerCase() === letter.toLocaleLowerCase()) {
            
            result.push(element)
        } 
    }

    return result
}

// Invoca la funzione qui e stampa il risultato in console

console.log(returnByLetter(names, 'A'))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]