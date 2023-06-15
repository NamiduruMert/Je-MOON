document.addEventListener("scroll", function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var parallaxElements = document.querySelectorAll(".parallax");
  
    for (var i = 0; i < parallaxElements.length; i++) {
      var elementTop = parallaxElements[i].offsetTop;
      var elementHeight = parallaxElements[i].offsetHeight;
  
      if (scrollTop > elementTop - window.innerHeight && scrollTop < elementTop + elementHeight) {
        parallaxElements[i].classList.add("visible");
      } else {
        parallaxElements[i].classList.remove("visible");
      }
    }
  });