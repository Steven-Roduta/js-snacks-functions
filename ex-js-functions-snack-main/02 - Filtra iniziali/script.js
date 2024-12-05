/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function lettera(names){
    return names.filter(nomi => nomi [0] === 'A' );
}


// Invoca la funzione qui e stampa il risultato in console

let groupNames = lettera(names);

console.log (groupNames);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]