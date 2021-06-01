function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log('---------------10----------------------')
// Kazys ir Petras žaidžiai bingo. Petras per vieną partiją surenka taškų kiekį nuo 10 iki 20, Kazys - surenka taškų kiekį nuo 5 iki 25. Console.log išvesti žaidėjų vardus su taškų kiekiu ir “Partiją laimėjo: ​laimėtojo vardas​”. Taškų kiekį generuokite funkcija ​rand()​. Žaidimą laimi tas, kas greičiau surenka 222 taškus. Partijas kartokite tol, kol kažkuris žaidėjas pirmas surenks 222 arba daugiau taškų.

var petras = 0, kazys = 0;

do{
petras += rand(10, 20);
kazys += rand(5, 25);

}while(petras < 222 && kazys < 222)

if (petras >= 222 && kazys >= 222){
    console.log('Lygiosios', 'Petras', petras, 'Kazys', kazys);
}
else if(pertas > kazys) {
    console.log('Laimėjo Petras', 'Petras', petras, 'Kazys', kazys);
}
else {
    console.log('Laimėjo Kazys', 'Petras', petras, 'Kazys', kazys);
}