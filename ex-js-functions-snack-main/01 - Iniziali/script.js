/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziali(names) {
    return names.map (nomi => nomi [0]);  
}

// Invoca la funzione qui e stampa il risultato in console

let capital = iniziali(names)

console.log (capital[0]);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]