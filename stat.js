import {szotar} from './szotar.js';

const canv1 = document.getElementById('canv1');
const canv2 = document.getElementById('canv2');
const canv3 = document.getElementById('canv3');

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

let datum2Set = new Set();
for (let i = 0; i < szotar.length; i++) {
    datum2Set.add(szotar[i].datum2.slice(0,10));
}
//console.log([...datum2Set]);

bekuldoCounter();
magyarazoCounter();
datumCounter();

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
    console.log(arr);
    arr.sort((a,b) => b[1] - a[1]);

    if (arr.length > 18) {
        canv1.style.width = '600px';
        canv1.innerHTML = `<canvas id="bekuldo" width=${arr.length*32}px height=550px></canvas>`;
        canv1.style.overflowX = "scroll";
        canv1.style.overflowY = "hidden";
    } else {
        canv1.style.width = '600px';
        canv1.innerHTML = "<canvas id='bekuldo' width=600px height=550px></canvas>";
        canv1.style.overflowX = "hidden";
        canv1.style.overflowY = "hidden";
    }
    
    const bekuldo = document.getElementById('bekuldo');
    const ctx1 = bekuldo.getContext('2d');

    //coordinate system
    bekuldo.style.backgroundColor = "white";
    ctx1.translate(20,450);
    ctx1.strokeStyle = "#a79b96";
    ctx1.lineWidth = 3.0;
    ctx1.fillStyle = "black";
    ctx1.font = '10px sans-serif';
    ctx1.fillText("(0,0)",-15,15);
    ctx1.beginPath();
    ctx1.moveTo(-10, 0);
    ctx1.lineTo((arr.length*31), 0);
    ctx1.moveTo(10,60);
    ctx1.lineTo(10, -(canv1.offsetHeight)+140);
    ctx1.stroke();
    ctx1.closePath();

    ctx1.rotate(90 * Math.PI / 180);

    for (let l = 0; l < arr.length; l++) {
        ctx1.fillStyle = "black";
        ctx1.font = '14px sans-serif';
        // nevek
        ctx1.fillText(arr[l][0],10,-30*l-30);
        // szamok
        ctx1.fillText((arr[l][1]),(-arr[l][1]),-30*l-40);
        // oszlopok
        ctx1.lineWidth = 8.0;
        ctx1.strokeStyle = 'blue';
        ctx1.beginPath();
        ctx1.moveTo(0,-30*l-30);
        ctx1.lineTo((-arr[l][1]),-30*l-30);
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
    arr.sort((a,b) => b[1] - a[1]);

    console.log(arr);

    if (arr.length > 18) {
        canv2.style.width = '600px';
        canv2.innerHTML = `<canvas id="magyarazo" width=${arr.length*32}px height=550px></canvas>`;
        canv2.style.overflowX = "scroll";
        canv2.style.overflowY = "hidden";
    } else {
        canv2.style.width = '600px';
        canv2.innerHTML = "<canvas id='magyarazo' width=600px height=550px></canvas>";
        canv2.style.overflowX = "hidden";
        canv2.style.overflowY = "hidden";
    }
    
    const magyarazo = document.getElementById('magyarazo');
    const ctx2 = magyarazo.getContext('2d');

    //coordinate system
    magyarazo.style.backgroundColor = "white";
    ctx2.translate(20,450);
    ctx2.strokeStyle = "#a79b96";
    ctx2.lineWidth = 3.0;
    ctx2.fillStyle = "black";
    ctx2.font = '10px sans-serif';
    ctx2.fillText("(0,0)",-15,15);
    ctx2.beginPath();
    ctx2.moveTo(-10, 0);
    ctx2.lineTo((arr.length*31), 0);
    ctx2.moveTo(10,60);
    ctx2.lineTo(10, -(canv2.offsetHeight)+140);
    ctx2.stroke();
    ctx2.closePath();

    ctx2.rotate(90 * Math.PI / 180);
    
    for (let l = 0; l < arr.length; l++) {
        ctx2.fillStyle = "black";
        ctx2.font = '14px sans-serif';
        // nevek
        ctx2.fillText(arr[l][0],10,-30*l-30);
        // szamok
        ctx2.fillText((arr[l][1]),(-arr[l][1]),-30*l-40);
        // oszlopok
        ctx2.lineWidth = 8.0;
        ctx2.strokeStyle = 'blue';
        ctx2.beginPath();
        ctx2.moveTo(0,-30*l-30);
        ctx2.lineTo((-arr[l][1]),-30*l-30);
        ctx2.stroke();
        ctx2.closePath();
    }
}

function datumCounter() {
    let count;
    let arr = [];
    
    for (let i = 0; i < [...datum2Set].length; i++) {
        count = 0;
        for (var j = 0; j < szotar.length; j++) {
            if (szotar[j]['datum2'].slice(0,10) === [...datum2Set][i]) {
                count++;
            }
        }
        arr.push([[...datum2Set][i],count]);
    }

    arr.sort((a,b) => b[1] - a[1]);
    //console.log(arr);

    if (arr.length > 14) {
        canv3.style.width = '600px';
        canv3.innerHTML += `<canvas id="datum" width=${arr.length*31}px height=550px></canvas>`;
        canv3.style.overflowX = "scroll";
        canv3.style.overflowY = "hidden";
    }

    const datum = document.getElementById('datum');
    const ctx3 = datum.getContext('2d');

    //coordinate system
    datum.style.backgroundColor = "white";
    ctx3.translate(20,450);
    ctx3.strokeStyle = "#a79b96";
    ctx3.lineWidth = 3.0;
    ctx3.fillStyle = "black";
    ctx3.font = '10px sans-serif';
    ctx3.fillText("(0,0)",-15,15);
    ctx3.beginPath();
    ctx3.moveTo(-10, 0);
    ctx3.lineTo((arr.length*30.5), 0);
    ctx3.moveTo(10,60);
    ctx3.lineTo(10, -(canv3.offsetHeight)+160);
    ctx3.stroke();
    ctx3.closePath();

    ctx3.rotate(90 * Math.PI / 180);

    for (let l = 0; l < arr.length; l++) {
        ctx3.fillStyle = "black";
        ctx3.font = '14px sans-serif';
        // nevek
        ctx3.fillText(arr[l][0],10,-30*l-30);
        // szamok
        ctx3.fillText((arr[l][1]),8*(-arr[l][1]),-30*l-40);
        // oszlopok
        ctx3.lineWidth = 8.0;
        ctx3.strokeStyle = 'blue';
        ctx3.beginPath();
        ctx3.moveTo(0,-30*l-30);
        ctx3.lineTo(8*(-arr[l][1]),-30*l-30);
        ctx3.stroke();
        ctx3.closePath();
    }
}

function visitorCount(response) {
    console.log("Latogatasok szama: ",response.value);
}

globalThis.visitorCount = visitorCount;