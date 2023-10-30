


var slide = document.getElementsByClassName("slide");
var autoplay = document.getElementsByClassName("container")[0].getAttribute("data-autoplay");
var l = slide.length;
var interval = 6000;
var set;

window.onload = function () {
    initialize();
    slide[0].style.opacity = "1";
}

function initialize() {
    if (autoplay === "true")
        set = setInterval(function () { next(); }, interval);
}




var count = 0;
function next() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    count++;

    if (count == l) {
        count = 0;
        slide[count].style.opacity = "1";
       

    } else {
        slide[count].style.opacity = "1";
       
    }
    initialize()
}


function prev() {
    clearInterval(set);
    slide[count].style.opacity = "0";
    count--;

    if (count == -1) {
        count = l - 1;
        slide[count].style.opacity = "1";

    } else {
        slide[count].style.opacity = "1";
    }
    initialize()
}