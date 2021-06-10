function rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
console.log ('_________________________class______________________');

const obj = new Object();

console.log(typeof obj);

class Kate {

    constructor() {
    
        this.age = rand(1, 8);
    }
    voice = () => console.log('miau');

    getAge {
       console.log(this);
    }

    getAge1 = ( => console.log(this.age))
}

const ka1 = new Kate();
const ka2 = new Kate();

console.log(obj);
console.log(ka1);
console.log(ka2);

setTimeout(ka2.getAge, 1000);
console.log ('_________________________dom______________________');
