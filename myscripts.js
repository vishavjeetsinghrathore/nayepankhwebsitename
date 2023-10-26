


  

   

    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
      
        if (window.scrollY > 50) { // Adjust the scroll threshold as needed
          navbar.style.backgroundColor = "#2b2828"; // Set the background color to the desired color
        } else {
          navbar.style.backgroundColor = "transparent"; // Set the background color to transparent
        }
      });




      var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000000; // duration(speed) of the slide

function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
  
    currentImg = n;
  
    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }

var timer = setInterval(changeSlide, interval);

currentImg = (currentImg + 1) % imgs.length; // update the index number

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}

