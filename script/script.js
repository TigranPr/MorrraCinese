const btn = document.getElementById('inizia'); // Pulsante per iniziare il gioco
const scelta = document.getElementById('scelta'); // Sezione dove l'utente sceglie foglia, forbice o sasso
const risultato = document.getElementById('risultato'); // Sezione che mostra il risultato della partita

const you = document.getElementById('you'); // Elemento per visualizzare la scelta dell'utente
const cpu = document.getElementById('cpu'); // Elemento per visualizzare la scelta della CPU

const foglia = document.getElementById('foglia'); // Pulsante per scegliere 'foglia'
const forbice = document.getElementById('forbice'); // Pulsante per scegliere 'forbice'
const sasso = document.getElementById('sasso'); // Pulsante per scegliere 'sasso'

const puntYou = document.getElementById('punteggioYou'); // Elemento che visualizza il punteggio dell'utente
const puntCpu = document.getElementById('punteggioCpu'); // Elemento che visualizza il punteggio della CPU

// Variabili per memorizzare la scelta dell'utente e della CPU
let sceltaYou;
let sceltaCpu;

// Variabili per memorizzare i punteggi di utente e CPU
let contYou = 0;
let contCpu = 0;

// Evento associato al pulsante "Inizia" che mostra le scelte possibili all'utente
btn.addEventListener('click', () => {
  scelta.style.display = 'block'; // Mostra la sezione delle scelte
  btn.style.visibility = 'hidden'; // Nasconde il pulsante "Inizia"
  you.style.backgroundImage = ""; // Resetta l'immagine della scelta dell'utente
  cpu.style.backgroundImage = ""; // Resetta l'immagine della scelta della CPU
  risultato.style.display = "none"; // Nasconde il risultato
});

// Eventi associati ai pulsanti "foglia", "forbice" e "sasso" per gestire la scelta dell'utente
foglia.addEventListener('click', () => {
  you.style.backgroundImage = "url('./immagini/foglia.png')"; // Imposta l'immagine "foglia" come scelta dell'utente
  sceltaYou = 'foglia'; // Memorizza la scelta dell'utente
  sceltaUtente(); // Chiama la funzione per gestire la scelta dell'utente
});

forbice.addEventListener('click', () => {
  you.style.backgroundImage = "url('./immagini/forbice.png')"; // Imposta l'immagine "forbice" come scelta dell'utente
  sceltaYou = 'forbice'; // Memorizza la scelta dell'utente
  sceltaUtente(); // Chiama la funzione per gestire la scelta dell'utente
});

sasso.addEventListener('click', () => {
  you.style.backgroundImage = "url('./immagini/sasso.png')"; // Imposta l'immagine "sasso" come scelta dell'utente
  sceltaYou = 'sasso'; // Memorizza la scelta dell'utente
  sceltaUtente(); // Chiama la funzione per gestire la scelta dell'utente
});

// Funzione che gestisce la scelta dell'utente e determina l'esito del gioco
function sceltaUtente() {
  scelta.style.display = 'none'; // Nasconde la sezione delle scelte
  risultato.style.display = 'block'; // Mostra la sezione dei risultati
  btn.style.visibility = 'visible'; // Rende di nuovo visibile il pulsante "Inizia"

  // Genera una scelta casuale per la CPU (0 = foglia, 1 = forbice, 2 = sasso)
  const Cpu = Math.floor(Math.random() * 3);

  // Imposta l'immagine della scelta della CPU in base al numero casuale generato
  if(Cpu === 0) {
    cpu.style.backgroundImage = "url('./immagini/foglia.png')";
    sceltaCpu = 'foglia'; // Memorizza la scelta della CPU come 'foglia'
  } 
  if(Cpu === 1) {
    cpu.style.backgroundImage = "url('./immagini/forbice.png')";
    sceltaCpu = 'forbice'; // Memorizza la scelta della CPU come 'forbice'
  } 
  if(Cpu === 2) {
    cpu.style.backgroundImage = "url('./immagini/sasso.png')";
    sceltaCpu = 'sasso'; // Memorizza la scelta della CPU come 'sasso'
  }

  // Controlla se c'è un pareggio
  if(sceltaYou === sceltaCpu) {
    risultato.innerHTML = 'Patta!'; // Imposta il testo del risultato come 'Patta'
  } 
  // Condizioni per cui l'utente vince
  else if (
    (sceltaYou === 'foglia' && sceltaCpu === 'sasso') || // Foglia batte Sasso
    (sceltaYou === 'sasso' && sceltaCpu === 'forbice') || // Sasso batte Forbice
    (sceltaYou === 'forbice' && sceltaCpu === 'foglia')   // Forbice batte Foglia
  ) {
    risultato.innerHTML = 'Hai vinto!'; // Imposta il testo del risultato come 'Hai vinto'
    contYou++; // Incrementa il punteggio dell'utente
    puntYou.innerHTML = contYou; // Aggiorna il punteggio visualizzato dell'utente
  } 
  // Condizione per cui la CPU vince
  else {
    risultato.innerHTML = 'Hai perso!'; // Imposta il testo del risultato come 'Hai perso'
    contCpu++; // Incrementa il punteggio della CPU
    puntCpu.innerHTML = contCpu; // Aggiorna il punteggio visualizzato della CPU
  }
}
