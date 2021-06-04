
// function masyvas(reiksme, x) {

//     const arr = [];
 
//     for(let i = 0; i < x; i++) {
 
//        arr.push(reiksme);
 
//     }
 
//     return arr;
 
//  }
 
 
 
//  let AA = masyvas('A', 10);
 
//  let BB = masyvas('B', 10);
 
//  let CC = masyvas('C', 10);
 
 
 
//  console.log(AA);
 
//  console.log(BB);
 
//  console.log(CC);

function zebras (v) {
    return v * v + 38 - 37 + 40;
}

let A = 5;
let B = 6;
let C = 7;

let AA = zebras(A);
console.log(AA);
let BB = zebras(B);
console.log(BB);
let CC = zebras(C);
console.log(CC);

//3 masyvai su 3 kart iskviesta ta pacia funkcija, kad galima butu uzduoti ju ilgi. Viduje "A".

function aviete (long, fill) { 
    
    const masyvas = [];
    for (let i = 0; i < long; i++) {
     masyvas.push(fill);
    }
    return masyvas;
}

let braske = 2;   
let melyne = 5;
let agrastas = 7;

let braske2 = aviete(braske, 'Raudona')
console.log(braske2);
let melyne2 = aviete(melyne, 'Melyna')
console.log(melyne2);
let agrastas2 = aviete(agrastas, 'Zalia')
console.log(agrastas2);

//kuo uzpildyti vidu