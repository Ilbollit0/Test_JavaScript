/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca nei motori di ricerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Saluto personalizzato
   Crea due const "nome" e "cognome".
   Stampa con un template literal: "Ciao, mi chiamo Mario Rossi."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const nome = "Mario";
const cognome = "Rossi";
console.log(`Ciao, mi chiamo ${nome} ${cognome}.`);

/* ESERCIZIO 2 — Calcolatrice base
   Due numeri "a" e "b".
   Stampa le 6 operazioni nel formato "10 + 3 = 13":
   somma, differenza, prodotto, divisione, resto (%), elevamento (**).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const a = 10;
const b = 3;
console.log(`${a} + ${b} = ${a + b}`);
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${a / b}`);
console.log(`${a} % ${b} = ${a % b}`);
console.log(`${a} ** ${b} = ${a ** b}`);
/* ESERCIZIO 3 — Età nel tempo
   const annoNascita (scegli un anno).
   const annoCorrente = 2026.
   Stampa: età oggi, età tra 10 anni, età 5 anni fa.
   Formato: "Tra 10 anni avrai 35 anni."
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const annoNascita = 2004;
const annoCorrente = 2026;
const etaOggi = annoCorrente - annoNascita;

console.log(`Oggi ho ${etaOggi} anni`);
console.log(`Tra dieci anni avrò ${etaOggi + 10} anni`);
console.log(`Cinque anni fa avevo ${etaOggi - 5} anni`);

/* ESERCIZIO 4 — Maggiorenne?
   Variabile "eta".
   Calcola "maggiorenne" come "eta >= 18".
   Stampa: "Età: 25 — Maggiorenne: true"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const age = 25;
const adult = age >= 18;
console.log(`Età: ${age} Maggiorenne:${adult}`);

/* ESERCIZIO 5 — Tipo del valore
   Cinque variabili: una string, una number, una boolean, una null, una undefined.
   Stampa per ognuna: "nome è di tipo: string" usando typeof.
   In commento sopra la variabile null: spiega cosa ritorna typeof null e perché.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const text = "ciao";
const number5 = 42;
const vero = true;
// typeof null restituisce "object": è un bug storico di JavaScript
// presente fin dalla prima versione del linguaggio e mantenuto
// per non rompere il codice esistente. null NON è un oggetto.
const vuoto = null;
let indefinito;
console.log(`testo è di tipo: ${typeof testo}`);
console.log(`numero5 è di tipo: ${typeof number5}`);
console.log(`vero è di tipo: ${typeof vero}`);
console.log(`vuoto è di tipo: ${typeof vuoto}`);
console.log(`indefinito è di tipo: ${typeof indefinito}`);

/* ESERCIZIO 6 — === vs ==
   numero = 5
   stringa = "5"
   Stampa il risultato di "numero == stringa" e "numero === stringa".
   In commento, una riga: spiega la differenza.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num5= 5;
const string5= 5;
console.log(num5==sting5); //True
console.log(num5===string5);//Flase
// == confronta solo il valore convertendo i tipi (coercizione), === confronta valore E tipo.

/* ESERCIZIO 7 — Conversioni implicite
   Senza eseguire il codice, prevedi in commento il risultato di queste 4 espressioni.
   Poi stampale per verificare.
   - "5" + 3
   - "5" - 3
   - true + 1
   - "10" * "2"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7 — Conversioni implicite */
// "5" + 3     -> "53" (con una stringa, + concatena)
// "5" - 3     -> 2    (- converte la stringa in numero)
// true + 1    -> 2    (true diventa 1)
// "10" * "2"  -> 20   (* converte entrambe in numeri)

/* ESERCIZIO 8 — Classificazione numero
   Variabile "n".
   Usando % e operatori logici, stampa tre righe:
   "n è pari: true/false"
   "n è divisibile per 3: true/false"
   "n è pari E divisibile per 3: true/false"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n = 12;
const pari = n % 2 === 0;
const div3 = n % 3 === 0;
console.log(`${n} è pari: ${pari}`);
console.log(`${n} è divisibile per 3: ${div3}`);
console.log(`${n} è pari E divisibile per 3: ${pari && div3}`);



/* --EXTRA-- ESERCIZIO 9 — Triangolo
   Tre const "a", "b", "c" (lunghezze dei lati).
   Calcola perimetro.
   Determina il tipo: "equilatero", "isoscele", "scaleno".
   Stampa: "Triangolo isoscele, perimetro 15"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
