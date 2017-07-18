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

var borderTypes = ['solid', 'dashed', 'dotted'];



var counter = 0;

while (counter < 16) {
var you = document.createElement('div');


var purpleBackground = getRandomInt(0,255);
var orangeBackground = getRandomInt(0,255);
var yellowBackground = getRandomInt(0,255);
var alphaBackground = getRandomArbitrary(0.5,1);

you.style.backgroundColor = `rgba(${purpleBackground}, ${orangeBackground}, ${yellowBackground}, ${alphaBackground})`;



var purpleBorder = getRandomInt(0,255);
var orangeBorder = getRandomInt(0,255);
var yellowBorder = getRandomInt(0,255);
var alphaBorder = getRandomArbitrary(0.5,1);

you.style.borderColor = `rgba(${purpleBorder}, ${orangeBorder}, ${yellowBorder}, ${alphaBorder})`;
you.style.borderStyle = borderTypes[getRandomInt(0,2)]






me.appendChild(you);

counter += 1;
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var divs = document.querySelectorAll("div");

divs.forEach(function(div){

    div.addEventListener('mouseover', function(){
        
    var blueBackground = getRandomInt(0,255);
    var greenBackground = getRandomInt(0,255);
    var redBackground = getRandomInt(0,255);
    var alphaBackground = getRandomArbitrary(0.5,1);
    div.style.backgroundColor = `rgba(${blueBackground}, ${greenBackground}, ${redBackground}, ${alphaBackground})`;
    })
});











/*var i = 1;
while (i < 10) {
    body.insertAdjacentHTML('beforeend', "<div class='yellow'></div>"); 
    i = i + 2;   
}*/