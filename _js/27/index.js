localStorage.setItem('cat', 'Miau Miau');
localStorage.setItem('dog', 'Au Au Au');

// localStorage.removeItem('dog');

// localStorage.clear();

console.log(localStorage.getItem('cat'));
console.log(localStorage.getItem('dog'));

//sukuria 100 sunu sandeliuke
for(let i = 1; i <= 100; i++){
localStorage.setItem('dog' +i, "Au Au Au");
}

localStorage.getItem('ar', ['a', 'b']);
console.log(localStorage.getItem('ar'));
localStorage.getItem('d', 500);
console.log(localStorage.getItem('d'));
localStorage.getItem('o', {a:'s'});
console.log(localStorage.getItem('o'));

localStorage.getItem('ar', JSON.stringify['a', 'b']);
console.log(localStorage.getItem('ar'));


const cat = [];
for(let i = 1; i <= 100; i++){
    cat.push('cat')
}
localStorage.getItem('cat', JSON.stringify('cat'));
console.log(localStorage.getItem('cat'));