function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('uzduotis 1a');
// Tamsiai žaliai nuspalvinti h1 tagą;

const h1 = document.querySelector('h1');
// h1.style.color = 'green';

console.log('uzduotis 1b');
// Tagui i pridėti klasę small;
h1.classList.add('small');

console.log('uzduotis 1c');
// Iš tago h1 pašalinti klasę main;

h1.classList.remove('main');

console.log('uzduotis 1d');
// Tik tam h2 tagui, kuris iškart eina po h1 tagui pridėti klasę first ir pašalinti klasę main;

const h2first = document.querySelector('h2');

h2first.classList.add('first');
h2first.classList.remove('main');

console.log('uzduotis 1e');
// Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai

const spanTag = document.querySelector('span');

spanTag.style.color = 'grey';
spanTag.style.fontSize = '10px';

console.log('uzduotis 2a');
// Suskaičiuoti kiek yra h2 tagų;

const h2Tag = document.querySelectorAll('h2');

//   console.log('h2:', h2Tag.length);
let counter = 0;
// document.querySelectorAll('h2').forEach( () => counter++);

document.querySelectorAll('h2').forEach( () => {
    counter++
});

console.log('h2:', counter);

console.log('uzduotis 2b');
// Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
let counter1 = 0;

document.querySelectorAll('h2').forEach( (h2) => {
  if (!(h2.classList.contains('.first'))){
    counter1++;
  }
});

// for (let i = 0; i < h2Tag.length; i++) {
//         if (!h2Tag[i].classList.contains('first')){
//             counter++;
//          }
//     }  

   
 console.log('first:', counter1);

console.log('uzduotis 2c');
// Visus h2 tagus nuspalvinti šviesiai mėlynai
// for (let i = 0; i < h2Tag.length; i++) {
// h2Tag[i].style.color = 'lightblue';
// }
document.querySelectorAll('h2').forEach( (h2) => {
    h2.style.color = 'lightblue';
});

console.log('uzduotis 2d');
// Tagams kurie yra div su klase prices viduje pridėti klasę price-tag;

const divPrice = document.querySelector('.prices');
// const h2Price = divPrice.querySelectorAll('h2');

// for(let i = 0; i < h2Price.length; i++) {
//     h2Price[i].classList.add('price-tag');
// }
divPrice.querySelectorAll('h2').forEach ((h2) => h2.classList.add('price-tag'));

console.log('uzduotis 2e');
// Pabraukti visus tagus su klase new;
//prie classList tasku pries klases nedeti

// const classNew = document.querySelectorAll('.new')

// for(let i = 0; i < classNew .length; i++) {
//     classNew [i].style.textDecoration = 'underline';
// }
document.querySelectorAll('.new').forEach ((e ) => e.style.textDecoration = 'underline');


console.log('uzduotis 2f');
// Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);

const vntAnimal = document.querySelector('.animals');
// const vntgyv = vntAnimal.querySelectorAll('ul');
// console.log(vntgyv.length);
let count = 0;
vntAnimal.querySelectorAll('ul').forEach ((ul) => {
    count++;
});
console.log(count);

console.log('uzduotis 2g');
// Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;
// const ul = document.querySelectorAll('ul');
// for(let i = 0; i < ul .length; i++) {
//     ul [i].style.border = '1px solid black';
//     ul [i].style.padding= '15px 50px';
// }
document.querySelectorAll('ul').forEach((ul) => {
    ul.style.border = '1px solid black';
    ul.style.padding= '15px 50px';
});


console.log('uzduotis 2h');
// Suskaičiuoti kiek yra naujų gyvūnų (su klase new);

// const liTag = document.querySelectorAll('li')

//     for (let i = 0; i < liTag.length; i++) {
//         if (liTag[i].classList.contains('new')){
//             counter1++;
//          }
//     }  

//     console.log('first:', counter1);
let count2 = 0;
document.querySelector('.animals').querySelectorAll('li').forEach (li => {
    if (li.classList.contains('new')) {
        count2++;
    }
});
console.log('first:', count2);

console.log('uzduotis 2i');
// Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;

const newAnimalsList= {}
//{plesrunai: 1, zirafos:2}

 document.querySelectorAll('ul').forEach( ul => {
     let count = 0;
     ul.querySelectorAll('li').forEach(li => {
         if(li.classList.contains('new')) {
             count++
         }
     });
     newAnimalsList[ul.id] = count;
 });

 console.log(newAnimalsList);

