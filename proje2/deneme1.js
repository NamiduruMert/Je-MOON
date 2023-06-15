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
            currentPosition -= 50; // Her adımda ne kadar yukarı çıkacağını belirleyebilirsiniz
        } else {
            clearInterval(scrollInterval);
        }
    }, 16); // Kaydırma hızını ayarlayabilirsiniz (16ms = 60 FPS)
});

document.getElementById('whatsapp-icon').addEventListener('click', function() {
    // WhatsApp'a mesaj göndermek için uygun bir URL oluşturun
    var message = encodeURIComponent("Merhaba, size bir mesaj göndermek istiyorum.");
    var whatsappUrl = "https://wa.me/905412631971?text=Merhabalar benim ismim Mert" + message;
    
    // Oluşturulan URL'i yeni bir sekmede açın
    window.open(whatsappUrl, "_blank");
});