function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('---------------1----------------------')
// Sukurkite tris kintamuosius ir priskirkite jiems skirtingus sveikus skaičius iš intervalo 5…25;
// Paskaičiuokite jų sumą ir priskirkite ją kintamajam. Pasinaudokite console.log atspauzdinkite sumos kintamąjį;


var a = 8, b = 10, c = 18;
var sum = a + b + c;

console.log('1A ', sum);

// Sudėkite skaičius į stringo tipo kintamąjį ir jį atspauszdinkite pasinaudodami console.log;
var string = String(a) + String(b) + String(c);
var string2 = '' + a + b + c;
console.log('1B ', string, string2);

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir jį atspauszdinkite pasinaudodami console.log;
var stringa = String(a), stringb = String(b), stringc = String(c);
answer = '';
var string3 = a + ' ' + b + ' ' + c + ' ';
console.log('1C ', stringa, answer, stringb, answer, stringc);
console.log('1C ', string3);

// Sudėkite skaičius į stringo tipo kintamąją padarant tarp skaičių tarpus ir gale pridedėkite trijų skaičių sumą, paskaičiuotą A dalyje. Atspauszdinkite gautą stringo tipo kintąmąjį pasinaudodami console.log;
console.log('1D ', stringa, answer, stringb, answer, stringc, sum);

console.log('---------------2----------------------')
// Sukurkite vieną kintamąjį, jam priskirkite skaičių (iš intervalo 5…10), kurį sugeneruoja funkcija rand(5, 10) ir jį atspauszdinkite pasinaudojus console.log;

var e = rand(5, 10)
console.log('2', e);

console.log('---------------3----------------------')
// Sukurkite kintamąjį ir jam priskirkite stringą “Labas”. Pasinaudodami ciklu ir console.log atspauzdinkite kintamąjį 5 kartus;

var laba = 'Labas', f;
for (f = 0; f < 5; f++){
console.log('3', laba);
}

console.log('---------------4----------------------')
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio 7 kartus;

for (f = 1; f <= 7; f++){
console.log('4', e);
}

console.log('---------------5----------------------')
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas;

for (f = 1; f <= e; f++){
    console.log('5', e);
    }

console.log('---------------6----------------------')
// Pasinaudojus ciklu ir ir console.log atspauzdinkite kintamąjį iš 2 uždavinio tiek kartų, koks skaičius yra sugeneruotas, bet tik tada jeigu jis didesnis už 7;

if(e > 7) {
    for (f = 1; f <= e; f++){
    console.log('6', e);
    }
    }

console.log('---------------7----------------------')
// Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…20. Ciklą kartokite 5 kartus;
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

var g;
for (f = 0; f < 5; f++) {
        g = rand(10, 20);   
console.log('7A', g);
}

// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
var sum = 0;
for (f = 0; f < 5; f++) {
    g = rand(10, 20);   
    sum = sum + g;
}
console.log('7B', sum);

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Stringo tipo kintamąjį atspazdinkite už ciklo ribų jam pasibaigus;
var sum2 ='';
for (f = 0; f < 5; f++) {
    g = rand(10, 20);   
    sum2 = sum2 + g + ' ';
}

console.log('7C', sum2);

// Skaičius, generuojamus ciklo viduje dėkite į stringo tipo kintamąjį tarp skaičių darydami tarpą. Ciklui pasibaigus prie stringo tipo kintamojo pridėkite ciklo viduje generuotų skaičių sumą, paskaičiuotą kaip B dalyje. Stringo tipo kintamąjį atspazdinkite pasinaudodami console.log;
var sum3 = '';
var suma = 0;
for (f = 0; f < 5; f++) {
    g = rand(10, 20);   
    suma = suma + g;
    sum3 = sum3 + g + ' ';
}
// sum3 = sum3 + suma
console.log('7D', sum3, suma);

console.log('---------------8----------------------')
// Sukurkite kintamąjį (jeigu reikia kelis kintamuosius) už ciklo ribų. Sukurkite kintamąjį už ciklo ribų. Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 10…25. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius mažesnis nei 12;
// Ciklo viduje sugeneruotą reikšmę priskirkite kintamajam, kurį sukūrėte už ciklo ribų ir jį atspauzdinkite;

var rand2;
do {
        rand2 = rand(10, 25); 
        console.log('8A', rand2);
} while(rand2 >= 12);

// Suskaičiuokite kiek iteracijų padarėte ir jų kiekį atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus;
var suma1 = 0;
do {
    rand2 = rand(10, 25); 
    console.log('8B', rand2);
    suma1++
} while(rand2 >= 12);

