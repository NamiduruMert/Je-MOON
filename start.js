window.addEventListener('DOMContentLoaded', (event) => {
    // DOM tamamen yüklendiğinde çalışacak kodlar buraya gelecek
  
    // Metin elementlerini seçin
    const letters = document.querySelectorAll('.letter');
    const regText = document.querySelector('.reg-text');
  
    // Metin animasyonlarını tetikleyen fonksiyon
    const animateText = () => {
      regText.classList.add('loaded'); // Regüler metni göster
      letters.forEach((letter, index) => {
        setTimeout(() => {
          letter.classList.add('loaded'); // Her bir harfi göster
        }, index * 500); // Harfler arasında bekleme süresi (100ms)
      });
    };
  
    // Animasyonun tamamlandığında sayfayı otomatik olarak yönlendir
const redirectToPage = () => {
    // Burada hedef sayfanın src değerini belirleyin
    const targetSrc = 'anasayfa.html'; // Hedef sayfanın src değerini buraya yazın
  
    // İstenilen yönlendirme yöntemini kullanarak sayfayı yönlendir
    if (targetSrc) {
      window.location = targetSrc; // Sayfayı src değerine yönlendir
    }
  };
  
 // Sayfa tamamen yüklendiğinde animasyonu başlat
 animateText();
 setTimeout(() => {
    if (targetSrc) {
      window.location = targetSrc; // Sayfayı src değerine yönlendir
    }
  }, 1000); // 1.5 saniye bekleme süresi (1500ms)

 // Animasyon tamamlandığında otomatik olarak sayfayı yönlendir
 const lastLetter = letters[letters.length - 1];
 lastLetter.addEventListener('transitionend', () => {
   redirectToPage();
 });



  });
  