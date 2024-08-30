const btn = document.getElementById('inizia');
const scelta = document.getElementById('scelta');
const risultato = document.getElementById('risultato');

const you = document.getElementById('you');
const cpu = document.getElementById('cpu');

const foglia = document.getElementById('foglia');
const forbice = document.getElementById('forbice');
const sasso = document.getElementById('sasso');

const puntYou = document.getElementById('punteggioYou');
const puntCpu = document.getElementById('punteggioCpu');


let sceltaYou;
let sceltaCpu;

let contYou = 0;
let contCpu = 0;
btn.addEventListener('click',() =>{
scelta.style.display = 'block';
btn.style.visibility = 'hidden';
you.style.backgroundImage = "";
cpu.style.backgroundImage = "";
risultato.style.display = "none";
});

foglia.addEventListener('click', () => {
you.style.backgroundImage = "url('/immagini/foglia.png')";
sceltaYou = 'foglia';
sceltaUtente();
});

forbice.addEventListener('click', () => {
you.style.backgroundImage = "url('/immagini/forbice.png')";
sceltaYou =  'forbice';
sceltaUtente();
});

sasso.addEventListener('click', () => {
you.style.backgroundImage = "url('/immagini/sasso.png')";
sceltaYou = 'sasso';
sceltaUtente();
});

function sceltaUtente() {
  scelta.style.display = 'none';
  risultato.style.display = 'block';
  btn.style.visibility = 'visible';
  const Cpu = Math.floor(Math.random() * 3);

  if(Cpu == 0) {
    cpu.style.backgroundImage = "url('/immagini/foglia.png')";
    sceltaCpu = 'foglia';
  } 
  if(Cpu == 1) {
    cpu.style.backgroundImage = "url('/immagini/forbice.png')";
    sceltaCpu = 'forbice';
  } 
  if(Cpu == 2) {
    cpu.style.backgroundImage = "url('/immagini/sasso.png')";
    sceltaCpu ='sasso';
  } 
  if(sceltaYou == sceltaCpu) {
          risultato.innerHTML = 'Patta!';
  }
  if(sceltaYou > sceltaCpu){
     risultato.innerHTML = 'Hai vinto!';
     contYou++;
     puntYou.innerHTML = contYou;
  }
  if(sceltaYou < sceltaCpu) {
     risultato.innerHTML = 'Hai perso!';
     contCpu++;
     puntCpu.innerHTML = contCpu;
  }
};
