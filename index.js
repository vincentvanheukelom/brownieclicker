const button = document.querySelector("button");

let aantalPunten = 0;

let audioElement = document.getElementById("lied");

let audioElement2 = document.getElementById("audio1");

let liedGespeeld = false;

let audio1Gespeeld = false;

button.addEventListener("click", function () {
  aantalPunten++;

  if (aantalPunten >= 5001) {
    aantalPunten += 99;
  } else if (aantalPunten >= 2001) {
    aantalPunten += 49;
  } else if (aantalPunten >= 1001) {
    aantalPunten += 19;
  } else if (aantalPunten >= 501) {
    aantalPunten += 9;
  } else if (aantalPunten >= 151) {
    aantalPunten += 4;
  } else if (aantalPunten >= 51) {
    aantalPunten += 1;
  }

  document.querySelector("p").textContent = "Brownie Punten: " + aantalPunten;

  Plaatje();

  animateImage();
});

// Ik heb hier ervoor gezorgd dat er bij elke klik 1 punt erbij komt, en dat het aantal punten per click wordt verhoogd als je een aantal punten hebt bereikt.
// Ook heb ik hier de "p" mee laten veranderen met het aantal punten dat je hebt. Ik heb hier ook de functies "Plaatje" en "animateImage" aangesproken zodat
// deze ook werken tijdens de click.

button.addEventListener("click", Plaatje);

function Plaatje() {
  if (aantalPunten >= 5000) {
    document.querySelector("img").src = "images/brownie7.png";
    if (!liedGespeeld) {
      Liedje();
      liedGespeeld = true;
    }
    startConfetti();
  } else if (aantalPunten >= 2000) {
    document.querySelector("img").src = "images/brownie6.png";
  } else if (aantalPunten >= 1000) {
    document.querySelector("img").src = "images/brownie5.png";
  } else if (aantalPunten >= 500) {
    document.querySelector("img").src = "images/brownie4.png";
    if (!audio1Gespeeld) {
      Geluid1();
      audio1Gespeeld = true;
    }
  } else if (aantalPunten >= 150) {
    document.querySelector("img").src = "images/brownie3.png";
  } else if (aantalPunten >= 50) {
    document.querySelector("img").src = "images/brownie2.png";
  }
}

// Voor als de gebruiker op de button clickt heb ik een addEventListener toegevoegd, zodat het event afgevuurt wordt.
// Ik heb er hier voor gezorgd dat er bij een bepaald aantal punten de image veranderd wordt, ik heb dit gedaan met behulp van de querySelector om de button aan
// te spreken in de html.

function Liedje() {
  audioElement.play();
}

function Geluid1() {
  audioElement2.play();
}

// Ik heb bij 500 punten en 5000 punten ervoor gezorgd dat er een geluid afspeelt met behulp van deze functions en heb ik audioGespeeld/liedjeGespeeld toegevoegd
// die van false naar true veranderen zodat het geluid niet bij elke klik afspeelt.

button.addEventListener("click", animateImage);

function animateImage() {
  let img = document.querySelector("img");
  img.classList.add("shake");
  setTimeout(() => img.classList.remove("shake"), 100);
}

// Ik heb hier ervoor gezorgd met de addEventListener dat bij elke klik de button een animatie heeft. Ik heb deze animatie van deze bronnen gehaald.
// https://www.w3schools.com/howto/howto_css_shake_image.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

function startConfetti() {
  confetti({
    particleCount: 100,
    spread: 100,
    origin: { y: 0.8 },
  });
}

// Ik heb met deze function ervoor gezorgd dat er confetti komt bij de click, ik heb deze in werking gezet vanaf dat je 5000 punten hebt. Ik heb de code voor de
// confetti van deze bron gehaald.
// https://github.com/catdad/canvas-confetti?utm_source=chatgpt.com
