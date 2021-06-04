function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var komoda = ['obuolys', 'suo', 'kate', 'gyvate', '58', 'geles plastikines'];
var tryskintamieji = [rand(1, 1), rand(1, 10), rand(1, 10), komoda];

// var str = 'koja';
// str++;

komoda[0] = 'kriause';
komoda[1] = 'anakonda';
komoda[2]++;

console.log(komoda[2]);
tryskintamieji[2] = 'nieko nera';

console.log('1', tryskintamieji[1])

console.log('masyvas', komoda);
console.log('masyvas', tryskintamieji);

// console.log('koja', str);
console.log('masyvo ilgis', komoda.length);

console.log('masyvo paskutinis', komoda[komoda.length - 1]);

// console.log('stalcius Nr.', +0, komoda[0]);
// console.log('stalcius Nr.', +1, komoda[1]);
// console.log('stalcius Nr.', +3, komoda[3]);
// console.log('stalcius Nr.', +4, komoda[4]);
// console.log('stalcius Nr.', +5, komoda[5]);

// komoda[7] = 'pele';

komoda.push();
komoda.push ('kumele', 'dramblys'); //prideda i gala
komoda.unshift('padanga'); //prideda i pradzia

var ka = komoda.shift();

console.log(ka);
console.log(komoda.pop());
console.log(komoda.pop());

console.log('push', komoda.push('dinozauras'));

for(var index = 0; index < komoda.length; index++){
    console.log('index', komoda[index]);
}
komoda.push();



var b = komoda.indexOf('geles plastikines');

komoda.splice('splice', komoda.splice(b, 1));

var tuscias = [];

console.log(komoda.indexOf('suo'));

var trinti;
var copy;
var sk = [58, 45, 32, 47, 58, 32, 100, 147, 32];
copy = sk;
// console.log('sk', copy);
console.log ('sk', sk.slice());

while((trinti = sk.indexOf(32)) >= 0){
    sk.splice(trinti, 1);
}

console.log('_____________________metodas push__________________________');

komoda.push('pele');
komoda.push('kumele', 'dramblys');
console.log(komoda);
//prideda i paskutini indeksa

console.log('_____________________metodas unshift__________________________');

komoda.unshift('padanga');
console.log(komoda);
//prideda i pirma indexa

console.log('_____________________metodas shift__________________________');

komoda.shift();
komoda.shift();
console.log(komoda.shift());
console.log(komoda.shift());
console.log(komoda);
//istrina is masyvo pradzios

console.log('_____________________metodas pop__________________________');

komoda.pop();
console.log(komoda.pop());
console.log(komoda);
//isima is masyvo pabaigos

console.log('_____________________Nr 1__________________________');

//Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

 let masyvas = [];

for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5, 25));
}

console.log('start', masyvas.slice());

console.log('_____________________Nr 2A__________________________');

// Naudodamiesi 1 uždavinio masyvu:
// Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;

let did10  = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        did10++;
    }
}
console.log('did10', did10);


console.log('_____________________Nr 2B__________________________');
// Raskite didžiausią masyvo reikšmę ir jos indeksą;

let did = 5;
let didIndex = [];

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > did) {
        did = masyvas[i];
        didIndex = []; //isvalymas masyvo
    }
    if(masyvas[i]  === did) {
        didIndex.push(i);
    }
}
console.log('did, didIndex', did, didIndex);

console.log('_____________________Nr 2C__________________________');
// Suskaičiuokite visų porinių indeksų reikšmių sumą;

let indexSuma = 0;
let indexNSuma = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0) {
    indexSuma += masyvas[i]; //poriniai
    }
    else {
    indexNSuma += masyvas[i]; // neporiniai, nereikalauti salygoj
    }
}
console.log('indexSuma', indexSuma, indexNSuma);

console.log('_____________________Nr 2D__________________________');
// Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

const naujasMasyvas = []; // neleidzia masyvo pakeisti
for (let i = 0; i < masyvas.length; i++) {
    naujasMasyvas.push(masyvas[i] - i);
}
console.log('naujasMasyvas', naujasMasyvas);
// console.log(typeof null);

// const s = '46546';

// s[4]= 'A';

// console.log(!!(s[4] = 'A'), s, s[4]);

console.log('_____________________Nr 2E__________________________');
// Papildykite masyvą papildomais 10 elementų su reikšmėmis nuo 5 iki 25, kad bendras masyvas padidėtų iki indekso 39;

for (let i = 0; i < 10; i++) {
    masyvas.push(rand(5, 25));
}
console.log('masyvas', masyvas.slice());

console.log('_____________________Nr 2F__________________________');
// Iš masyvo elementų sukurkite du naujus masyvus. Vienas turi būti sudarytas iš neporinių indekso reikšmių, o kitas iš porinių;

const porMas= [];
const neporMas = [];

for (let i = 0; i < masyvas.length; i++) {
    if (i % 2 === 0){
    porMas.push(masyvas[i]); //poriniai
    }
    else {
        neporMas.push(masyvas[i]); // neporiniai, nereikalauti salygoj
    }
}
console.log('porMas, neporMas', porMas, neporMas);

console.log('_____________________Nr 2G__________________________');
// Pirminio masyvo elementus su poriniais indeksais padarykite lygius 0 jeigu jie didesni už 15;

for (let i = 0; i < masyvas.length; i += 2) {
    if (masyvas[i] > 15) {
        masyvas[i] = 0;
    }
}

console.log('masyvas', masyvas.slice());

console.log('_____________________Nr 2H__________________________');
// Suraskite pirmą (mažiausią) indeksą, kurio elemento reikšmė didesnė už 10;

let index1 = -1;
let ii = 0;

do {
 if (masyvas[ii] > 10) {
    index1 = ii;
    }
    ii++;
} while(index1 === -1 && ii < masyvas.length);

console.log('index1', index1);

console.log('_____________________Nr 2I__________________________');
// Naudodami funkciją splice() iš masyvo ištrinkite visus elementus turinčius porinį indeksą;

for (let i = 0; i < masyvas.length; i++) {
    masyvas.splice(i, 1);
}
console.log('masyvas', masyvas.slice());

console.log('_____________________Nr 3__________________________');
// Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

const abcd = ['A', 'B', 'C', 'D'];

const masyvas3 = [];

for (let i = 0; i < 200; i++) {
    masyvas3.push(abcd[rand(0, 3)]);
}

console.log('masyvas3', masyvas3.slice());

const counter = [0, 0, 0, 0];

for (let i = 0; i < masyvas.length; i++) {
    let index = abcd.indexOf(masyvas3[i]);
    counter[index]++;
    // counter[ abcd.indexOf(masyvas3[i]) ]++;
}

console.log('counter', counter);

console.log('_____________________Nr 4__________________________');
// Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.

console.log('_____________________Nr 5__________________________');
// Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

console.log('_____________________Nr 6__________________________');
// Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.

console.log('_____________________Nr 7__________________________');
// Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.

console.log('_____________________Nr 8__________________________');
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.

console.log('_____________________Nr 9__________________________');
// Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
