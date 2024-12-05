/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocali = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.
function vowels(word) {
    return word.split('').filter(character => vocali.includes(character.toLowerCase()));
}

// Invoca la funzione qui e stampa il risultato in console
let jsVowel = vowels(word);

console.log(jsVowel);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)