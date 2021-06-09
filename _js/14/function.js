function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
console.log ('_________________________string______________________');

//tevas prototype


const logHi = function() {
        console.log(this.valueOf());
        console.log(this.indexOf('a'));
}

// paskaiciuotas a raidziu skaicius
const letterACounter = function() {
        let counter = 0;
        for (let i = 0; i < this.length; i++) {
                if (this[i] === 'a') {
                counter++;
                }
        }
        console.log('a:', counter);
}

String.prototype.log = logHi;
String.prototype.getA = letterACounter;

const kate = new String('dvi kates');

const suo = new String('trys sunys');

const pele = new String('daug daug baltu peliu');

// console.log(kate.indexOf('at'));
// console.log(kate.valueOf());

kate.log();
suo.log();
pele.log();

pele.getA();

// logHi();
// logHi();
// logHi();


function all() {
        console.log(this);
}

// all();

// console.log(document)

// OBJ = {prop1: 'labas'}

const ufo = {
        hello: 'Labas',
        fly(arr) {
                console.log('start', this);
                const go1 = function(a) {
                        console.log('go ne arrow viduje', a, this.hello);  
                }
                const go = (a) => {
                        console.log('go arrow viduje', a, this.hello);  
                }
                arr.forEach(go);
                arr.forEach(go1);
        }
}

ufo.fly([5,9,77]);

// function m1() {
//         console.log(arguments );
// }

const m1 = (...arg) => {
        console.log(arg);
}
m1('Lietus', 'RC', 'MR');

//  paskaiciuotas vidurkis duotu skaiciu
const vidurkis = (...arg) => {
        let sum = 0;
        for (let i = 0; i < arg.length; i++) {
                sum += arg[i];
        }
        console.log(sum/arg.length);

}
vidurkis (5, 7, 21, 55, 77); 
// const mas = [5, 4];
// vidurkis1(...mas);

const o1 = {a: 'a', b: 'b', c: 42};

const o2 = {...o1};

o2.a = 'g';

console.log(o1);
console.log(o2);