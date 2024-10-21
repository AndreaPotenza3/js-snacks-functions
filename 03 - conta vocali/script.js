/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

let vocali = 0

function numVocali(text) {
    
    for (let i = 0; i < text.length; i++) {
        const element = i
        if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
            vocali++
            
        }
        
        return vocali
        
    }
}

const vowels = numVocali(word)
console.log(vowels)

// Invoca la funzione qui e stampa il risultato in console

//const vocals = numVocali(word)
//console.log(vocals) 
//const includeW =word.includes('a')
//console.log(includeW)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)



//for (let index = 0; index < word.length; index++) {
    //const element = word[index];
    //if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u'){
        //vocali++
    //}
    
//}
//console.log(vocali)
