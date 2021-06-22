console.log('---------------1---------------');
// Sukurti text tipo input elementą ir mygtuką. Paspaudus mygtuką input elemente esantį tekstą išvesti į console.log 


document.querySelector('#button1').addEventListener('click', () =>
console.log(document.querySelector('#_1').value));

console.log('---------------2---------------');
// Sukurti select tipo elementą su trim reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm select elemente, naują reikšmę išvesti į console.log

document.querySelector('#_2').addEventListener('change', event =>
console.log(event.target.value));

console.log('---------------3---------------');
// Sukurti tris radio tipo elementus su reikšmėm “rytas”, “diena”, “vakaras”. Pasikeitus reikšmėm radio elemente, naują reikšmę išvesti į console.log

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
const array2 = [];

document.querySelector('#button1').addEventListener('click', () =>{
console.log(document.querySelector('#_1').value);
    array1.push(document.querySelector('#_1').value);
console.log(array1);
});

//2uzd

document.querySelector('#_2').addEventListener('change', event => {
console.log(event.target.value);
array2.push(event.target.value);
    console.log(array2);
});

//3uzd

const array3 = [];
document.querySelectorAll('[name=_3]').forEach(radio => {
    radio.addEventListener('change', event => {
    console.log(event.target.value);
    array3.push(event.target.value);
    console.log(array3);
});
});


//4uzd
const array4 = [];
document.querySelector('#_4').addEventListener('change', event => {
    if (event.target.checked) {
        console.log('Pažymėta');
        array4.push('Pažymėta');
        console.log(array4);
    }
    else {
        console.log('Nepažymėta');
        array4.push('Nepažymėta');
        console.log(array4);
    }
});

//5uzd
const array5 = [];

document.querySelectorAll('[name=_5]').forEach(chE1 => {
    chE1.addEventListener('change', () => {
        console.log('--------------------------');
        const temp = [];
        document.querySelectorAll('[name=_5]').forEach(ch => {
        if (ch.checked) {
            temp.push(ch.value);
            console.log(temp);
            }
        });
        array5.push(temp);
        console.log(array5);
    });
});

console.log('---------------9---------------');
// Padaryti mygtuką “GO”, kurį paspaudus, naudojant masyvus, gautus 8 uždavinyje, dinamiškai, iš tų masyvų duomenų, būtų sukurta daug h3 tagų kaip tai buvo padaryta 7 uždavinyje (vienas įrašas masyve, atinka vieną naują h3 tagą).
const h3Div2 = document.querySelector('.h3Div2');

document.querySelector('#go').addEventListener('click', () => {
    array1.forEach((val) => {
        let h3 = document.createElement('h3');
        h3.style.color = 'red';
        h3.innerText = val;
        h3Div2.appendChild(h3);
    });
    array2.forEach((val) => {
        let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = val;
    h3Div2.appendChild(h3);
    });
    array3.forEach((val) => {
        let h3 = document.createElement('h3');
        h3.style.color = 'red';
        h3.innerText = val;
        h3Div2.appendChild(h3);
    });
    array4.forEach((val) => {
        let h3 = document.createElement('h3');
        h3.style.color = 'red';
        h3.innerText = val;
        h3Div2.appendChild(h3);
    });
    array5.forEach((val) => {
   let h3 = document.createElement('h3');
    h3.style.color = 'red';
    h3.innerText = val;
    h3Div2.appendChild(h3);
});
});


console.log('---------------10---------------');
// Padaryti mygtuką “Reset”, kuris ištrintų duomenis iš visų masyvų.

document.querySelector('#reset').addEventListener('click', () => {
    array1 = [];
    array2 = [];
    array3 = [];
    array4 = [];
    array5 = [];
})

console.log('---------------11---------------');
// Padaryti mygtuką “Clear”, kuris ištrintų visus h3 tagus iš DOM’o.

document.querySelector('#clear').addEventListener('click', () => {
    document.querySelectorAll('h3').forEach( e => {
        console.log(e);
        e.remove();
    });
});


console.log('---------------12---------------');
// Padaryti mygtuką “GO JSON”, kurį paspaudus, 9 uždavinio masyvus būtų sudėti į sukurtą naują objektą. Tą objektą paversti JSON stringu ir užsaugoti susikurtam kintamąjame. Kintamąjį išvesti i console.log Nuskaityti JSON stringą iš kintamojo, paversti jį objektu ir iš jo informacijos suformuoti h3 tagus kaip 9 uždavinyje.
let newObj = {};

document.querySelector('#json').addEventListener('click', () => {
    // get data/arrays from obj to new object
    for(let z in obj) {
        console.log(obj[z]);
        Object.assign(newObj, {[z]: obj[z]})
    }
    console.log(newObj);

    // make string
    const jso = JSON.stringify(newObj);
    console.log(jso);

    // from string to Object
    const newJso = JSON.parse(jso);
    console.log(newJso);

    // upload and create new elements in dom
    for(let q in newJso) {
        const newH3 = document.createElement('h3');
        newH3.innerText = newJso[q];
        last.append(newH3);
    }
});
