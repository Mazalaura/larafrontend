function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
console.log ('_________________________calc______________________');

// const plus = function(a, b) { 
//         let s = a + b;
//         return s;
// }

// function sum(a, b, c, p) {
//         let s = a + p(b, c)
//         return s;
// }



// function sum(a, b, c) {
//         const plus = function(a, b) {
//                 let s = a + b;
//                 return s;
//         }
//         let s = a + plus(b, c)
//         return s;
// }

// [1,5,8].forEach(function(a) {
//         console.log(a);
// })

// const fx2 = function(h) {
//         let r = 2 * h;
//         return r;
// }

const A = 1;
const B = 3;
const C = 2;

const HH = 20;
const P = 100;

function sum(a, b, c, funX2) {
        let s = a + b + funX2(c);
        return s;
}
const resA = sum( A, B, C, h => 5 * h );

const resB = sum(A, B, C, function(h) {
        let r = 5 * h;
        return r;
});





console.log('res', resA, resB);

console.log ('_________________________7______________________');
// Paršyti funkcija kuri į masyve visas jo reikšmes pakeistų į atsitiktinai sugeneruotais spalvų stringais: “red”, “blue” arba “green”. Funkcija turi turėti du argumentus, vienas generuojamas masyvas, o kitas funkcija - splvų generatorius. Pademostruoti veikimą;

const m1 = [1, 2, 3];

function f7(mas, fun) {
        for(let i = 0; i < mas.length; i++) {
        mas[i] = fun();
        }
}

f7(m1, () => ['red', 'blue', 'green'][rand(0, 2)]);

f7(m1, function(){
        return ['red', 'blue', 'yellow'][rand(0, 2)];

});

const color1 = () => ['red', 'blue', 'yellow'][rand(0, 2)];

const color2 = function(){
        return ['red', 'blue', 'yellow'][rand(0, 2)];
}

f7(m1, color1);

f7(m1, color2);

console.log(m1);

console.log ('_________________________8______________________');
// Yra masyvas [8, 9, 7, 6, 12, 48, 0, 6] Išrūšiuoti masyvą naudojan sort ir atskirą rūšiavimo funkciją. 

const sk = [8, 9, 7, 6, 12, 48, 0, 6];

sk.sort((a, b) => a - b);
console.log(sk);
sk.sort((a, b) => b - a);
console.log(sk);

console.log ('_________________________9______________________');
// Yra masyvas [“Pingvinas”, “Zebras”, “Voras”, “Vilkas”, “Zuikis”]. Sukurti naują masyvą naudojant map ir atskirą funkciją, kuriame atitinkami indeksai atitiktų žodžių ilgį. Pademostruoti veikimą;

const gyvunai = ['Pingvinas', 'Zebras', 'Voras', 'Vilkas', 'Zuikis'];

const map1 = gyvunai.map (x => x.length);
console.log(map1);


console.log ('_________________________10______________________');
// Yra masyvas [8, “B”, 9, 7, “A”, 6, 12, “B”, “B”, “A”, 48, 0, “A”, 6] Išrūšiuoti masyvą nuo didžiausio iki mažiausio naudojant sort ir atskirą rūšiavimo funkciją. “A” raidės turi eiti pačiam gele, o “B” raidės pačiame priekyje. Pademostruoti veikimą;

const max = [8, 'B', 9, 7, 'A', 6, 12, 'B', 'B', 'A', 48, 0, 'A', 6];

max.sort((a, b) => {
        if(a === 'A') return 1;
        if(b === 'B') return 1;
        if(b === 'A') return -1;
        if(a === 'B') return -1;
        return b - A;
})
console.log(max);
