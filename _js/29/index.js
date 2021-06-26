
const ar = [77,99,105,42];
const obj = {a:55, z:77, r:98, y:42};

for (const val of ar) {
    console.log(val);
}
for (const val in ar) {
    console.log(val);
    console.log(typeof val);
}

for (const val in obj) {
    console.log(val);
    console.log(typeof val);
}

const mySet1 = new Set();
mySet1.add(1);
mySet1.add(2);
mySet1.add(2);
mySet1.add(1);
mySet1.add('some text');

const o1 = {a:1, b:2};
const o2 = {a:1, b:2};
o3 = o2;
mySet1.add(o1);
mySet1.add(o2);
mySet1.add(o2);
mySet1.add(o3);

let c1 = 'a';
let c2 = 'a';
++c1;
++c2
console.log('===', c1 === c2);
mySet1.add(c1);
mySet1.add(c2);

mySet1.delete('1');

for (const val of mySet1) {
    console.log(val);
}

console.log(typeof mySet1);
console.log('1', mySet1.has(1));
console.log('1', mySet1.has('some text'));
console.log('length', mySet1.length);
console.log('size', mySet1.size);


console.log(mySet1);

// const mySet3 = new Set(['Bla', 'Ala', 'Blu'].sort()); //pagal abecele padaro
// console.log(mySet2);
const mySet3 = new Set(['Bla', 'Ala', 'Blu']);
const a = [...mySet3]; //masyvas pasidaro is seto
a.sort();
//const ooo = {a:1, b:2};
// const oooCopy = {...ooo}



console.log(a);
mySet3.clear(); //kadangi yra konstanta negalima daryi newSet.

a.forEach(v => mySet3.add(v)); //setas isdeliotas pagal abecele
console.log('set3', mySet3);

console.log('json', JSON.stringify(mySet3));


function sum(a,b) {
    console.log('suma', a + b);
}
sum(4,5);
const sm = [10, 21];
sum(...sm);



// 1. Sukurti setą iš 3 skirtingų stringų
// 2. Iteruoti sukurtą setą su for of
const newSetas = new Set(['GAL', 'BUS', 'GERAI']);

for (const val of newSetas) {
    console.log(val);
}
// 3. Sukuriam masyvą iš seto
const masyvas1 = [...newSetas];

console.log(masyvas1);
// 4. į sukurtą masyvą pridedame dar du skirtingus stringus

masyvas1.push('Padaryta');
masyvas1.push('arba');
console.log(masyvas1);

//5. iš sukurto masyvo, duomenis sukeliam atgal į setą

masyvas1.forEach(v => newSetas.add(v)); //setas isdeliotas pagal abecele
console.log('naujas', newSetas);


// 6. sukuriam naują setą, kuriame būtų seno seto stringų pirmos raidės

const newSetas1 = new Set();

for (const v of newSetas) {
    newSetas1.add(v[0]);
}

console.log( newSetas1);
// 7. naują setą išrūšiuojame pagal abėcėlę
const m2 = [...newSetas1]
m2.sort();
newSetas1.clear();
m2.forEach(v => newSetas1.add(v));
console.log(newSetas1);
