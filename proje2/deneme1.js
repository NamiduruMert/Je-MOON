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



document.addEventListener("DOMContentLoaded", function () {
    var cards = [
        {
            title: "LİTERATÜR TARAMASI",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "TEZ YAZIMI",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "FORMAT KONTROL",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
       
        
        {
            title: "İK MÜLAKAT",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "SEO UYUMLU MAKALE",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "NİCEL ANALİZLER",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "REDAKSİYON UYGULAMA",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text="
        },
        {
            title: "CV KOÇLUĞU",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            link: "https://wa.me/905393349205?text=",

        }

    ];

    var container = document.querySelector(".container");

    cards.forEach(function (cardData) {
        var box = document.createElement("div");
        box.classList.add("box");

        var span = document.createElement("span");
        box.appendChild(span);

        var content = document.createElement("div");
        content.classList.add("content");

        var title = document.createElement("h2");
        title.textContent = cardData.title;
        content.appendChild(title);

        var text = document.createElement("p");
        text.textContent = cardData.text;
        content.appendChild(text);

        var link = document.createElement("a");
        link.href = "https://wa.me/905393349205?text=";
        link.textContent = "HEMEN DENEYİN";
        content.appendChild(link);


        box.appendChild(content);
        container.appendChild(box);

        link.addEventListener("click", function (event) {
            event.preventDefault();  // Sayfanın yeniden yüklenmesini önlemek için önleyici
            var message = encodeURIComponent("Merhaba, bilgi almak istiyorum. Yardımcı olursanız çok sevinirim. Teşekkürler...");
            var whatsappUrl = cardData.link + message;
            window.open(whatsappUrl, "_blank");
        });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var servicesLinks = document.querySelectorAll(".servicesLink");
  
    servicesLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        var targetClass = link.getAttribute("href").substring(1);
        var targetElement = document.querySelector("." + targetClass);
        
        if (targetElement) {
          var targetOffset = targetElement.offsetTop;
          var scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          var distance = targetOffset - scrollOffset;
  
          var duration = 500;
          var startTime = null;
  
          function animate(currentTime) {
            if (startTime === null) {
              startTime = currentTime;
            }
            var elapsedTime = currentTime - startTime;
            var progress = Math.min(elapsedTime / duration, 1);
            var ease = easeOutCubic(progress);
            window.scrollTo(0, scrollOffset + (distance * ease));
  
            if (elapsedTime < duration) {
              requestAnimationFrame(animate);
            }
          }
  
          function easeOutCubic(t) {
            return 1 - Math.pow(1 - t, 3);
          }
  
          requestAnimationFrame(animate);
        }
      });
    });
  });
  
