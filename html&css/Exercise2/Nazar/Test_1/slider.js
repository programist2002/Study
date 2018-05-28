document.getElementById("left").onclick = sliderLeft;
document.getElementById("right").onclick = sliderRight;
var left = 0;
var timer;
autoSlider();
function autoSlider() {
    timer = setTimeout(sliderLeft, 2000)
}

//Слайдер с права влево
function sliderLeft() {
    var sliders = document.getElementById("sliders");
    left = left - 819.6;
    if (left < -3278.4){
        left = 0;
    }
    sliders.style.left = left +'px';
    autoSlider();
}

//слайдер с лева вправо
function sliderRight() {
    var sliders = document.getElementById("sliders");
    left = left + 819.6;
    if (left > 0){
        left = -3278.4;
    }
    sliders.style.left = left +'px';
}