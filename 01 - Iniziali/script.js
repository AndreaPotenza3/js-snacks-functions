/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const indexNames =[]


// Dichiara la funzione qui.

//console.log(indexLetters(names))

const indexChars = names.map(index => index.charAt(0));
console.log(indexChars)

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
function indexArrays(array) {
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const indexC = element.charAt(0)
    
    

   
}
}
console.log(indexArrays(names))