// const uls = document.querySelectorAll('ul');

// for (let i = 0; i < uls.length; i++) {
//     let count = 0;
//     const lis = uls[i].querySelectorAll('li');
//     for (let j = 0; j < lis.length; j++) {
//         if (lis[j].classList.contains('new')) {
//             count++;
//         }
//     }
//     newAnimalsList[uls[i].id] = count;
// }
// console.log(newAnimalsList);


console.log('uzduotis 3a');
// Padaryti tai ką liepia mygtukai Header1 sekcijoje;


console.log('uzduotis 3b');
// Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;

const iClick = document.querySelector('i');

const myFunction2 = function() {
    iClick.style.fontWeight = 'bold';
}

iClick.addEventListener('click', myFunction2);

console.log('uzduotis 3c');
// Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;

const u3c = document.querySelector('.prices');

const backgroundGray = el => {
    if (el.target.style.backgroundColor === '' || el.target.style.backgroundColor === 'white'){
        el.target.style.backgroundColor = 'gray';
    }
    else {el.target.style.backgroundColor = 'white'};
}

u3c.addEventListener('click', backgroundGray);

console.log('uzduotis 3d');
// Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color;

const contacts = document.querySelector('#contacts');
const x = contacts.querySelector('b');
const did = contacts.querySelector('u');

contacts.addEventListener('click', e => e.target.style.color = 'red');

did.addEventListener('click', e => {
    e.stopPropagation();
    contacts.style.fontSize = '20px';
});

x.addEventListener('click', (e) => {
    e.stopPropagation();
    contacts.style= null;
});


console.log('uzduotis 3e');
// Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

console.log('uzduotis 3f');
// Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos https://stackoverflow.com/questions/18691655/remove-style-on-element



console.log('uzduotis 3g');
// Padaryti tai ką liepia mygtukai Header2 sekcijoje;


console.log('uzduotis 4a');
// Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

// const dbAnimal = function(e) {
//     e.target.style.color = 'red';
// }

// const newAnimals = document.querySelectorAll('.new');

// for (let i = 0; i < newAnimals.length; i++) {
//     newAnimals[i].addEventListener('dblclick', dbAnimal);
// }

document.querySelectorAll('.new').forEach (animal => {
    animal.addEventListener ('dblclick', e => {
        e.target.style.color = 'red';
    })
})
    
console.log('uzduotis 4b');
// Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.

const u4b = document.querySelectorAll('li:not(.like-button)');
console.log(u4b);

const increaseFont = e => {
    e.stopPropagation();
    e.target.style.fontSize = '130%';
}

u4b.forEach(e => e.addEventListener('click', increaseFont));

console.log('uzduotis 4c');
// Padaryti, kad paspaudus ant “PATINKA”, atitinkamai sekcijai būtų priskirta klasė like;

const u4c = document.querySelectorAll('li.like-button');
console.log(u4c);

const addLike = e => e.target.closest('ul').classList.add('like');

u4c.forEach(x => x.addEventListener('click', addLike));

console.log('uzduotis 5a');
// Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

const nKaina =document.createElement('h2');

const senjorai = document.createTextNode('Senjorai tik 1.99 eur');
nKaina.appendChild(senjorai);

document.querySelector('div.prices').appendChild(nKaina);

console.log('uzduotis 5b');
// Dinamiškai su JS Pridėti naują kainą “Senjorų grupė iki 10: tik 5.99 eur” Padaryti, kad pridėtas elementas turėtų klasę new ir ant jo paklikinus jis pasidarytų žalias;

console.log('uzduotis 5c');
// Dinamiškai su JS kiekvienoje gyvūnų kategorijoje po “PATINKA” pridėkite dar vieną li elementą “NEPATINKA”, kurį paspaudus atitinkamoje sekcijoje būtų nuimta klasė like

console.log('uzduotis 5d');
// Dinamiškai su JS sukurkite naują mygtukų grupę HEADER 3 naudojant analogišką html tagų struktūrą kaip ir HEADER 1 ir HEADER 2. Pirmas mygtukas vadintųsi, “Pabraukti H1 tagą”, o antras “Nepabraukti H1 tagą”. Mygtukai turi daryti tai kas ant jų parašyta
