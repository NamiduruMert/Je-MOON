// YILLARA GÖRE ARTAN SİSTEM
window.onload = function() {
    var baseYear = 2023; // Başlangıç yılı
    
    function updateText() {
      var textElement = document.getElementById("thirdSpinnerText");
      var currentYear = new Date().getFullYear();
      var difference = currentYear - baseYear + 7;
      textElement.innerHTML = "+" + difference + " Yıl";
    }
    
    updateText();
};