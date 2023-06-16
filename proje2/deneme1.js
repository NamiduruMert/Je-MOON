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
    var whatsappUrl = "https://wa.me/905412631971?text=" + message;
    
    // Oluşturulan URL'i yeni bir sekmede açın
    window.open(whatsappUrl, "_blank");
});