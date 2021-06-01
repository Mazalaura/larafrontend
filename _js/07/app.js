function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


for(var i = 0; i < 5; i++) {
    if (i ===3 ) {
        break;
    }

    console.log(i);
}
console.log('The End')

for(var i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

for(var i = 0; i < 5; i++) {
    if (i !== 3) {
    console.log(i);
}
}
senelis: for(var z = 0; z < 5; z++) {
tevas: for(var j = 0; j < 5; j++) {
   pats: for(var i = 0; i < 5; i++) {
    if (j === 3) {
        continue senelis; //etikete,pagal ka breikinam
    }

    console.log(j, i, z);
    }
}
}

var A = 5;
if(A === 6) {
    console.log('A === 6');
}
else if(A === 8) {
    console.log('A === 8');
}
else if(A === 10) {
    console.log('A === 10');
}
else {
    console.log('nei 6, nei 8, nei 10');
}

switch(A) {
    case 6: console.log('A==6');
    break;
    case 8: console.log('A==8');
    break;
    case 10: console.log('A==10');
    break;
    default: console.log('nei 6, nei 8, nei 10');
}

//OMNIVA
// S,M,L,XL

// var pack = 'M'
// tt:do {
// switch(pack) {
//     case S: console.log('galima deti i S');
//     if(rand(0,1)) {
//         continue;
//     }
//     case M: console.log('galima deti i M');
//     if(rand(0,1)) {
//         continue;
//         }
//     case L: console.log('galima deti i L'); 
//     if(rand(0,1)) {
//         continue;
//         }
//     default: console.log('galima deti i XL');
//     if(rand(0,1)) {
//         console.log('nera vietos')
//         continue tt;
//         }   
//         }
// }while(true);

// Įvedami skaičiai -a, b, c –kraštinių ilgiai, trys kintamieji (naudokite ​rand()​ funkcija nuo 1 iki 10). Parašykite skriptą, kuris nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų naudojant console.log(). 
console.log('______________________________3___________________________________');

var a1 = rand(1, 10);
var a2 = rand(1, 10);
var a3 = rand(1, 10);
console.log(a1, a2, a3);

if(a1+a2>3 && a2+a3>a1 && a1+a3>a2) {
    console.log('galima');
}
else {
    console.log('negalima');
}

// Sukurkite keturis kintamuosius ir ​rand()​ funkcija sugeneruokite jiems 
// reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. Rezultatus atspauzdinkite su console.log()
console.log('___________________4___________________________________');

var b1 = rand(0, 2);
var b2 = rand(0, 2);
var b3 = rand(0, 2);
var b4 = rand(0, 2);

var nuliai = 0, vienetai = 0, dvejetai = 0;

console.log(b1, b2, b3, b4);

if(b1===2) {
    dvejetai++;
}
if(b2===2) {
    dvejetai++;
}
if(b3===2) {
    dvejetai++;
}
if(b4===2) {
    dvejetai++;
}

vienetai = b1 + b2 + b3 + b4 -(dvejetai * 2);
nuliai = 4 - vienetai - dvejetai;
console.log('nuliai', nuliai, 'vienetai', vienetai, 'dvejetai', dvejetai);

// Naudokite funkcija rand(). Atspausdinkite 3 skaičius naudodami console.log() nuo -10 iki 10. Prie skaičių mažesnių už 0 iš abiejų pusių atspauzdinkite “+” simbolius,  didesnių už 0 iš abiejų pusių atspauzdinkite “-” simbolius, o prie 0 “*” simbolius

console.log('___________________5___________________________________');

var c1 = rand(-10, 10);
var c2 = rand(-10, 10);
var c3 = rand(-10, 10);

if(c1 > 0) {
    console.log('-', c1, '-');
}
else if(c1 < 0) {
    console.log('+', c1, '+');
}
else {
    console.log('*', c1, '*');
}

if(c2 > 0) {
    console.log('-', c2, '-');
}
else if(c2 < 0) {
    console.log('+', c2, '+');
}
else {
    console.log('*', c2, '*');
}

if(c3 > 0) {
    console.log('-', c3, '-');
}
else if(c3 < 0) {
    console.log('+', c3, '+');
}
else {
    console.log('*', c3, '*');
}

// Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite skriptą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą su console.log() kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​rand()​ funkcija nuo 5 iki 3000.
console.log('___________________6___________________________________');

var zvakes = 1;
var kiekis = rand(5, 3000);

suma = kiekis * zvakes;
if(suma >= 2000) {
    console.log(suma, 'Eur.', 'taikoma 4% nuolaida');
}
else if(suma >= 1000) {
    console.log(suma, 'Eur.', 'taikoma 3% nuolaida');
}
else {
    console.log(suma, 'Eur.', 'nuolaida netaikoma');
}

// Naudokite funkcija rand(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Ir aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite su console.log()
console.log('___________________7___________________________________');

var d1 = rand(0, 100);
var d2 = rand(0, 100);
var d3 = rand(0, 100);

var vidurkis1, vidurkis2;

console.log(d1, d2, d3);
vidurkis1 = (d1 + d2 + d3) / 3;
console.log('aritmetinis vidurkis', vidurkis1);