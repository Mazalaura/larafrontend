console.log ('_________________________1ND______________________');

// Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;

function zodis(fill) {

        const arr = [];
        arr.push(fill);
        return arr;
     
     }
     
     
     
     let AA = zodis('lape jau cia ir ji puola vistas');
     
     
     
     
     console.log(AA);
    

console.log ('_________________________2ND______________________');
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function zodis2(fill, long) { 
    
        const masyvas = [];
        for (let i = 0; i < long; i++) {
         masyvas.push(fill);
        }
        return masyvas;
    }
    
    let braske = 2;   
    let melyne = 5;
    let agrastas = 7;
    
    let BB = zodis2(braske, 'lape jau cia ir ji puola vistas');
    console.log(BB);
    let CC= zodis2(melyne, 'Melyna')
    console.log(CC);
    let DD = zodis2(agrastas, 'Zalia')
    console.log(DD);
    
    console.log ('_________________________1______________________');
//     Parašyti dvi funkcijas be parametrų red() ir green(). Funkcijos turi grąžinti atitinkamus stringus “red” ir “green”. Pademostruoti veikimą;

function color1() {
        let RED = 'red';
        return RED;
}

function color2() {
        let GREEN = 'green';
        return GREEN;
}

RED = color1();
GREEN = color2();
console.log(RED);
console.log(GREEN);

console.log ('_________________________2______________________');
// Parašyti funkciją color(what). Funkcija turi grąžinti splvą, priklausomai nuo argumento: jeigu what == 1 - stringą “white”, jeigu what == 2 - stringą “black”,  kitais atvejais - “no color”. Pademostruoti veikimą;

function color(what) {
        if (what == 1){
                let white = 'white';
                return white;
        }
        else if(what == 2) {
                let black = 'black';
                return black;
        }
        else {
                let nocolor = 'no color';
                return nocolor;
        } 
}

let white = color(1);
console.log(white);

let black = color(2);
console.log(black);

let nocolor = color(0);
console.log(nocolor);

console.log ('_________________________3______________________');
// Parašykite dvi funkcijas sum(a, b) ir diff(a, b). Pirma finkcija turi suskaičiuoti sumą (a+b), o kita skirtumą (a-b) su argumentais a, b ir grąžinti rezultatą. Pademostruoti veikimą;

// function sum() {
//  ab = a + b;
//  return ab;
// }
// function diff() {
//         AB = a - b;
//         return AB;
// }

// let a = 15;
// let b = 7;

// ab = sum();
// console.log(ab);
// AB = diff();
// console.log(AB);

console.log ('_________________________4______________________');
// Papildyti prieš tai buvusį uždavinį, kad a ir b parametrai turėtų default argumentus lygius 0. Pademostruoti veikimą;


console.log ('_________________________5______________________');
// Sukurkite masyvą ab [‘A’, ‘B’], masyvą cd [‘C’, ‘D’] ir masyvą fe [‘F’, ‘E’] . Masyvai nėra funkcijos viduje. Parašykite funkciją changeArray(array), kur sukeistų vietomis perduodamo masyvo reikšmes. Pademostruoti veikimą;

function changeArray(array) {
      
      let temp = array[0];
      array[0] = array [1];
        array[1] = temp;
}

let ab = ['A', 'B'];
let cd = ['C', 'D'];
let fe = ['F', 'E'];
console.log(cd);

changeArray(cd);
console.log(cd);

console.log(ab);
changeArray(ab);
console.log(ab);

console.log(fe);
changeArray(fe);
console.log(fe);

ab.push('G');

console.log ('_________________________6______________________');
// Sukurti objektą car1 {make: ’volvo’} ir car2 {make: ’mb’}. Objektai nėra funkcijos viduje. Sukurti funkciją changeMake(car, make), kuri keistų perduodamo objekto car savybę į perduodamo make argumento reikšmę. Pademostruoti veikimą;

function changeMake(car, makeq) {
        car.make = makeq;
        car1 = 'ZAZ';
}

let car1 = 'volvo';
let car2 = 'mb';

changeMake(car1);
console.log(car1);

// CALC

const sum = function(a, b) {
        return a + b;
}
const dif = function(a, b) {
        return a - b;
}

const multi = function(a, b) {
        return a * b;
}

function calculator(action, z, x) {
        return action(z, x)
}

let c = 10;
let d = 12;

console.log('+', calculator(sum, c, d));
console.log('-', calculator(dif, c, d));
console.log('*', calculator(multi, c, d));