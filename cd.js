/*var body = document.querySelector("body");

var i = 1;

while (i < 10) {
    i++
var button = document.createElement("button");

button.innerText= "Click Here";
button.style.backgroundColor= "blue";

body.appendChild(button);
i = i + 2;
}*/




var me = document.querySelector('body');



var counter = 0;

while (counter < 5) {
var you = document.createElement('div');


var purpleValue = getRandomInt(0,255);
var orangeValue = getRandomInt(0,255);
var yellowValue = getRandomInt(0,255);

you.style.backgroundColor = `rgb(${purpleValue}, ${orangeValue}, ${yellowValue})`;



var purpleBorder = getRandomInt(0,255);
var orangeBorder = getRandomInt(0,255);
var yellowBorder = getRandomInt(0,255);

you.style.borderColor = `rgb(${purpleBorder}, ${orangeBorder}, ${yellowBorder}`;






me.appendChild(you);

counter += 1;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}









/*var i = 1;
while (i < 10) {
    body.insertAdjacentHTML('beforeend', "<div class='yellow'></div>"); 
    i = i + 2;   
}*/