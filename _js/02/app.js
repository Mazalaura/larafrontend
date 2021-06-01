
//skaiciu palyginimas

var a = 5;

console.log('2 > 3', 2 > 3); //daugiau
console.log('2 < 3', 2 < 3); // maziau 
console.log('2 == 3', 2 == 3); //lygu

console.log('a(5) = 3', a = 3); //priskyrimas
console.log('2 |= 3', 2 |= 3);  //nelygu
console.log('2 >= 3', 2 >= 3); //daugiau arba lygu
console.log('2 <= 3', 2 <= 3); //maziau arba lygu


//stringu palyginimas

console.log('A == Z', 'A' == 'Z'); // lygu
console.log('A != Z', 'A' != 'Z'); // nelygu
console.log('A > Z', 'A' > 'Z'); // daugiau
console.log('AA > AB', 'AA' > 'AB'); // daugiau

//misrus palyginimas
var number = 2;
var string = '2';

console.log('2 == "2"', number == string); //lygu

var bool = true;
bool = string(bool);
console.log(typeof bool);
console.log(bool);

var bool2 = false;
bool2 = number(bool2);
console.log(typeof bool2);
console.log(bool2);

var strage = '   555   ';
strage = number(strage);
console.log(strage);
