var css = document.querySelector("p");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.getElementById("gradient")
var button = document.querySelector(".ranColor")

function setColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

window.onload = setColor();

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomGradient() {
    console.log("clicked");
    let r1 = getRandomInt(256);
    let g1 = getRandomInt(256);
    let b1 = getRandomInt(256);
    let r2 = getRandomInt(256);
    let g2 = getRandomInt(256);
    let b2 = getRandomInt(256);
    let randomGradient = "linear-gradient(to right,rgb(" +
        r1 + ", " + g1 + ", " + b1 +
        "), rgb(" +
        r2 + ", " + g2 + ", " + b2 +
        "))";

    body.style.background = randomGradient;
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
button.addEventListener("click", getRandomGradient);