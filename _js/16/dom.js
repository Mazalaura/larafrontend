function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log('uzduotis')


const div = document.querySelectorAll('div');
const spalva = ['green', 'red', 'yellow'];


for (let i = 0; i < div.length; i++) {
    if (i % 2 === 0) {

    div[i].classList.add('nepor');
   
   }
   else {
    div[i].style.height = rand(100, 300) + 'px';
    div[i].style.width = rand(100, 300) + 'px';
    div[i].style.backgroundColor = spalva[i%3];
   }
}