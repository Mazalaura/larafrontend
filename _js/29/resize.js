
const mobSize = 700;
let currentSize;
changeSize();

let heightOutput, widthOutput // nieko nelaukia is karto ivuksta

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('DOMContentLoaded', () => {
    // console.log('go', e); //kiek kartu iskvieta buvo
    heightOutput = document.querySelector('#height');
    widthOutput = document.querySelector('#width');
    reportWindowSize();
});

window.addEventListener('resize', () => {
    reportWindowSize();
    });

function changeSize() {
    console.log('go');
  let change = currentSize;
    if(window.innerWidth > mobSize) {
        currentSize = 'desktop'
    }
    else {
        currentSize = 'mobile'
    }
    if(change !== currentSize){
        console.log('Change layout to ' + currentSize); //dedamas kodas kuris nurenderina puslapi
    }
}