console.log('8B', 'suma', suma1);

// Skaičiuokite ciklo viduje generuojamų reikšmių sumą, atmesdami (neskaičiuodami) skaičius, kurie yra didesni nei 18, ją priskirdami kintamajam, kurį sukūrėte už ciklo ribų. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų;
var suma2 = 0;
do {
    rand2 = rand(10, 25); 
    console.log('8C', rand2);
   if (rand2 <= 18){
    suma2 += rand2
    }
} while(rand2 >= 12);

console.log('8C', 'suma', suma2);

// Sumą skaičiuokite kaip C dalyje, bet papildomai susikurkite kintamąjį, kuriame suskaičiuokite kiek reikšmių atmetėte (nesumavote) .Rezultatą su suma ir atmestų reikšmių kiekiu atspauzdinkite pasinaudodami console.log už ciklo ribų;
suma3 = 0;
count1 = 0;
do {
    rand2 = rand(10, 25); 
    console.log('8D', rand2);
   if (rand2 <= 18){
    suma3 += rand2
    }
    else {
        count1++
    }
} while(rand2 >= 12);

console.log('8D', 'suma', suma3);
console.log('8D', 'kiekis', count1);

// Suskaičiuokite kiek tarp cikle atsitiktinai generuojamų reikšmių yra lyginių ir kiek nelyginių skaičių. Rezultatą atspauzdinkite pasinaudodami console.log už ciklo ribų jam pasibaigus.

lyginiai = 0;
nelyginiai= 0;
do {
    rand2 = rand(10, 25); 
    console.log('8E', rand2);
   if (rand2 % 2 === 0) {
        lyginiai++
    }
    else {
        nelyginiai++
    }
    // rand2 % 2 ? nelyginiai++ : lyginiai++;
} while(rand2 >= 12);

console.log('8E', 'lyginiai', lyginiai);
console.log('8E', 'nelyginiai', nelyginiai);


// Ciklą iš dalies B kartokite tol, iki iteracijų kiekis bus didesnis nei 20. Paskaičiuokite kiek pakartojimų buvo atlikta ir rezultatą atspauzdinkite pabaigoje. 

var countSmall;
var countBig = 0; //pakartojimu kiekis
var countSmallall = 0; //bendras mazo ciklo iteraciju kiekis

do {
    countSmall = 0
    do {
        rand2 = rand(10, 20); 
        countSmall++
        countSmallall++
    } while(rand2 >= 12);

    countBig++
} while(countSmall < 20);

console.log('8F', 'BIG', countBig);
console.log('8F', 'Smallall', countSmallall);

console.log('---------------9----------------------')

// Ciklo viduje generuokite atsitiktinius skaičius funkcija rand(), kurie yra iš intervalo 5-10. Ciklą kartokite tol, kol ciklo viduje bus sugeneruotas skaičius 5;
// Ciklo viduje paleiskite dar vieną ciklą kurį kartokite tiek kartų, koks skaičius buvo sugeneruotas. Paskaičiuokite kiek iteracijų padarė išorinis ciklas ir kiek bendrai iteracijų padarė vidinis ciklas. Rezultatus atspauzdinkite pasinaudodami 


var rand5;
do {
    rand5 = rand(5, 10); 
    console.log('9', rand5);
} while(rand5 != 5);

var mazas9 = 0;
var didelis9 = 0;
var mi;
do {
    didelis9++
    rand5 = rand(5, 10); 
    console.log('9A', rand5);
    for(mi = 0; mi < rand5; mi++) {
    mazas9++
    }
} while(rand5 != 5);

console.log('9A', 'mazas', mazas9);
console.log('9A', 'didedlis', didelis9);
// Padarykite taip, kad išorinis ciklas pasibaigtų kai 5 yra sugeneruojamas ne pirmą, bet trečią kartą ir paskaičiuokite iteracijas analogiškai kaip A dalyje;
var count5 = 0;
var rand6 = 0;
do {
    rand6 = rand(5, 10); 
    if(rand6 === 5){
        count5++;
    }
    console.log('9B', rand6);
} while(count5 < 3);


// Padarykite analogiškai kaip B dalyje, bet tik kai 5 yra sugeneruojami 3 kartus iš eilės;

var count5 = 0;
var rand6 = 0;
do {
    rand6 = rand(5, 10); 
    if(rand6 === 5){
        count5++;
    }
    else {
        count5 = 0;
    }
    console.log('9C', rand6);
} while(count5 < 3);

console.log('---------------10----------------------');

