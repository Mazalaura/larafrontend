

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
        this.akmenuKiekis = 0; //this pastoviai naudojamas
    }
    prideti1Akmeni() {        // metodas nes funkcijoje
        this.akmenuKiekis++; //savybe
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu() {
        console.log('Akmenu yra va tiek:', this.akmenuKiekis);
    }
}

const kibiras = new Kibiras1();
const viedras = new Kibiras1();
const kasikas = new Kibiras1();


kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------------------------')

viedras.prideti1Akmeni();

kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------------------------')

kasikas.pridetiDaugAkmenu(22);
viedras.pridetiDaugAkmenu(22);

kibiras.kiekPririnktaAkmenu();
viedras.kiekPririnktaAkmenu();
kasikas.kiekPririnktaAkmenu();
console.log('------------------------------------------------')

// 2. Sukurti klasę Piniginė. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti($kiekis), 
// kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. 
// Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. 
// Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.

// class Pinigine {
//     constructor() {
//     this.popieriniaiPinigai = 0;
//     this.metaliniaiPinigai = 0;
// }
// ideti(kiekis) {
//     if(kiekis <= 2) {
//         this.metaliniaiPinigai += kiekis;
//     }
//     else {
//         this.popieriniaiPinigai += kiekis;
//     }
// }
// skaiciuoti() {
//     console.log('Yra va tiek pinigu:', this.metaliniaiPinigai + this.popieriniaiPinigai);
// }
// }

// const odinePinigine = new Pinigine();
// const plastikinePinigine = new Pinigine();

// odinePinigine.skaiciuoti();
// plastikinePinigine.skaiciuoti();
// console.log('------------------------------------------------')

// odinePinigine.ideti(235);
// plastikinePinigine.ideti(0.87);
// odinePinigine.ideti(100);
// plastikinePinigine.ideti(1);
// odinePinigine.ideti(100);
// plastikinePinigine.ideti(10);

// odinePinigine.skaiciuoti();
// plastikinePinigine.skaiciuoti();
// console.log('------------------------------------------------')

// 4. Sukurti klasę PirkiniuKrepšelis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. 
// Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). 
// Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). 
// Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

// class PirkiniuKrepselis {
//     constructor() {
//     this.turinys = new Map();
// }
// idetiSureli(kiekis) {
//     if(this.turinys.has('sureliai')) {
//         const t = this.turinys.get('sureliai')
//         this.turinys.set('sureliai', kiekis + t);
//     } 
//     else {
//         this.turinys.set('sureliai', kiekis);
//     }
// }
// idetiPieno(kiekis) {
//     if(this.turinys.has('pienas')) {
//         const t = this.turinys.get('pienas')
//         this.turinys.set('pienas', kiekis + t);
//     } 
//     else {
//         this.turinys.set('pienas', kiekis);
//     }
// }
// idetiDuonos(kiekis) {
//     if(this.turinys.has('duona')) {
//         const t = this.turinys.get('duona')
//         this.turinys.set('duona', kiekis + t);
//     } 
//     else {
//         this.turinys.set('duona', kiekis);
//     }
// }
// krepselioTurinys() {
//     console.log('Krepselyje yra:', this.turinys);
// }
// }


class PirkiniuKrepselis {
    constructor() {
    this.turinys = new Map();
}
idetiProdukta(kiekis, produktas) {
    if(this.turinys.has(produktas)) {
        const t = this.turinys.get(produktas)
        this.turinys.set(produktas, kiekis + t);
    } 
    else {
        this.turinys.set(produktas, kiekis);
    }
}
idetiSureli(kiekis) {
   this.idetiProdukta(kiekis, 'sureliai')
}
idetiPieno(kiekis) {
    this.idetiProdukta(kiekis, 'pienukas')
}
idetiDuonos(kiekis) {
    this.idetiProdukta(kiekis, 'batonas')
}
krepselioTurinys() {
    console.log('Krepselyje yra:', this.turinys);
}
}

const krepselis = new PirkiniuKrepselis ();


krepselis.krepselioTurinys();
console.log('------------------------------------------------')

krepselis.idetiPieno(1);
krepselis.idetiSureli(5);
krepselis.idetiSureli(11);
krepselis.idetiDuonos(1);
krepselis.idetiPieno(2);


krepselis.krepselioTurinys();
console.log('------------------------------------------------')

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. 
// Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda 
// vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. 
// Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Troleibusas {
    constructor() {
        this.keleiviuSkaicius = 0; //this pastoviai naudojamas
    }
    ilipa(keleiviuSkaicius) {        // metodas nes funkcijoje
        this.keleiviuSkaicius += keleiviuSkaicius; //savybe
    }
    islipa(keleiviuSkaicius) {
        if(keleiviuSkaicius > this.keleiviuSkaicius) {
            console.log('Per daug islipa!');
            this.keleiviuSkaicius = 0;
    }
    else {
        this.keleiviuSkaicius -= keleiviuSkaicius;
    }
    }
    vaziuoja() {
        console.log('Troleibusu vaziuoja keleiviu:', this.keleiviuSkaicius);
    }
}

const trulikas = new Troleibusas ();
trulikas.ilipa(15)
trulikas.islipa(9)
trulikas.ilipa(11)
trulikas.islipa(15)

trulikas.vaziuoja();
console.log('------------------------------------------------')

// 5. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų 
// ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda 
// banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) 
// laikykite vienu banknotu ar viena moneta.

class Pinigine {
        constructor() {
        this.popieriniaiPinigai = [0];
        this.metaliniaiPinigai = [0];
    }
    ideti(kiekis) {
        if(kiekis <= 2) {
            this.metaliniaiPinigai.push(kiekis);
        }
        else {
            this.popieriniaiPinigai.push(kiekis);
        }
    }
    banknotai() {
        console.log('Yra tiek banknotu:', this.popieriniaiPinigai.length -1);
    }
    monetos() {
        console.log('Yra tiek monetu:', this.metaliniaiPinigai.length -1);
    }
    skaiciuoti() {
        console.log('Yra tiek pinigu:', this.metaliniaiPinigai.reduce((a, v) => a + v) + this.popieriniaiPinigai.reduce((a = 0, v) => a + v) );
    }
    }
    
    const odinePinigine = new Pinigine();
    const plastikinePinigine = new Pinigine();
    
    odinePinigine.ideti(235);
    plastikinePinigine.ideti(0.87);
    odinePinigine.ideti(100);
    plastikinePinigine.ideti(1);
    odinePinigine.ideti(100);
    plastikinePinigine.ideti(10);



    odinePinigine.monetos();
    odinePinigine.banknotai();
    plastikinePinigine.monetos();
    plastikinePinigine.banknotai();

    console.log('------------------------------------------------')
    




