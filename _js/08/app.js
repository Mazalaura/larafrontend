function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var komoda = ['obuolys', 'suo', 'kate', 'gyvate', '58', 'geles plastikines'];
console.log(typeof komoda);
console.log(komoda);

komoda[2]++;

console.log(komoda[2]);

console.log('masyvas', komoda);

console.log('masyvo ilgis', komoda.length);

console.log('masyvo paskutinis', komoda[komoda.length - 1]);

for(var index = 0; index < komoda.length; index++){
    console.log('stalcius Nr. + index', komoda[index]);
}
komoda.push();
komoda.push ('kumele', 'dramblys'); //prideda i gala
komoda.unshift('padanga'); //prideda i pradzia

var b = komoda.indexOf('geles plastikines');

komoda.splice('splice', komoda.splice(b, 1));

var tuscias = [];

for ( var i = 0; i < 29; i++) {
    Array.push(rand(5, 29));
}
console.log(Array);


console.log(komoda.indexOf('suo'));

var trinti;
var sk = [58, 45, 32, 47, 58, 32, 100, 147, 32];
console.log ('sk', sk.slice());

while((trinti = sk.indexOf(32)) >= 0){
    sk.splice(trinti, 1);
}



