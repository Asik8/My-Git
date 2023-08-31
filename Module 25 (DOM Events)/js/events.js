console.log('Ajke Khela Hobe');

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


const blueBtn = document.getElementById('makeBlue');
blueBtn.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


const purpleBtn = document.getElementById('makePurple');
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


const orangeBtn = document.getElementById('makeOrange');
orangeBtn.addEventListener('click', makePurple)
function makePurple() {
    document.body.style.backgroundColor = 'Orange';
}


const tomatoBtn = document.getElementById('makeTomato');
tomatoBtn.addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'tomato';
})


document.getElementById('make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})