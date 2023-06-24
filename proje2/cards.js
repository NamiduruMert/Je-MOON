// // card örnek 1

// var images = [
//     { src: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg', title: 'The Beach', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.', buttonLabel: 'More Info' },
//     { src: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg', title: 'SEO', description: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.', buttonLabel: 'Bilgi için' },
//     { src: 'https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg', title: 'SEO', description: 'Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.', buttonLabel: 'Bilgi için' },
//     // Daha fazla kart verisi eklenebilir
//   ];
  
//   function createCards() {
//     var container = document.getElementById('image-container');
  
//     images.forEach(function (image) {
//         var figure = document.createElement('figure');
//         figure.className = 'image-block';
  
//         var h1 = document.createElement('h1');
//         h1.textContent = image.title;
  
//         var img = document.createElement('img');
//         img.src = image.src;
//         img.alt = '';
  
//         var figcaption = document.createElement('figcaption');
  
//         var h3 = document.createElement('h3');
//         h3.textContent = 'More Info';
  
//         var p = document.createElement('p');
//         p.textContent = image.description;
  
//         var button = document.createElement('button');
//         button.textContent = image.buttonLabel;
  
//         figcaption.appendChild(h3);
//         figcaption.appendChild(p);
//         figcaption.appendChild(button);
  
//         figure.appendChild(h1);
//         figure.appendChild(img);
//         figure.appendChild(figcaption);
  
//         container.appendChild(figure);
//     });
//   }
  
//   createCards();
//   // card örnek 1 bitiş 