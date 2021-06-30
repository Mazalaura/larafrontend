//1. seto rusiavimas ( is seto padarom masyva, klerinam ir is masyvo paskui gaunasi sortintos reiksmes)
const setas = new Set();

setas.add('grybas');
setas.add('agurkas');
setas.add('pupele(ankstine)');

const a = [...setas].sort(); //masyvas pasidaro is seto
setas.clear();
a.forEach(v => setas.add(v));
console.log(setas);

//2. setą įrašyti į localstorage, tada nuskaityti į setasCopy kintamąjį
let copySet = [...setas]; //setas pavirsta masyvu
copySet = JSON.stringify(copySet); // masyvas paverciamas JSON stringu
localStorage.setItem('darzoves', copySet); //irasomas JSON stringas
let copySet2 = localStorage.getItem('darzoves');//issitraukia is storage
copySet2 = JSON.parse(copySet2); // JSON stringas atvirsta i masyva

const setasBack = new Set (copySet2);//pagal atvirtusi masyva sukuriame nauja seta
console.log('2.', setasBack);

//3.
const hard = [

    new Set([2,8,7]),

    new Set([2,0,7,8,7]),

    new Set([2,8,0,7,1,9]),

    new Set([2,8,7,0])

];

hard.sort((a, b) => b.size - a.size);
console.log(hard);

//4.  padaryti kad, masyvai eina pirmi, tada eina setai

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof

  console.log(hard instanceof Array);
  
  console.log(setas instanceof Set);
  
  const easy = [
  
      [1,8],
      new Set([7, 9]),
      new Set(), 
      [1,8,7],
      new Set([7, 9, 11]), 
      [],
      new Set([7, 9, 71, 11, 45]),
];

// easy.sort((a, b) => b  instanceof Array ? -1 : 0);// trumpasis variantas

easy.sort((a, b) => {//b pirmas elementas
if (b instanceof Array === a instanceof Array ||
    b instanceof Set=== a instanceof Set ) {
        return 0; //nieko nedaro
    }
    else if (b instanceof Array) {
        return 1;
    }
    else if (b instanceof Set) {
        return -1; //reikia keisti kad butu gerai
    }
})

console.log(easy);

// 5. masyve easy palikti tik setus

const filtereasy = easy.filter(v => v instanceof Set ? 1 : 0);

console.log('5', filtereasy);


console.log('------------------------MAP----------------------------')

const map = new Map();

map.set('Petras', 'kas guli Petro stalčiuje');
map.set('Šarikas', 'kas guli Šariko būdoje');
map.set('Janotas', 'ką šiukšlių dėžėje rado Janotas');

console.log('has Janotas:', map.has('Janotas'));
console.log('get Šarikas:', map.get('Šarikas'));

for (const val of map) {
    console.log('valas', val[0])// val visada bus masyvas
}

console.log(map);

//map sortinimas

const mapArray = [...map];

console.log(mapArray);

const kitasMapas = new Map([['a',2],['b',2],['c',2]]);

console.log('kitas', kitasMapas);

//rusiavimas

const mapasArray = [...map].sort((a,b) => b[0] > a[0] ? -1 : 0);
// const mapasArray = [...map].sort((a,b) => b[0][2] > a[0][2] ? -1 : 0); sortinimas pagal trecia raide

map.clear();
mapasArray.forEach((v => map.set(v[0], v[1]))); // v[0 pirma reiksme, o v[1 antra reiksme]]
console.log(map);

// sudelioti masyvai map set
const noSoEasy = [

    [1,8],

    new Set([7, 9]),

    new Set(),

    new Map([['a',2], ['b',2], ['c',2]]),

    [1,8,7],

    new Set([7, 9, 11]),

    [],

    new Set([7, 9, 71, 11, 45]),

    new Map([['a',2], ['c',2]]),

];

noSoEasy.sort((a, b) => {//b pirmas elementas
    if (b instanceof Array === a instanceof Array ||
        b instanceof Map=== a instanceof Map||
        b instanceof Set=== a instanceof Set) {
            return 0; //nieko nedaro
        }
        else if (b instanceof Array) {
            return 1;
        }
        else if (b instanceof Map) {
            return -1; //reikia keisti kad butu gerai
        }
        else if (b instanceof Set) {
            return -1; //reikia keisti kad butu gerai 
        }
    })

    console.log(noSoEasy);