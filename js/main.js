//For take all of document with class 'slide'
var slide = document.getElementsByClassName('slide');
var button = document.getElementsByClassName('buttonSlider');

//For make all oh them with opacity 0 and transition
for (var i = 0; i < slide.length; i++) {
  slide[i].style.opacity = "0";
  slide[i].style.transition = "1s ease";
}
//But make the first element opacity 1
slide[0].style.opacity = "1";

//Variable for selection the next element
var numberSlide = 0;

//For activate event with all buttons
for (let i = 0; i < button.length; i++) {

   button[i].addEventListener("click", function() {

    clickAct(this);

  });
}

//Interval between activate function
var auto = setInterval(function () { clickAct("nothing");}, 5000);

function clickAct(button) {

  //If that the button with the id return
  if (button.id === "return") {

    numberSlide = numberSlide -1;

    //For remake numberSlide in the end and restart the slider
    if (numberSlide < 0) {

      numberSlide = slide.length -1;
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";

    } else {

      //For make all slide in opacity 0
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";

    }

  } else if (button.id === "next") {
    //If that the button with the id next

    numberSlide = numberSlide + 1;

    //If the number is egal and more that the slide.length
    if (numberSlide >= slide.length) {

      numberSlide = 0;
      //For make all slide in opacity 0
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";

    } else {

      //For make all slide in opacity 0
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";

    }

  } else {
    //Else for the interval function
    numberSlide++;

    //For remake numberSlide in the begining and restart the slider
    if (numberSlide >= slide.length) {

      numberSlide = 0;
      //For make all slide in opacity 0
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";

    } else {

      //For make all slide in opacity 0
      for (var i = 0; i < slide.length; i++) {
        slide[i].style.opacity = "0";
      }
      //Except the slide ask
      slide[numberSlide].style.opacity = "1";
    }
  }
}
