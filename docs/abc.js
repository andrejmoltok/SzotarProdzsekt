import {szotar} from '../szotar.js';

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const oldal = document.getElementById('oldal');

let newGroup;
let sorted;
let slideIndex = 0;

function selectLetterGroup(letter) {
    newGroup = [];
    slideIndex = 0;
    if (letter === 'a') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'a' ||
                szotar[i]['halan'][0].toLowerCase() === 'á') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'c') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'c' ||
                szotar[i]['halan'][0].toLowerCase() === 'cs') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'd') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'd' ||
                szotar[i]['halan'][0].toLowerCase() === 'dz' || 
                szotar[i]['halan'][0].toLowerCase() === 'dzs') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'e') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'e' ||
                szotar[i]['halan'][0].toLowerCase() === 'é') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'g') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'g' ||
                szotar[i]['halan'][0].toLowerCase() === 'gy') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'i') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'i' ||
                szotar[i]['halan'][0].toLowerCase() === 'í') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'l') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'l' ||
                szotar[i]['halan'][0].toLowerCase() === 'ly') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'n') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'n' ||
                szotar[i]['halan'][0].toLowerCase() === 'ny') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'o') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'o' ||
                szotar[i]['halan'][0].toLowerCase() === 'ó' ||
                szotar[i]['halan'][0].toLowerCase() === 'ö' ||
                szotar[i]['halan'][0].toLowerCase() === 'ő') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 's') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 's' ||
                szotar[i]['halan'][0].toLowerCase() === 'sz') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 't') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 't' ||
                szotar[i]['halan'][0].toLowerCase() === 'ty') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'u') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'u' ||
                szotar[i]['halan'][0].toLowerCase() === 'ú' ||
                szotar[i]['halan'][0].toLowerCase() === 'ü' ||
                szotar[i]['halan'][0].toLowerCase() === 'ű') {
              newGroup.push(szotar[i]);
            }
        }
    } else if (letter === 'z') {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === 'z' ||
                szotar[i]['halan'][0].toLowerCase() === 'zs') {
              newGroup.push(szotar[i]);
            }
        }
    } else {
        for (let i = 0; i < szotar.length; i++) {
            if (szotar[i]['halan'][0].toLowerCase() === letter) {
              newGroup.push(szotar[i]);
            }
        }
    }
    for (let i = 0; i < newGroup.length; i++) {
      sorted = newGroup.sort((a,b) => a.halan.localeCompare(b.halan))
    }
    console.log(sorted);
    groupSlides(slideIndex);
}

globalThis.selectLetterGroup = selectLetterGroup;

function plusSlides(n) {
    if (slideIndex + n > sorted.length-1) {
      slideIndex = 0;
      groupSlides(slideIndex);
    } else if (slideIndex + n < 0) {
      slideIndex = sorted.length-1;
      groupSlides(slideIndex);
    } else {
      groupSlides(slideIndex += n);
    } 
}
  
globalThis.plusSlides = plusSlides;

function groupSlides(n) {
    let halan = document.getElementById('halan');
    let magy = document.getElementById('magy');
    let bekuldo2 = document.getElementById('bekuldo2');
    let magyarazo2 = document.getElementById('magyarazo2');
    let datum2 = document.getElementById('datum2');
  
    console.log("Oldalszám: ",n);
    oldal.innerText = (n) + " / " + (sorted.length-1) + ". oldal";
    
    let text = ctx.measureText(sorted[n]['magy']);
    console.log('Szöveg szélesség:',Math.round(text.width));
  
    let my584 = window.matchMedia("(max-width: 584px)");
    let my684 = window.matchMedia("(max-width: 684px)");
    let my784 = window.matchMedia("(max-width: 784px)");
    let my984 = window.matchMedia("(max-width: 984px)");
    let my1084 = window.matchMedia("(max-width: 1084px)");
    let myMin1084 = window.matchMedia("(min-width: 1084px)");
  
    if (Math.round(text.width) > 2000 && my584.matches === true) {
      magy.style.alignItems = "normal";
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "scroll";
      magy.style.height = "350px";
    } else if (Math.round(text.width) > 3800 && my684.matches === true) {
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else if (Math.round(text.width) > 3800 && myMin1084.matches === true) {
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    }else if (Math.round(text.width) > 4300 && my784.matches === true){
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else if (Math.round(text.width) > 7000 && my984.matches === true) {
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else if (Math.round(text.width) > 3800 && my1084.matches === true){
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    }else if (Math.round(text.width) > 4000 && myMin1084.matches === true){
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else if (Math.round(text.width) > 7000 && my1084.matches === true) {
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else if (Math.round(text.width) > 7000 && myMin1084.matches === true) {
      magy.style.overflowY = "scroll";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "normal";
    } else {
      magy.style.overflowY = "hidden";
      magy.style.overflowX = "hidden";
      magy.style.alignItems = "center";
    }
  
    halan.innerHTML = `<h1>${sorted[n].halan}</h1>`;

    if (sorted[n]['magy'] === undefined) {
      magy.innerText = "Törölt Tag";
    } else {
      magy.innerText = sorted[n]['magy'];
    }
  
    if (sorted[n].bekuldo2 === undefined) {
      bekuldo2.innerText = 'Törölt Tag';
    } else {
      bekuldo2.innerText = sorted[n].bekuldo2;
    }
  
    if (sorted[n]["magyarazo2"] === undefined) {
      magyarazo2.innerText = "Törölt Tag";
    } else {
      magyarazo2.innerText = sorted[n]['magyarazo2'];
    }
    
    datum2.innerText = sorted[n].datum2.slice(0,10);
}

function visitorCount(response) {
  console.log("Latogatasok szama: ",response.value);
}

globalThis.visitorCount = visitorCount;