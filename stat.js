import {szotar} from './szotar.js';

const bekuldo = document.getElementById('bekuldo');
const ctx1 = bekuldo.getContext("2d");

const magyarazo = document.getElementById('magyarazo');
const ctx2 = magyarazo.getContext("2d");

const canvas = [bekuldo,magyarazo];
const context = [ctx1,ctx2];

init(canvas,context);

function init(canv,ctx) {
    for (let i = 0; i < canv.length; i++) {
        canv[i].style.backgroundColor = "white";
    }
    for (let j = 0; j < ctx.length; j++) {
        ctx[j].translate(20,450);
        ctx[j].strokeStyle = "#a79b96";
        ctx[j].lineWidth = 3.0;
        ctx[j].fillStyle = "black";
        ctx[j].font = '10px sans-serif';
        ctx[j].fillText("(0,0)",-15,15);
        ctx[j].beginPath();
        ctx[j].moveTo(-10, 0);
        ctx[j].lineTo(570, 0);
        ctx[j].moveTo(10,60);
        ctx[j].lineTo(10, -440);
        ctx[j].stroke();
        ctx[j].closePath();
    }
}

let bekuldoSet = new Set();
for (let i = 0; i < szotar.length; i++) {
    if (szotar[i].bekuldo2 === undefined) {continue}
       bekuldoSet.add(szotar[i].bekuldo2);
}

let magyarazoSet = new Set();
for (let i = 0; i < szotar.length; i++) {
    if (szotar[i].magyarazo2 === undefined) {continue}
        magyarazoSet.add(szotar[i].magyarazo2);
}

bekuldoCounter();
magyarazoCounter();

function bekuldoCounter() {
    let count;
    let arr = [];
    for (let i = 0; i < [...bekuldoSet].length; i++) {
        count = 0;
        for (var j = 0; j < szotar.length; j++) {
            if (szotar[j]['bekuldo2'] === [...bekuldoSet][i]) {
                count++;
            }
        }
        arr.push([[...bekuldoSet][i],count]);
    }
    console.log(arr.sort((a,b) => b[1] - a[1]));
    ctx1.rotate(90 * Math.PI / 180);
    for (let l = 0; l < arr.length; l++) {
        ctx1.fillStyle = "black";
        ctx1.font = '14px sans-serif';
        // nevek
        ctx1.fillText(arr[l][0],10,-30*l-30);
        // szamok
        ctx1.fillText((arr[l][1]),4*(-arr[l][1]),-30*l-40);
        // oszlopok
        ctx1.lineWidth = 8.0;
        ctx1.strokeStyle = 'blue';
        ctx1.beginPath();
        ctx1.moveTo(0,-30*l-30);
        ctx1.lineTo(4*(-arr[l][1]),-30*l-30);
        ctx1.stroke();
        ctx1.closePath();
    }
}

function magyarazoCounter() {
    let count;
    let arr = [];
    for (let i = 0; i < [...magyarazoSet].length; i++) {
        count = 0;
        for (var j = 0; j < szotar.length; j++) {
            if (szotar[j]['magyarazo2'] === [...magyarazoSet][i]) {
                count++;
            }
        }
        arr.push([[...magyarazoSet][i],count]);
    }
    console.log(arr.sort((a,b) => b[1] - a[1]));
    ctx2.rotate(90 * Math.PI / 180);
    for (let l = 0; l < arr.length; l++) {
        ctx2.fillStyle = "black";
        ctx2.font = '14px sans-serif';
        // nevek
        ctx2.fillText(arr[l][0],10,-30*l-30);
        // szamok
        ctx2.fillText((arr[l][1]),4*(-arr[l][1]),-30*l-40);
        // oszlopok
        ctx2.lineWidth = 8.0;
        ctx2.strokeStyle = 'blue';
        ctx2.beginPath();
        ctx2.moveTo(0,-30*l-30);
        ctx2.lineTo(4*(-arr[l][1]),-30*l-30);
        ctx2.stroke();
        ctx2.closePath();
    }
}