

const linkas =document.querySelector('a');

const vzLink = 'https://www.vz.lt';
const cvLink = 'https://cv.lt/';

console.log(linkas.getAttribute('href'));

linkas.setAttribute('title', 'Go go go');

linkas.removeAttribute('href');

document.querySelector('#cv').addEventListener('click',() => linkas.setAttribute('href', cvLink));

document.querySelector('#vz').addEventListener('click', () => linkas.setAttribute('href', vzLink));


const suo1 = 'http://127.0.0.1:5500/_js/20/sunys/9.jpg';
const suo2 = 'http://127.0.0.1:5500/_js/20/sunys/AXD_9936.jpg';
const suo3 = 'http://127.0.0.1:5500/_js/20/sunys/DSC_2513-676x450.jpg';

const img =document.querySelector('.i1');
const img2 =document.querySelector('.i2');

// document.querySelector('#suo1').addEventListener('click', () => img.setAttribute('src', img.dataset.suo1));
// document.querySelector('#suo2').addEventListener('click', () => img.setAttribute('src', img.dataset.suo2));
// document.querySelector('#suo3').addEventListener('click', () => img.setAttribute('src', img.dataset.suo3));

// document.querySelector('.buttons1').querySelectorAll('button').forEach(b => {
//     b.addEventListener('click', () => {
//     img.setAttribute('src', img.dataset[b.id]);
//     })
// });

const suo = document.querySelector('[name=suo]');

suo.addEventListener('input', () => {
    img.setAttribute('src', img.dataset[suo.value]);
    console.log(suo.value)
});

document.querySelector('.buttons2').querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
    img2.setAttribute('src', b.dataset.img);
    })
});

const labas = document.querySelector('[name=labas]');

labas.addEventListener('input', () => {
    console.log(labas.value)
})

const selis = document.querySelector('[name=selis]');

selis.addEventListener('change', () => {
    console.log(selis.value)
});

const h1 = document.querySelector('h1');
const h1Input = document.querySelector('[name=h1');
const h1Do = document.querySelector('#h1');
const h2Do = document.querySelector('#h2');

const html = '[Labas rytas][Laba diena] [Labas vakaras]';

h1Do.addEventListener('click', () => {
    const valueText = h1Input.value;
    h1.innerText = valueText;
});

h2Do.addEventListener('click', () => {
    h1.innerHTML = html;
});

selis.addEventListener('change', (h1) => {
    h1.innerText(html.dataset[selis.value]);
});