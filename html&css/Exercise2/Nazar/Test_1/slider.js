document.getElementById("left").onclick = sliderLeft;
document.getElementById("right").onclick = sliderRight;
var w=document.getElementById("sl1").width;
var left = 0;
var timer;
autoSlider();
function autoSlider() {
    timer = setTimeout(sliderLeft, 3500)
}//Слайдер с права влево
function sliderLeft() {
    var sliders = document.getElementById("sliders");
    left = left - w;
    if (left < -(4*w)){
        left = 0;
    }
    sliders.style.left = left +'px';
    autoSlider();
}

//слайдер с лева вправо
function sliderRight() {
    var sliders = document.getElementById("sliders");

    left = left + w;
    if (left > 0){
        left = -4*w;
    }
    sliders.style.left = left +'px';
}