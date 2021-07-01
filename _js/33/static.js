

// klasiniai dalykai

class Tv {
    constructor(is, kanalai, title) {
    this.istrizaine = is;
    this.kanalai = kanalai;
    this.title = title;
    }
    putIn() {
        localStorage.setItem(this.title, JSON.stringify(this));
    }
    getBack() {
        let out3 = localStorage.getItem(this.title);
        out3 = JSON.parse(out3);
        return [out3.istrizaine, out3.kanalai, out3.title];
    }
}

const tv1 = new Tv(78, ['LTV', 'TV3', 'LNK'], 'tv1');
const tv2 = new Tv(32, ['Discovery', 'GC', 'MTV'], 'tv2');

tv1.putIn();
let out1 = new Tv(...tv1.getBack());
out1.istrizaine++;
out1 = new Tv(...out1.getBack());

tv2.putIn();
let out2 = new Tv(...tv2.getBack());
out2.istrizaine++;
out2 = new Tv(...out2.getBack());

// console.log(out1);
// console.log(out2);


//neklasiniai dalykai


const tv3 = {
    istrizaine: 78,
    kanalai: ['LTV', 'TV3', 'LNK']
};

const tv4 = {
    istrizaine: 32,
    kanalai: ['Discovery', 'GC', 'MTV']
};


localStorage.setItem('tv3', JSON.stringify(tv3));//irasinejimo eilute
let out3 = localStorage.getItem('tv3');   //nuskaityti
out3 = JSON.parse(out3);    // israsinejimo eiliute
out3.istrizaine ++; //prideda istriziane
localStorage.setItem('tv3', JSON.stringify(out3));//irasinejimo eilute
out3 = localStorage.getItem('tv3');   //nuskaityti
out3 = JSON.parse(out3);// israsinejimo eiliute

localStorage.setItem('tv4', JSON.stringify(tv4));//irasinejimo eilute
let out4 = localStorage.getItem('tv4');   //nuskaityti
out4 = JSON.parse(out4);    // israsinejimo eiliute
localStorage.setItem('tv4', JSON.stringify(out4));//irasinejimo eilute
out4 = localStorage.getItem('tv4');   //nuskaityti
out4 = JSON.parse(out4);    // israsinejimo eiliute


// console.log(out3);
// console.log(out4);


const list = ['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1'];

class Sorter {
    constructor(ar) {
        this.arr = ar;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arr.slice();
    }
    sortByDesc() {
        this.arr.sort((a,b) => a > b ? -1 : 1);
        return this.arr.slice();
    }
    sortByDescLength() {
        this.arr.sort((a,b) => b.length - a.length);
        return this.arr.slice();
    }
    sortByAscLast() {
        this.arr.sort((a,b) => a[a.length - 1] < b[b.length - 1]  ? -1 : 1);
        return this.arr.slice();
    }
}
const sorter = new Sorter(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);


console.log(sorter.sortByAsc());
console.log(sorter.sortByDesc());
console.log(sorter.sortByDescLength());
console.log(sorter.sortByAscLast());

// 2. Sukurti klasę SetSorter, kuri turi tuos pačius rūšiavimo metodus, bet jos savybe arr yra Set tipo objektas.
class SetSorter {
    constructor(ar) {
        this.set = ar;
        this.arr = [...ar]; 
    }
    arrayToSet() {
        this.set.clear();
        this.arr.forEach(v => this.set.add(v));
        return this.set;
    }
    sortByAsc() {
        this.arr.sort();
        return this.arrayToSet();
    }
    sortByDesc() {
        this.arr.sort((a,b) => a > b ? -1 : 1);
        return this.arrayToSet();
    }
    sortByDescLength() {
        this.arr.sort((a,b) => b.length - a.length);
        return this.arrayToSet();
    }
    sortByAscLast() {
        this.arr.sort((a,b) => a[0][-1] > b[0][-1] ? -1 : 1);
        return this.arrayToSet();
    }
}
const original = new Set(['LTV', 'TV3', 'LNK', 'Polonia', 'SAT1']);
const sorter2 = new SetSorter(original);

console.log(sorter2.sortByAsc());
console.log(sorter2.sortByDesc());
console.log(sorter2.sortByDescLength());
console.log(sorter2.sortByAscLast());

// 3. Padaryti kad užrašius sorter.sortByAsc(['bla', 'ku ku', 'bam bam']) būtų išrušiuotas ir grąžintas masyvas, kuris pateikiamas kaip argumentas

// sorter2.sortByAsc().push((['bla', 'ku ku', 'bam bam']));

// console.log(sorter2.sortByAsc());


//1. Sukurti klasę Kibiras1. Konstruktoriuje Sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai savybei metodus prideti1Akmeni() 
// pridetiDaugAkmenu($kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu($kiekis) {
        this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }
}

const kibiras1 = [];

console.log(kibiras1);
const kiekis = kibiras1.kiekPririnktaAkmenu(10);
console.log(kibiras1);


// 2. Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti($kiekis), 
// kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

class Piniginė {
    constructor() {
    this.popieriniaiPinigai = 0;
    this.metaliniaiPinigai = 0;
}
ideti($kiekis) {
    if(kiekis <= 2) {
        this.popieriniaiPinigai = this.popieriniaiPinigai + kiekis;
    }
    else {
        this.metaliniaiPinigai = this.metaliniaiPinigai + kiekis;
    }
}
}


console.log(Piniginė);