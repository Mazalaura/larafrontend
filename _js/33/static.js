// statine savybe 

//1. Sukurti klasę Kibiras1. Konstruktoriuje Sukurti savybę akmenuKiekis  kuri lygi 0. Parašyti šiai savybei metodus prideti1Akmeni() 
// pridetiDaugAkmenu($kiekis) ir metodą išvedantį akmenų kiekį į konsolę- kiekPririnktaAkmenu(). 
// Sukurti kibiro objektą ir pademonstruoti akmenų rinkimą į kibirą ir rezultatų išvedimą.

class Kibiras1 {
    static bendrasAkmenuKiekis = 0;
    static skaiciuotiVisusAkmenis(kiekis) {
        this.bendrasAkmenuKiekis += kiekis; // gali buti Kibiras.bendrasAkmenuKiekis += kiekis
    }
    static kiekPririnktaAkmenu() {
        console.log('Viso jau surinkta tiek', this.bendrasAkmenuKiekis, 'akmenu');
    }
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni() {
        this.constructor.skaiciuotiVisusAkmenis(1);
        this.akmenuKiekis++;
    }
    pridetiDaugAkmenu(kiekis) {
        this.constructor.skaiciuotiVisusAkmenis(kiekis);
        this.akmenuKiekis = this.akmenuKiekis + kiekis;
    }
}

// const kibiras = new Kibiras1();
// const viedras = new Kibiras1();
// const kasikas = new Kibiras1();


// kibiras.kiekPririnktaAkmenu();
// viedras.kiekPririnktaAkmenu();
// kasikas.kiekPririnktaAkmenu();
// console.log('------------------------------------------------')

// viedras.prideti1Akmeni();

// kibiras.kiekPririnktaAkmenu();
// viedras.kiekPririnktaAkmenu();
// kasikas.kiekPririnktaAkmenu();
// console.log('------------------------------------------------')

// kasikas.pridetiDaugAkmenu(22);
// viedras.pridetiDaugAkmenu(22);

// kibiras.kiekPririnktaAkmenu();
// viedras.kiekPririnktaAkmenu();
// kasikas.kiekPririnktaAkmenu();
// console.log('------------------------------------------------')



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
