// masyvas rankiniu budu 6-7 su a ir b maisytomis raidemis.

const ab = ['a', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'a', 'b', 'a', 'b', 'a',]

// 1. ciklas for atskirai console.log() atspauzdinti kiekvieno masyvo reiksmes

for (let i = 0; i < ab.length; i++) {
   console.log(ab[i]);
}

//2. ciklas for atskirai console.log() atspauzdinti masyvo reiksmes kiekvienam masyvo indeksui

for (let i = 0; i < ab.length; i++) {
  console.log('ab:', i);
}

//3. kiekvinai a masyvo reiksmei
console.log('---------------3---------------');
for (let i = 0; i < ab.length; i++) {
  if (ab[i] ==='a') {
    console.log(ab[i]);
  }
}

//4. kiekvinam masyvo indeksui, kurio reiksme b
console.log('---------------4---------------');
for (let i = 0; i < ab.length; i++) {
  if (ab[i] === 'b') {
    console.log('ab:', i);
  }
}

//5. 6. 7. 8. analogiskai su forEach ciklu ir => function

console.log('---------------5---------------');

ab.forEach(e => console.log(e));

console.log('---------------6---------------');

ab.forEach((value, index) => console.log(index));

console.log('---------------7---------------');

ab.forEach(e => {
  if (e ==='a') {
  console.log(e);
}
});

console.log('---------------8---------------');

ab.forEach((e,i) => {
  if (e === 'b') {
  console.log(i);
}
});

console.log('---------------9---------------');
//nodelist viska padaryti nuo pradziu
const lis = document.querySelectorAll('li');

for (let i = 0; i < lis.length; i++) {
  console.log(lis[i].dataset.value);
}

console.log('---------------10---------------');

for (let i = 0; i < lis.length; i++) {
  console.log('lis', i);
}

console.log('---------------11---------------');

for (let i = 0; i < lis.length; i++) {
  if (lis[i].dataset.value ==='a') {
    console.log(lis[i].dataset.value);
  }
}

console.log('---------------12---------------');

for (let i = 0; i < lis.length; i++) {
  if (lis[i].dataset.value === 'b') {
    console.log('B:', i);
  }
}

console.log('---------------13---------------');

document.querySelectorAll('li').forEach(e => console.log(e.dataset.value));
//data-bla-bla  susimepina dataset.blaBla

console.log('---------------14---------------');

document.querySelectorAll('li').forEach((value, index) => console.log(index));

console.log('---------------15---------------');

document.querySelectorAll('li').forEach(e => {
  if (e.dataset.value ==='a') {
  console.log(e.dataset.value);
}
});

console.log('---------------16---------------');

document.querySelectorAll('li').forEach((e,i) => {
  if (e.dataset.value === 'b') {
  console.log(i);
}
});

console.log('---------------1(2)---------------');

//pakartotas 3 kartus atskirai padaryti kiekvienai masyvo reiksmei + kelintas kartas
for (let i = 0; i < ab.length; i++) {
  console.log(ab[i]);
  for(var cycle1 = 1; cycle1 <= 3; cycle1++) {
  console.log('ciklas Nr.', cycle1);
  }
}


console.log('---------------2(2)---------------');

for (let i = 0; i < ab.length; i++) {
  console.log('ab:', i);
  for(var cycle2 = 1; cycle2 <= 3; cycle2++) {
    console.log('ciklas Nr.',cycle2);
    }
}

console.log('---------------3(2)---------------');

for (let i = 0; i < ab.length; i++) {
  if (ab[i] ==='a') {
    console.log(ab[i]);
  }
  for(var cycle3 = 1; cycle3 <= 3; cycle3++) {
    console.log('ciklas Nr.',cycle3);
    }
}
console.log('---------------4(2)---------------');

for (let i = 0; i < ab.length; i++) {
  if (ab[i] === 'b') {
    console.log('ab:', i);
  }
  for(var cycle4 = 1; cycle4 <= 3; cycle4++) {
    console.log('ciklas Nr.',cycle4);
    }
}

