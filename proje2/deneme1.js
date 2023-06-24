window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    var whatsappIcon = document.getElementById('whatsapp-icon');
    if (window.pageYOffset > 100) {
        backToTopButton.style.display = 'block';
        whatsappIcon.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
        whatsappIcon.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    var currentPosition = window.pageYOffset;
    var scrollInterval = setInterval(function() {
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
            currentPosition -= 10000; // Her adımda ne kadar yukarı çıkacağını belirleyebilirsiniz
        } else {
            clearInterval(scrollInterval);
            window.scrollTo(0, 0); // Kaydırma tamamlandığında en üstüne gitmek için scrollTo kullanın
        }
    }, 16); // Kaydırma hızını ayarlayabilirsiniz (1ms)
});

document.getElementById('whatsapp-icon').addEventListener('click', function() {
    // WhatsApp'a mesaj göndermek için uygun bir URL oluşturun
    var message = encodeURIComponent("Merhaba, bilgi almak istiyorum.Yardımcı olursanız çok sevinirim.Teşekkürler...");
    var whatsappUrl = "https://wa.me/905393349205?text=" + message;
    
    // Oluşturulan URL'i yeni bir sekmede açın
    window.open(whatsappUrl, "_blank");
});


document.getElementById('whoweare').addEventListener('click', function() {
  // WhatsApp'a mesaj göndermek için uygun bir URL oluşturun
  var message = encodeURIComponent("Merhaba, bilgi almak istiyorum.Yardımcı olursanız çok sevinirim.Teşekkürler...");
  var whatsappUrl = "https://wa.me/905393349205?text=" + message;
  
  // Oluşturulan URL'i yeni bir sekmede açın
  window.open(whatsappUrl, "_blank");
});


// Referansları alalım
const circleP1 = document.querySelector('.spinnerContent_item_1 .circleP');
const circleP2 = document.querySelector('.spinnerContent_item_2 .circleP');
const circleP3 = document.querySelector('.spinnerContent_item_3 .circleP');
const circleP4 = document.querySelector('.spinnerContent_item_4 .circleP');

const targetNumber1 = 52.850; // Tamamlanan Projeler için hedef sayı
const targetNumber2 = 100; // Müşteri Memnuniyeti için hedef yüzde değeri
const targetNumber3 = 7; // Tecrübe Düzeyimiz için hedef yıl sayısı
const targetNumber4 = 150; // Personel Sayısı için hedef sayı

const duration = 2000; // Animasyon süresi (milisaniye cinsinden)

// Sayıyı kademeli olarak güncellemek için fonksiyon
function animateNumber(start, end, duration, element) {
  const range = end - start;
  const increment = range / duration * 10;
  let current = start;

  // Zamanlayıcıyla sürekli olarak güncelleme yapacak fonksiyon
  const timer = setInterval(() => {
    current += increment;

    // Sayıyı güncelle ve gerektiğinde ifadeyi ekle
    if (element === circleP2) {
      element.textContent = current.toFixed(0) + '%';
    } else if (element === circleP3) {
      element.textContent = '+' + current.toFixed(0) + ' Yıl';
    } else if (element === circleP4) {
      element.textContent = '+' + current.toFixed(0);
    } else {
      element.textContent = current.toFixed(3);
    }

    // Hedef sayıya ulaşıldığında zamanlayıcıyı durdur
    if (current >= end) {
      if (element === circleP2) {
        element.textContent = end.toFixed(0) + '%';
      } else if (element === circleP3) {
        element.textContent = '+' + end.toFixed(0) + ' Yıl';
      } else if (element === circleP4) {
        element.textContent = '+' + end.toFixed(0);
      } else {
        element.textContent = end.toFixed(3);
      }
      clearInterval(timer);
    }
  }, 10);
}

// Intersection Observer kullanarak footer bölümünü gözlemleyelim
const footer = document.querySelector('#footerSide');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Footer bölümüne ulaşıldığında animasyonları başlat
      animateNumber(0, targetNumber1, duration, circleP1);
      animateNumber(0, targetNumber2, duration, circleP2);
      animateNumber(0, targetNumber3, duration, circleP3);
      animateNumber(0, targetNumber4, duration, circleP4);

      // Gözlemciyi durdur
      observer.disconnect();
    }
  });
});

// Footer bölümünü gözlemlemek için gözlemciyi başlat
observer.observe(footer);







 






