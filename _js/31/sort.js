// sudelioti masyvai map set
const noSoEasy = [

    [1,8],

    new Set([7, 9]),

    new Set(),

    new Map([['a',2], ['b',2], ['c',2]]),

    [1,8,7],

    new Set([7, 9, 11]),

    [],

    new Set([7, 9, 71, 11, 45]),

    new Map([['a',2], ['c',2]]),

];

noSoEasy.sort((a, b) => {//b pirmas elementas
    if (a.constructor.name === b.constructor.name){ //klases vardo gavimo budas
            return 0; //nieko nedaro, grazina 0
    }
    if (a instanceof Array) {
            return -1;
    }
    if (a instanceof Map) {
        if(b instanceof Array){
            return 1;
        } 
        if(b instanceof Set) {
            return -1;
        }
    }
    if (a instanceof Set) {
        return 1; //reikia keisti kad butu gerai 
        
    }
})

    console.log(noSoEasy);
// 1. sortas

    const m1 = ['z', 's', 'a', 'd'];
    
const m1A = m1.slice();
m1A.sort();
    console.log(m1A);

    //2. sort + callback
 const m2A = m1.slice();

 m2A.sort((a, b) => a < b ? -1 : 0);

 console.log('2', m2A);



    // 3. sort + callback + desc

const m3A = m1.slice();

m3A.sort((a, b) => a > b ? -1 : 1);

  console.log(m3A);

// 4. Padaryti kad 2 rūšiavimas įvyktų paspaudus mygtuką.

document.querySelector('#rusiavimas2').addEventListener('click', () => {
    const m2A = m1.slice();
    m2A.sort((a, b) => a < b ? -1 : 1);
    console.log('4', m2A);
});

// 5. Padaryti kad 3 rūšiavimas įvyktų paspaudus mygtuką.
document.querySelector('#rusiavimas3').addEventListener('click', () => {
    const m3A = m1.slice();
    m3A.sort((a, b) => a > b ? -1 : 1);
      console.log('5', m3A);
});


const m2 = [

    ['zru', 'six'],

    ['rot', 'dzi'],

    ['uxm', 'ycw'],

    ['otr', 'sth']

];

// 6. pagal masyvo antrą elementą ASC
const m2B = m2.slice();

m2B.sort((a,b) => a[1] < b[1] ? -1 : 1);

console.log('6', m2B);

// 7 pagal masyvo pirmą elementą DESC

const m2C = m2.slice();

m2C.sort((a,b) => a[0] > b[0] ? -1 : 1);

console.log('7', m2C);

// 8 pagal masyvo antro elemento antrą simbolį ASC

const m2D = m2.slice();

m2D.sort((a,b) => a[1][1] < b[1][1] ? -1 : 1);

console.log('6', m2B);

// 9 pagal masyvo pirmo elemento trčią simbolį DESC

const m2E = m2.slice();

m2E.sort((a,b) => a[0][2] < b[0][2] ? -1 : 1);

console.log('6', m2E);


const m3 = [

    new Map([['dog', 5], ['cat', 7], ['snake', 58]]),

    new Map([['snake', 33], ['dog', 14], ['cat', 8]]),

    new Map([['dog', 51], ['cat', 77], ['snake', 23]]),

    new Map([['cat', 10], ['dog', 23], ['snake', 17]])

];

// 10. pagal katę DESC

const m10A = m3.slice();

m10A.sort((a,b) => a.get('cat') > b.get('cat') ? -1 : 1);


console.log('10', m10A);

// 11 pagal šunį ASC

const m11A = m3.slice();

m11A.sort((a,b) => a.get('dog') < b.get('dog') ? -1 : 1);


console.log('11', m11A);

// 12 pagal gyvatės iš šuns sumą DESC

const m12A = m3.slice();

m12A.sort((a, b) => (a.get('dog') + a.get('snake')) > (b.get('dog') + b.get('snake')) ? -1 : 1);

console.log('12', m12A);

const m4 = [

    [2,5,8,9,7,4,5,2,1,5,8,9,3],

    [3,6,9,8,5,4],

    [2,5,4,7,9,5,4,1,2,3,6,9,8,4,7],

    [5,2,1,4,7,8,5,3,1]

];

// 12a pagal masyvų ilgį  ASC
// length

// 13 pagal masyvų elementų sumą ASC

const m13A = m4.slice();

m13A.sort((a,b) => {
    let aSum = 0;
    a.forEach(v => aSum += v);
    let bSum = 0;
    b.forEach(v => bSum += v);
    return aSum - bSum;
});


console.log('13', m13A);

const m13rA = m4.slice();

m13rA.sort((a, b) => a.reduce((sum, v)=> sum + v) - b.reduce((sum, v)=> sum + v));

console.log('13red', m13rA);


const m5 = [4,5,6,9,45,4,7,8,5,2,4,8,2,1,3,32,41,85,6,8,5,6,78,11,6,8,];

// 14 su filter ištrinti skaičius didesnius nei 7

const m14A = m5.filter(v => v <= 7);
const nice= m5.filter(v => 7 <= v);  // istrina visus mazesnius uz 7

console.log(m14A);
console.log(nice);

// 15 su filter iš m3 masyvo su mapais ištrinti tuos mapus, kuriuose šuo mažiau nei 10

const m15A = m3.filter(v => 10 <= v.get('dog'));
