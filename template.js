let adatok = [
  {
    'halan'    : 'Ágáthombol',
    'magy'     : 'Ez egy tájszó, akkor mondják, amikor egy ág átlóg (áthombol) a szomszéd telkére. Egy ismert költő meg is verselte.',
    'bekuldo2' : 'Cseszlovak',
    'magyarazo2' : 'Kandabula',
    'datum2' : '2019. január 3.'
  },
  {
    'halan'    : 'Agrenicskál',
    'magy'     : 'Dühösen méricskél. Vagyis szitokszavakat kever a szakszavak közé.',
    'bekuldo2' : 'Kandabula',
    'magyarazo2' : 'Szederfalu',
    'datum2' : '2019. január 3.'
  }
]

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  if (slideIndex + n > adatok.length-1) {
    slideIndex = 0;
    showSlides(slideIndex);
  } else {
    showSlides(slideIndex += n);
  }
}

function showSlides(n) {
  let halan = document.getElementById('halan');
  let magy = document.getElementById('magy');
  let bekuldo2 = document.getElementById('bekuldo2');
  let magyarazo2 = document.getElementById('magyarazo2');
  let datum2 = document.getElementById('datum2');
  console.log(n);
  halan.innerText = adatok[n]['halan'];
  magy.innerText = adatok[n]['magy'];
  bekuldo2.innerText = adatok[n]['bekuldo2'];
  magyarazo2.innerText = adatok[n]['magyarazo2'];
  datum2.innerText = adatok[n]['datum2'];
}