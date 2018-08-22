var slide = document.getElementsByClassName('slide');

for (var i = 0; i < slide.length; i++) {
  slide[i].style.opacity = "0";
}
slide[0].style.opacity = "1";

for (var i = 0; i < slide.length; i++) {
  slide[i].style.transition = "0.5s ease";
}


var numberSlide = 1;

setInterval(clickAct, 5000);

function clickAct() {

  if (numberSlide === slide.length) {
    numberSlide = 0;
  } else {
    for (var i = 0; i < slide.length; i++) {
      slide[i].style.opacity = "0";
    }
    slide[numberSlide].style.opacity = "1";
    numberSlide++;
  }

}
