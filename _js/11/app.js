function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const A = 'Aš stringas';

let B = new String('Aš irgi stringas')

let C = new String('10');

let G = {k:'10'};

B.labas = 'visogero';
A.labas = 'visogero';

console.log('A', A, typeof A, A.length, A.indexOf('i'), A.labas);

console.log('B', B, typeof B, B.length, B.indexOf('i'), B[4]);

const F = '2 + 5';
const F2 = new String('2 + 5');


console.log(eval(F));
console.log(eval(F2.valueOf()));

let FF = C - 1;

let V1 = '*** ' + A + '***';
let V2 = `*** ${A} ***`;

console.log(V1);
console.log(V2);

console.log('indexOf', A.indexOf('in'));
console.log('charAt', A.charAt(8));
console.log('[]', A[8]);
console.log('harCodeAt', A.charCodeAt(8));
console.log('lastIndexOf', A.lastIndexOf('in'));


let X = new Number(33);

X = X * 3;

console.log('X', X, typeof x);
console.log(Number.NaN)

let zz = 45.2;
let ww = 125.4;

let kitas = zz +ww;
console.log(kitas.toFixed(4), kitas.toPrecision(4));

console.log(Math.PI);
console.log(Math.random());

console.log(Math.round(Math.PI));
