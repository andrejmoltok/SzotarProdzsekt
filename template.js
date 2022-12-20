import {szotar} from './szotar.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ugrasBe = document.getElementById('ugrasBemenet');
const ugrasGomb = document.getElementById('ugrasGomb');

const oldal = document.getElementById('oldal');

let slideIndex = 0;

ugrasGomb.addEventListener('click',function() {
    if (ugrasBe.value > szotar.length-1) {
        alert('Nincs ennyi szó.');
    } else if (ugrasBe.value < 0) {
        alert('Mínuszba értelmetlen menni...');
    }
    slideIndex = 0;
    plusSlides(+ugrasBe.value);
    ugrasBe.value = '';
});

showSlides(slideIndex);

function plusSlides(n) {
  if (slideIndex + n > szotar.length-1) {
    slideIndex = 0;
    showSlides(slideIndex);
  } else if (slideIndex + n < 0) {
    slideIndex = szotar.length-1;
    showSlides(slideIndex);
  } else {
    showSlides(slideIndex += n);
  } 
}

globalThis.plusSlides = plusSlides;

function showSlides(n) {
  let halan = document.getElementById('halan');
  let magy = document.getElementById('magy');
  let bekuldo2 = document.getElementById('bekuldo2');
  let magyarazo2 = document.getElementById('magyarazo2');
  let datum2 = document.getElementById('datum2');

  console.log("Oldalszám: ",n);
  oldal.innerText = (n+1) + " / " + (szotar.length+1) + ". oldal";
  
  let text = ctx.measureText(szotar[n]['magy']);
  console.log('Szöveg szélesség:',Math.round(text.width));

  let my584 = window.matchMedia("(max-width: 584px)");
  let my684 = window.matchMedia("(max-width: 684px)");
  let my784 = window.matchMedia("(max-width: 784px)");
  let my984 = window.matchMedia("(max-width: 984px)");
  let my1084 = window.matchMedia("(max-width: 1084px)");
  let myMin1084 = window.matchMedia("(min-width: 1084px)");

  if (Math.round(text.width) > 2000 && my584.matches === true) {
    magy.style.overflowY = "scroll";
    magy.style.overflowX = "scroll";
    magy.style.alignItems = "normal";
    magy.style.height = "350px";
  } else if (Math.round(text.width) > 3800 && my684.matches === true) {
    magy.style.overflowY = "scroll";
    magy.style.alignItems = "normal";
  } else if (Math.round(text.width) > 4300 && my784.matches === true){
    magy.style.overflowY = "scroll";
    magy.style.alignItems = "normal";
  } else if (Math.round(text.width) > 7000 && my984.matches === true) {
    magy.style.overflowY = "scroll";
    magy.style.alignItems = "normal";
  } else if (Math.round(text.width) > 7000 && my1084.matches === true) {
    magy.style.overflowY = "scroll";
    magy.style.alignItems = "normal";
  } else if (Math.round(text.width) > 7000 && myMin1084.matches === true) {
    magy.style.overflowY = "scroll";
    magy.style.alignItems = "normal";
  } else {
    magy.style.overflowY = "hidden";
    magy.style.alignItems = "center";
  }

  halan.innerHTML = `<h1>${szotar[n]['halan']}</h1>`;
  magy.innerText = szotar[n]['magy'];

  if (szotar[n]["bekuldo2"] === undefined) {
    bekuldo2.innerText = 'Ismeretlen';
  } else {
    bekuldo2.innerText = szotar[n]['bekuldo2'];
  }

  magyarazo2.innerText = szotar[n]['magyarazo2'];
  datum2.innerText = szotar[n]['datum2'].slice(0,10);
}
