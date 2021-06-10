function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(document);

const h1 = document.querySelectorAll('h1');

// h1.classList.remove('abc');
// h1.classList.add('bbc');
// h1.classList.contains('jjjjj');

console.log(h1);

console.log(h1[0]);

console.log(h1[1]);

// h1.style.color = 'green'
// setTimeout(() => h1.style.color = 'green', 2000);

// const li = document.querySelectorAll('li')


// console.log(li[0].style.fontSize = rand(10, 30) + 'px');
// console.log(li[1].style.fontSize = rand(10, 30) + 'px');
// console.log(li[2].style.fontSize = rand(10, 30) + 'px');

const colors = ['green', 'yellow', 'blue', 'red'];
const klase = ['one', 'two', 'three'];
const ul = document.querySelectorAll('ul');

ul.forEach((lis, i) => {
    lis.querySelectorAll('li').forEach ((li, p) => {
        li.style.fontSize = rand(10, 30) + 'px';
        li.style.color = colors[i%4];
        li.classList.add(klase[p%3]);
    })
});
// const li = ul.querySelectorAll('li');




console.log('Dimitrij sprendimas')

// const ul = document.querySelectorAll('ul');

// const color = ['green', 'yellow', 'blue'];

// const cl = ['one', 'two', 'three']



// for (let i = 0; i < ul.length; i++) {

//    const li = ul[i].querySelectorAll('li');



//    for (let j = 0; j < li.length; j++) {

//      li[j].style.color = color[i % 3];

//      li[j].style.fontSize = rand(10, 30) + 'px';

//      li[j].classList.add(cl[j % 3]);

//    }

// }