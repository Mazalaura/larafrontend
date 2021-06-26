
const ar = [5, 8, 9];

// const [A, B, C] = ar;
const [A, B, C] = ['labas', 99, 'rytas'];

const atgal = [A, B, C];

console.log(A);
console.log(B);
console.log(atgal);


const masyvas1 = [55, 77, 99, 100];
const masyvas2 = [55, 77, 99, 100, 777];


// masyva paversti i objektav {a1: 55, a2:77, a3:99, a4:100}
// {a1: 55, a2: 77, a3: 99, a4: 100, a5: 777}

//1.

const obj = {};
const obj1 = {};
// masyvas1.forEach((e, i) => obj['a' + (i+1)] = e);
for (let i = 0; i < masyvas1.length; i++) {
    // obj['a', + (i+1)] = masyvas1[i];
    const prop = 'a' + (i + 1);
    obj[prop] = masyvas1[i];
}
masyvas2.forEach((e, i) => obj1['a' + (i+1)] = e);
console.log('-1-', obj);
console.log('-1a-', obj1);

const mas = [];
const mas1 = [];
for (const prop in obj) {
    mas.push(obj[prop]);
}

console.log('-2-', mas);

for (const prop in obj1) {
    mas1.push(obj1[prop]);
}

console.log('-2a-', mas1);


// Iš JSON padaryti sąrašą su li elementais, kuriuose yra knygų kategorijos [19:24] Arvydas Kijakauskas (Dėstytojas)
// ir padaryti, kad sąrašas būtų išrūšiuotas pagal title abėcelės tvarka
// like 2

const json = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';


//Audriaus budas
// const array1 = JSON.parse(json);
// console.log('--3--', array1);

// const where = document.querySelector('body');
// var ul = document.createElement('ul');
// where.appendChild(ul);

// for(var i =0; i < array1.length; i++) {
//     var li = document.createElement('li');
//     ul.appendChild(li);
//     const myJASON = array1[i].title;
//     li.innerText = myJASON;
// }
//destytojo budas
// window.addEventListener('DOMContentLoaded', () => { //naudojamas be defer HTML



const types = JSON.parse(json);
console.log('---3---', types);
//4
    types.sort((a,b) => {
        if(a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
            return 0;
    })
//4
const body = document.querySelector('body');
const ul = document.createElement('ul');
body.appendChild(ul);

types.forEach(element => {
    const t = document.createTextNode(element.title);
    const li = document.createElement('li');
    li.appendChild(t);
    ul.appendChild(li);
})

// })


//5. Sukurti dar du masyvus pagal masyvą, kur pirmas masyvas yra duoto masyvo reikšmių daugyba iš 2 o antras masyvas yra duoto masyvo reikšmių kvadratas
const arr = [5, 8, 9, 22];

const arr1 = [];
const arr2 = [];

arr.forEach(e => arr1.push(e * 2));

for(let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] * 2);
}

const arr3 = arr.map(e => e * 2); //grazina kopija


console.log('---5a---', arr1);

console.log('---5b---', arr2);

console.log('---5c---', arr3);

