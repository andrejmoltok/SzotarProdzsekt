import {szotar} from './szotar.js';

const bekuldo = document.getElementById('bekuldo');
const ctx1 = bekuldo.getContext("2d");

const magyarazo = document.getElementById('magyarazo');
const ctx2 = magyarazo.getContext("2d");

const canvas = [bekuldo,magyarazo];
const context = [ctx1,ctx2];

init(canvas,context);

function init(con,ctx) {
    for (let i = 0; i < con.length; i++) {
        con[i].style.width = "600px";
        con[i].style.height = "350px";
        con[i].style.backgroundColor = "white";
    }
    for (let j = 0; j < ctx.length; j++) {
        ctx[j].translate(10,120);
        ctx[j].strokeStyle = "#a79b96";
        ctx[j].lineWidth = 3.0;
        ctx[j].fillStyle = "black";
        ctx[j].font = '6px sans-serif';
        ctx[j].fillText("(0,0)",3,10);
        ctx[j].beginPath();
        ctx[j].moveTo(0, 0);
        ctx[j].lineTo(270, 0);
        ctx[j].moveTo(20,20);
        ctx[j].lineTo(20, -110);
        ctx[j].stroke();
        ctx[j].closePath();
    }
}

function bekuldoCounter(user) {
    let count = 0;
    let arr = [];
    for (let i = 0; i < szotar.length; i++) {

    }
}

function magyarazoCounter() {

}