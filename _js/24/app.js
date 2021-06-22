console.log('---------------1---------------');
// Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 

const labas = document.querySelector('[name=labas]');

labas.addEventListener('input', () => {
    console.log(labas.value)
})

document.querySelector('#button1').addEventListener('click', () =>
console.log(document.querySelector('#_1').value));

console.log('---------------2---------------');
// Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

const laba = document.querySelector('[name=laba]');
    laba.addEventListener('change', () => {
    console.log(laba.value)
});

document.querySelector('#_2').addEventListener('change', event =>
console.log(event.target.value));

console.log('---------------3---------------');
// Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log


document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
       console.log(item.id)
    })
})

document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => console.log(event.target.value));
});

console.log('---------------4---------------');
// Sukurti vieną checkbox tipo elementą. Pažyminėjus elementą išvesti i console.log pranešimą “pažymėta”, o nuėmus pažymėjimą- “nepažymėta”

document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta');
    }
    else {
        console.log('Nepažymėta');
    }
});

console.log('---------------5---------------');
// Sukurti tris checkbox tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus kažkuriai checkbox elemento reikšmei (pažymint arba atžymint checkbox’ą), išvesti į console.log visų pažymėtų checkbox’ų reikšmes.

// document.querySelectorAll('[name_5').forEach(chE1 => {
//     chE1.addEventListener('change', () => {
//         console.log('--------------------------');
//         document.querySelectorAll('[name=_5]').forEach(ch => {
//         if (ch.checked) {
//             console.log(ch.value);
//         }
//         });
//     });
// });



console.log('---------------6---------------');
// // Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

// // 1.
// const h1 = document.querySelector('h1');
// document.querySelector('#b1').addEventListener('click', () => {h1.innerText = input1.value});
// // 2.
// select1.addEventListener('change', () => {h1.innerText = select1.value});
// // 3.
// radio1.forEach(e => {
//    e.addEventListener('change', (e) => {
//       h1.innerText = e.target.value;
//    })
// });
// // 4.
// check1.addEventListener('click', (e) => {
//    if(e.target.checked) {
//       h1.innerText = 'Pažymėta';
//    } else {
//       h1.innerText = 'Nepažymėta';
//    }
// });
// // 5.
// check2.forEach(chEl => {
//    chEl.addEventListener('change', () => {
//       let out = '';
//       check2.forEach(ch => {
//          if (ch.checked) {
//             out += ch.value + '';
//          }
//       });
//       h1.innerText = out;
//    });
// });

console.log('---------------7---------------');
// Sukurti elementą h1. Pakartoti 1-5 uždavinius rezultato tekstą įkeliant į tą sukurtą elementą.

// const div7 = document.querySelector('#_7');

// // kuria papildomai kelis kartus cikluose
// function addTo(text) {
//     const element = document.createElement('h3');
//     element.innerHTML = `${text}`;
//     div7.appendChild(element);
// }

// // 1. =================
// document.querySelector('#btn1').addEventListener('click', () => {
//     addTo(input1.value);
// });

// // 2. =================
// document.querySelector('#select1').addEventListener('change', e => addTo(e.target.value));

// // 3. =================
// document.querySelectorAll('[name=_3]').forEach(

//     x => x.addEventListener('change', e => addTo(e.target.value))
// );

// // 4. =================
// document.querySelector('[name=tick]').addEventListener('change', e => {
//     // target uzdedant paima konkrecia reiksme tai kaip zemiau esanciam pvz
//     if(e.target.checked) {
//         addTo('pažymėta');
//     } else {
//         addTo('nepažymėta');
//     }
// });

// // 5. =================

// document.querySelectorAll('[name=_5]').forEach(

//     x => x.addEventListener('change', () => {
//         let out = '';
//         document.querySelectorAll('[name=_5]').forEach(
//             ch => {
//                 if (ch.checked) {
//                     out += ch.value + ' ';
//                 }
//             }
//         )
//         addTo(out);
//     })
// );


console.log('---------------8---------------');
// Pakartoti 1-5 uždavinius. Kiekvienam uždaviniui sukurti naują tuščią masyvą (arba vieną objektą su 5 masyvais viduje). Kiekvieną pasikeitimo reikšmę įrašyti į masyvą kaip naują elementą ir į console.log išvesti tą masyvą.

//1uzd
const array1 = [];

document.querySelector('#button1').addEventListener('click', () =>{
console.log(document.querySelector('#_1').value);
    array1.pusch(document.querySelector('#_1').value);
console.log(array1);
});

//2uzd

document.querySelector('#_2').addEventListener('change', event => {
console.log(event.target.value)
array1.pusch(document.querySelector('#_2').value);
    console.log(array1);
});

//3uzd

document.querySelectorAll("input").forEach(item => {
    item.addEventListener("change", () => {
       console.log(item.id);

    })
})


//4uzd

document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta');
    }
    else {
        console.log('Nepažymėta');
    }
});

//5uzd

// document.querySelectorAll('[name_5').forEach(chE1 => {
//     chE1.addEventListener('change', () => {
//         console.log('--------------------------');
//         document.querySelectorAll('[name=_5]').forEach(ch => {
//         if (ch.checked) {
//             console.log(ch.value);
//         }
//         });
//     });
// });










console.log('---------------9---------------');
// Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).

const go = document.querySelector('#go');

go.addEventListener('click', () => {
    array1.forEach((e) => {
console.log(e);
});
});