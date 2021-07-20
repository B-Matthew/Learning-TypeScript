const button = document.getElementById('btn');
const input1 = document.getElementById('num1')! as HTMLInputElement; // ! determina il require sull'input
const input2 = document.getElementById('num2')! as HTMLInputElement; // ! determina il require sull'input

function add(num1: number , num2: number) {

    return num1 + num2;
}

button.addEventListener('click',  function() {

    console.log(add(+input1.value , +input2.value));  // il + davanti è il parseInt 
});

// note: nessun browser è compatibile con ts quindi usiamo il terminale per compilare il nostro file ts in js con il
// comando tsc nomefile.ts, in html linkiamo sempre il file compilato.js , ts ci permette di avere un codice
// senza errori, più pulito e più performante.