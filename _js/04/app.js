function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//while - 0 iki daug
//do while - 1 iki daug
//for  - zinom kiek kartu is anksto


// var i, answer = '';

// for (i = 1; i <= 21; i++) {

//     if (i !== 1) {
//         answer += ', ';
//         }
//     answer += rand(10, 99);
// } 

    // console.log(answer);


    var sum = 0, answer = '', firstTime = true, digit;

do {
    if (!firstTime) {
        answer += ', ';
    }
    firstTime = false;
    digit = rand(10, 99);
    answer += digit;
    sum += digit;  

} while(sum < 250);

console.log(answer);
console.log(sum - digit);

// var cycle1 = 1;
// while (cycle <= 5){
//     console.log('cikle', cycle1);
//     cycle1++;
// }
// var counter = 0;
// var h = 0;
// var coin;
// do {
//     coin = rand(0, 1) ? 'H' : 'D';
//     if (coin == 'H') {
//         h++;
//     }
//     console.log('cikle', ++counter, h);
// }while (h < 3);



// var cycle2 = 1;
// while (cycle2 <= 5){
//     console.log('cikle', cycle2);
//     cycle2++;
// } while (cycle2 <= 5)


// for(var cycle3 = 1; cycle3 <= 5; cycle3++) {
// console.log('DIDELIS', cycle3);
// for(var cycle4 = 1; cycle4 <= 5; cycle4++) {
//     console.log('mazas', cycle4);
//     }
// }
