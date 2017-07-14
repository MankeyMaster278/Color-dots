var body = document.querySelector("body")

var i = 1;
while (i < 10) {
    body.insertAdjacentHTML('beforeend', "<div class='yellow'></div>"); 
    i = i + 2;   
}