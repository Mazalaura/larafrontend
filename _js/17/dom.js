function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('uzduotis a')
// <!-- Su JS  -->
// <!-- Nuspalvinti zaliai -->
// <!-- Nuspalvinti raudonai -->

const  a = document.querySelector('a');
const h1 = document.querySelector('h1');

a.style.color = 'green';
h1.style.color = 'red';


console.log('uzduotis b')
// <!-- Su JS padaryti taip, kad paspaudus ant Link, Labas pakeistu splva i melyna -->


const makeH1TagBlue = function(eventas) {
eventas.preventDefault();
h1.style.color = 'blue';
}
a.addEventListener('click', makeH1TagBlue)

console.log('uzduotis c')

// <!-- Su JS padaryti kad paspaudus ant bet kokio divo jis pranyktu (display: none)-->
console.log('uzduotis d')
// - Su JS padaryti kad paspaudus ant bet kokio divo jis butu istrintas (google js element remove)-->

const divs = document.querySelectorAll('div');

const hideDiv = function(e) {
    e.target.style.display = 'none';
}
const deleteDiv = function(e) {
    e.target.remove();
}

for (let i = 0; i < divs.length; i++) {
    // divs[i].addEventListener('click', hideDiv);
    divs[i].addEventListener('click', deleteDiv);
}


console.log('uzduotis e')

// <!-- Su JS padaryti kad paspaudus ant Dukros jis butu istrinti (google js element remove) ir Tevas ir Dukra-->


const dukraSpan = document.querySelector('i span');

const killFamily = function(e) {
console.log(e.target.closest('i'));
e.target.closest('i').remove();
}

dukraSpan.addEventListener('click', killFamily);


const newDukra = document.createElement('span');
const nameOfDukra = document.createTextNode('Dukra 2');
newDukra.appendChild(nameOfDukra);

// const oldDukra = document.querySelector('span');
const tevas = document.querySelector('i');

// tevas.insertBefore(newDukra, oldDukra);

tevas.appendChild(newDukra);


console.log('uzduotis f')
// <!-- i kiekviena h2 taga prideti span su tekstu "patys sugalvokit" -->

const h2 = document.querySelectorAll('h2');


for (let j = 0; j < h2.length; j++) {
    const newSunus= document.createElement('span');
    const nameOfSunus = document.createTextNode(j+1);
    newSunus.appendChild(nameOfSunus);
    const tevas = document.querySelectorAll('h2');
    tevas[j].appendChild(newSunus);
    
    
}

console.log('uzduotis g')

// <!-- sukurkite tokia struktura su h3 elementais -->
// <!--     
// <h5>
//     <h3>
//         <h3>
//             <h3>
//                 <h3>
//                     <h3>
//                     </h3>
//                 </h3>
//             </h3>
//         </h3>
//     </h3>
// </h5> 
// -->
