function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var a = rand(0,4);
var b = rand(0,4);
 c = a / b;

if (c > 0) {
    console.log(a, b, 'true', c);
}
else {
    console.log(a, b, 'false', c);
}

var d = rand(0, 25);
var e = rand(0, 25);
var f = rand(0, 25);

if(e > d|| d > f) {
    console.log('d', d);
}
else if(d > e > f) {
    console.log('e', e);
}
else(d > f > e) {
    console.log('f', f);
}