console.log('---------------5(2)---------------');

const cde = ['c','d','e'];

cde.forEach((a) => {
  console.log('Ciklas Nr.', a) 
ab.forEach((f) => console.log(f))
});
console.log('---------------6(2)---------------');

cde.forEach((a) => {
  console.log('Ciklas Nr.', a)
ab.forEach((value, index) => console.log(index));
});

console.log('---------------7(2)---------------');

cde.forEach((a) => {
  console.log('Ciklas Nr.', a)
ab.forEach(e => {
  if (e ==='a') {
  console.log(e);
}
});
});

console.log('---------------8(2)---------------');

cde.forEach((a) => {
  console.log('Ciklas Nr.', a)
ab.forEach((e,i) => {
  if (e === 'b') {
  console.log(i);
  }
});
});

console.log('---------------9(2)---------------');

const ul = document.querySelectorAll('ul');
const li = document.querySelectorAll('li');
for (let i = 1; i < ul.length; i++) {
  console.log(ul[i].dataset.value);
  const li = ul[i].querySelectorAll('li');
  for(var cycle1 = 1; cycle1 <= 3; cycle1++) {
    console.log(li[i].dataset.value);
  }
}

console.log('---------------10(2)---------------');

for (let i = 1; i < ul.length; i++) {
  console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 0; j < li.length; j++) {
      console.log(j);
  }
}

console.log('---------------11(2)---------------');

for (let i = 0; i < ul.length; i++) {
  if (ul[i].dataset.value ==='a') {
    console.log(ul[i].dataset.value);
  }
  for(var cycle1 = 1; cycle1 <= 3; cycle1++) {
    console.log('ciklas Nr.', cycle1);
  }
}

console.log('---------------12(2)---------------');

for(let i = 0; i < ul.length; i++) {
  console.log(ul[i].dataset.value);
  const li = ul[i].querySelectorAll('li');
  for(let j = 1; j < li.length; j++) {
     if(li[j].dataset.value === 'a') {
        console.log(li[j].dataset.value);
     }
  }
}
console.log('__________ Funkcijos __________');

// Pirma funkcija
function myFunction1(x) {
   return x.dataset.value === 'b';
}

// Antra funkcija
c2 = (e) => {return e.dataset.value === 'b';}


for(let i = 0; i < ul.length; i++) {
   console.log(ul[i].dataset.value);
   const li = ul[i].querySelectorAll('li');
   for(let j = 1; j < li.length; j++) {
      // Trecia funkcija anonimine funkcija
      const c1 = myFunction1(li[j]);
      if(c1) {
         console.log(j);
      }
   }
}

console.log('__________ Funkcijos(destytojo) __________');
//destytojo 

//vardine funkcija negali buti deklaruojama viduje

function f1(array, index){
  return array[index] === 'b'
}

for( let i = 0; i < ab.length; i++) {
  if (f1(ab,i)) {
    console.log(i);
  }
}


//anonimine

const an1 = function(array, index) {
  return array[index] === 'b'
}

for( let i = 0; i < ab.length; i++) {
  if (an1(ab,i)) {
    console.log(i);
  }
}

//anonimine rodykline gali buti bet kur

const an2 = (array, index) => array[index] === 'b';

for( let i = 0; i < ab.length; i++) {
  if (an2(ab,i)) {
    console.log(i);
  }
}

console.log('__________ Nr. 5 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e) => console.log(e.dataset.value));
});

console.log('__________ Nr. 6 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e, i) => console.log(i));
});

console.log('__________ Nr. 7 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e) => {
      if(e.dataset.value === 'a') {
         console.log(e.dataset.value);
      }
   })
});

console.log('__________ Nr. 8 __________');

ul.forEach((e) => {
   console.log(e.dataset.value);
   const li = e.querySelectorAll('li');
   li.forEach((e, i) => {
      if(e.dataset.value === 'b') {
         console.log(i);
      }
   })
}); 