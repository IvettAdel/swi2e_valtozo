/*const num1 = 37;
console.log(num1);
if (num1 == 37) {
    var a = 35;
    let d = 47
    console.log(d)

}
var b = 37;

const num1Elem = document.querySelector('#num1');
const getButton =document.querySelector('#getButton');


getButton.addEventListener('click', () => {
    var szam = 3;
    szam = num1Elem.value;
    num1Elem.value = ' ';
    kiir (szam);
    vizsgalat(szam);
});

function vizsgalat(input) {
    let egyezik = input.match(/[1-3]/);
    if egyezik = input.match(/[0-9]/);
        console.log(egyezik);
    
    }else{
        console.log('Nem jó')
        }
 

function kiir () {

    if (szam == 1) {
    console.log('Egy');

    }else if (szam == 3) {
    console.log('három');
    
    }else{
    console.log('Ismeretlen érték')
    }
}

console.log(window.screen.width)
console.log(window.screen.height)
console.error('uuuuuuuuuuuuu')*/

const doboz1 = document.querySelector('#doboz1');
const startButton = document.querySelector('#startButton');

startButton.addEventListener('click', () => {
    doboz1.style.backgroundColor = 'blue';
    doboz1.style.animation = 'valami1 10s';

}); 
var szamokTomb = [35, 42, 27, 55, 72];
szamokTomb.forEach( (szam) => {
    console.log(szam);
});