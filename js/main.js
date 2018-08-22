var imgCarousel = document.getElementsByClassName('imgCarousel');




for (var i = 0; i < imgCarousel.length; i++) {
  imgCarousel[i].style.display = "none";

}
imgCarousel[0].style.display = "none";

function autoCarousel(){
  var id = setInterval(frame, 50);
  function frame() {
    for (var i = 0; i < imgCarousel.length; i++) {
      imgCarousel[i].style.display = "block";
      if (imgCarousel =! i) {
        for (var j = 0; j < imgCarousel.length; j++) {
          imgCarousel[j].style.display = "none";
        }
      }
    }}

}
