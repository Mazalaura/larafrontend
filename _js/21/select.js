const words = ['Labas Rytas', 'Laba Diena', 'Labas Vakaras'];
const h1 = document.querySelector('h1');

document.querySelector('#case-1').addEventListener('change', (select) => {
    h1.innerText = select.target.value;
});

document.querySelector('#case-2').addEventListener('change', (select) => {
    h1.innerText = words[select.target.value];
});

document.querySelector('#case-3').addEventListener('change', (select) => {
  h1.style.color = select.target.value;
})

document.querySelector('#btn').addEventListener('click', () => {h1.innerText = 'Hello!'});

// vietoj jo galima is karto biblioteka naudoti
fetch('http://127.0.0.1:5500/index.html')
  .then(response => response.text())
//   .then(data => console.log(data));



// vietoj jo galima is karto biblioteka naudoti Ajax
fetch('https://jsonplaceholder.typicode.com/todos/')
  .then(response => response.json())
//   .then(data => console.log(data));


// Aplication programming interface - API interface isorine panele


// json yra taisykliu rinkinys kaip pasiimti objekta arba masyva ir paversti string tipo gali buti net parasyta skirtingom programavimo kalbom

// objekto arba masyvo vertimas ir atvirkscias vertimas beveik visos kalbos turi todel gali visos susikalbeti stringais.

// sitie du budai, gali padaryti masyva taskime i string:
// JSON.parse();
// JSON.stringify();

console.log(JSON.stringify(words));

const abc = {
  a: 'b', 
  b: {k: 1, z: 22, y: 'ąčęšųčįęė0įž'},
  c: [1, 2, 3]
}

console.log(JSON.stringify(abc));

// console.log(JSON.parse(abc));
// geras budas sukelti ir nusikopijuoti objekta
const js = JSON.stringify(abc)

JSON.parse(js);

console.log(JSON.parse(js));

fetch('http://127.0.0.1:5500/_js/21/labas.txt')
  .then(response => response.text())
//   .then(data => console.log(data));

// naudojant fetch paimama data is failo kaip string ir atvaizduojama html kaip innerText
const mygtukas = document.querySelector('#go-go');
const h1Kitas = document.querySelector('.container h1')

// mygtukas.addEventListener('click', () => {
//     fetch('http://127.0.0.1:5500/_js/21/labas.txt')
//   .then(response => response.text())
//   .then(data => h1Kitas.innerText = data);
// })

mygtukas.addEventListener('click', () => {
    fetch('http://127.0.0.1:5500/_js/21/labas.txt')
  .then(response => response.text())
  .then(data => data = h1Kitas.innerHTML = data);
})


// fetch('https://jsonplaceholder.typicode.com/todos/')
//   .then(response => response.json())
//   .then(data => data.forEach(
//     (x) => {
//         console.log(x);
//         x.forEach(
//             (x) => {
//                 return x.title
//             }
//         );
//     }
// ));

// const h6 = document.querySelector('h6')

// console.log(data);

// data.forEach(
//     (x) => {
//         h6.innerText = x;
//     }
// );




// document.querySelector('.knopka').addEventListener('click', kvieciam);

// function kvieciam() {

//     fetch('https://in3.dev/vinted/api/brands/all')
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);
//           data.forEach(
//             (x) => {
//                 console.log(x);
//                 const create = document.createElement('li');
//                 const div = document.querySelector('ul.brands');
//                 div.append(create);
//                 create.innerText = `${x.title}`
//             }
//           )
//     });
// }



let output = '';
fetch('https://in3.dev/vinted/api/brands/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
    console.log(element.title)
    output += '<li>' +element.title+ '</li>';
  });
  document.querySelector('ul').innerHTML = output;
});






fetch('https://picsum.photos/v2/list')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(
    (f) => {
      console.log(f);
      const create = document.createElement('img');
      const div = document.querySelector('div.img-container');
      div.append(create);
      create.setAttribute('src', f.download_url);
    }
  )
});

