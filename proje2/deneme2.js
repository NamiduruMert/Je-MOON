var hamburgerMenu = document.getElementById('hamburger-menu');
    var originalPageContent = document.getElementById('original-page-content');
    var alternativePageContent = document.getElementById('alternative-page-content');
    var isAlternativePageVisible = false;
  
    hamburgerMenu.addEventListener('click', function() {
      if (isAlternativePageVisible) {
        originalPageContent.style = 
        originalPageContent.style.display = 'block';
        alternativePageContent.style.display = 'none';
        isAlternativePageVisible = false;
      } else {
        originalPageContent.style.display = 'none';
        alternativePageContent.style.display = 'block';
        isAlternativePageVisible = true;
      }
    });
  
    var pageLinks = document.getElementsByClassName('page-link');
    for (var i = 0; i < pageLinks.length; i++) {
      pageLinks[i].addEventListener('click', function(event) {
        var targetId = event.target.getAttribute('data-target');
        originalPageContent.style.display = 'block';
        alternativePageContent.style.display = 'none';
        isAlternativePageVisible = false;
        if (targetId) {
          scrollToTarget(targetId);
        }
      });
    }
  
    function scrollToTarget(targetId) {
      var targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }


