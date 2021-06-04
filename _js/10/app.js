function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log('_____________________Nr 4__________________________');
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

const abcd = ['A', 'B', 'C', 'D'];
const masyvai = [[], [], []];

const triraidis = [];
const uniValue = [];
const uniComb = [];


for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 200; i++) {

        masyvai[j].push(abcd[rand(0, 3)]);
    }
}

for (let i = 0; i < 200; i++) {

    triraidis.push(masyvai[0][i]+masyvai[1][i]+masyvai[2][i]);
}

top: for (let i = 0; i < triraidis.length; i++) {
//unikali
    if (uniComb.indexOf(triraidis[i]) === -1){  
    uniComb.push(triraidis[i]);
    }
//vienetine
    let now = triraidis[i];
    let counter = 0;
    for (let j = 0; j < triraidis.length; j++) {
        if (triraidis[j] === now) { 
            counter++;
            if (counter > 1) {
                continue top;
            }
        }
    }
    uniValue.push(now);
}


console.log(uniValue, uniComb, triraidis);


console.log('_____________________Nr 5__________________________');
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

const masyvai5 = [[], []];
let count = 0;

for (let j = 0; j < 2; j++) {
    do {
        count++;
        let random = rand(100, 999);
            masyvai5[j].push(random);
    }while(masyvai5[j].length < 100);
}

console.log(masyvai5, count);

console.log('_____________________Nr 6__________________________');
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.

// const m6 = [];

// for (let j = 0; j < masyvai5[0].length; j++) {
//     if (masyvai5[1].indexOf(masyvai5[0][i]) === -1) {
//         m6.push(masyvai5[0][i]);
//     }
// }

// console.log(m6);

// console.log('_____________________Nr 7__________________________');
// // Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.

// const m7 = [];

// for (let j = 0; j < masyvai5[0].length; j++) {
//     if (masyvai5[1].indexOf(masyvai5[0][i]) === -1) {
//         m6.push(masyvai5[0][i]);
//     }
//     else {
//         m7.push(masyvai5[0][i]);
//     }
// }

// console.log(m7);

console.log('_____________________Nr 8__________________________');
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.

const funny = [];

for (let i = 0; i < masyvai5[0].length; i++) {
    funny[masyvai5[0][i] = masyvai[1][i]];
}

console.log(funny);

console.log('_____________________Nr 9__________________________');
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.

const fm = [];

fm.push(rand(5, 25), rand(5, 25));

for (let j = 2; j < 10; j++) {

    let sum = fm[j-1] + fm[j-2];
    fm.push(sum);

}
console.log(fm);

console.log('_____________________Objektai_________________________');

const obj = {forest: 'Gump', digit2: 555, arr: [5,8,9]};
obj.color = 'Black';
obj.what = 'Cat';
obj.digit = '888';
obj.abc = {a: 'A', b: 'B', c: 'C'};

console.log(obj);
console.log('color', obj.color)
console.log('B', obj.abc.b)

let obj2 = obj;


let A = 5;
let B = 12;
A = B; //5<------12
B = 45;

let T;
let C = {A: 5};
let D = {B: 12};

D = C; //dabar D rodys i C
T = C; //dabar T rodys i C
D.A = 123;

console.log('C:', C, 'D:', D, 'T:', T);
console.log('A:', A, 'B:', B);

obj.f2 = 'feDu';
obj.f1 = 'feVienas';
obj.f3 = 'feTrys';

const prop = 'f' + rand(1, 3);

console.log(obj[prop]);
console.log('_____________________Objektai_________________________');

for (let i in obj) {
    console.log(i, obj[i]);
}

let zz = [2, 3];

zz.forEach(j, i) => console.log(j, i));

for (let i in zz) {
    // console.log(i, zz[i]);
}