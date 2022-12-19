import {szotar} from './szotar.js';

const bekuldo = document.getElementById('bekuldo');
const ctx1 = bekuldo.getContext("2d");

const magyarazo = document.getElementById('magyarazo');
const ctx2 = magyarazo.getContext("2d");

bekuldo.style.width = "550px";
bekuldo.style.height = "350px";
bekuldo.style.backgroundColor = "white";

magyarazo.style.width = "550px";
magyarazo.style.height = "350px";
magyarazo.style.backgroundColor = "white";

ctx1.translate(25,325);
ctx2.translate(25,325);