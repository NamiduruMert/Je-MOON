// Yazıyı değiştirmek için kullanılacak JavaScript kodu
window.onload = function() {
    var count = 52850; // Başlangıç değeri
    
    // Yazıyı güncellemek için bir fonksiyon oluşturulur
    function updateText() {
      var textElement = document.getElementById("firstSpinnerText");
      textElement.innerHTML = count;
      count++; // Her saniye yazıyı 1 arttır
    }
    
    // Her saniye updateText fonksiyonunu çağırmak için setInterval kullanılır
    setInterval(updateText, 1000); // 1000 milisaniye = 1 saniye


  };




