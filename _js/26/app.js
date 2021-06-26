console.log('---------------1---------------');
// Reikia inputo type text Reikia mygtuko "GO" Reikia antro inputo type text Paspaudus mygtuką, tekstas kuris yra inpute nr 1 būtų atvaizduotas konsolėjė
// o tekstas iš inputo nr 2 būtų atvaizduotas dinamiškai sukurtame tage h1

document.querySelector('#go').addEventListener('click', () => {
    document.querySelectorAll('h1').forEach( e => {
        console.log(e);
        // h1.innerHTML = input.value;
        // console.log(h1);
    });
});


const text = 'bla bla bla'; //tekstas js faile
const where = document.querySelector('div');

const textN = document.createTextNode(text); //DOM dalis
const element = document.createElement('h1'); //DOM dalis
element.appendChild(textN);
where.appendChild(element);

// const body = document.querySelector('body');

// body.appendChild(element);
// body.appendChild(textN);

console.log('------------------------------');
console.log(text);
console.log(typeof text);

console.log('------------------------------');
console.log(textN);
console.log(typeof textN);

console.log('------------------------------');
console.log(element);
console.log(typeof element);


// const button = document.querySelector('#go); pagal tagp varda
const iA = document.querySelector('[name=A]'); //pagal name
const iB = document.querySelector('#B'); //pagal id

let t1 = '';
let t2 = '';

document.querySelector('#go').addEventListener('click', (ev) => {
    //vieta rasyti kodui,kuris nutiks paspaudus mygtuka
    const text1 = iA.value;
    const text2 = iB.value;
    //1.isvesti i console
    // if(t1 !== text1) {
    //     t1 = text1;
    //     console.log(text1);
    // }
    
    //2. 
    // if(t2 !== text2) {
    //     t2 = text2;
    const text2N = document.createTextNode(text2); //DOM dalis
    const element2 = document.createElement('h1'); //DOM dalis
    element.appendChild(text2N);
    where.appendChild(element2);
// }
});
document.querySelector('#go3').addEventListener('click', (ev) => {
    //vieta rasyti kodui,kuris nutiks paspaudus mygtuka
    const text1 = iA.value;
    const text2 = iB.value;
    for(let i = 0; i < 3; i++) {
 
    const text2N = document.createTextNode(text2); //DOM dalis
    const element2 = document.createElement('h1'); //DOM dalis
    element.appendChild(text2N);
    where.appendChild(element2);
}
});

//span sukurimas nuo 1 iki 100
   const body = document.querySelector('body');

    for(let i = 1; i <= 100; i++){
 
    const text = document.createTextNode(i); 
    const span = document.createElement('span');
    span.appendChild(text);
    body.appendChild(span);
}