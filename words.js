import { szotar } from './szotar.js';

const user = document.getElementById('users');
const bekuld = document.getElementById('bekuld');
const magy = document.getElementById('magy');

user.style.cursor = "pointer";
bekuld.style.cursor = "pointer";
magy.style.cursor = "pointer";

let userek;

users();

function users() {
    let userSet = new Set();
    for (let i = 0; i < szotar.length; i++) {
        if (szotar[i]["bekuldo2"] === undefined) {continue}
        if (szotar[i]["magyarazo2"] === undefined) {continue}
        userSet.add(szotar[i]["bekuldo2"]);
        userSet.add(szotar[i]["magyarazo2"]);
    }
    //console.log([...userSet]);
    userek = [...userSet];
    userek.forEach(function(v,i,a) {
        user.innerHTML += `<div id="${v}"><a onclick="words('${v}')">${v}</a></div>`;
        let currUser = document.getElementById(v);
        currUser.style.borderBottom = "2px solid #002349";
    });
}


function words(username) {
    const bekuld = document.getElementById('bekuld');
    const magy = document.getElementById('magy');
    
    for (let i = 0; i < userek.length; i++) {
        if (username === document.getElementById(username).id) {
            document.getElementById(username).style.borderBottom = "2px solid white";
        }
        document.getElementById(userek[i]).style.borderBottom = "2px solid #002349";
    }

    bekuld.innerHTML = '';
    magy.innerHTML = '';
    
    for (let i = 0; i < szotar.length; i++) {
        if (username === szotar[i]["bekuldo2"]) {
            bekuld.innerHTML += `<div>${szotar[i]['halan']}</div>`;
        }
        if (username === szotar[i]["magyarazo2"]) {
            magy.innerHTML += `<div>${szotar[i]['halan']}</div>`;
        }
    }
}

globalThis.words = words;

function visitorCount(response) {
    console.log("Latogatasok szama: ",response.value);
}

globalThis.visitorCount = visitorCount;