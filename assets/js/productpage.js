document.addEventListener("DOMContentLoaded", function () {
    // Get the elements
    var decreaseButton = document.getElementById("decrease");
    var increaseButton = document.getElementById("increase");
    var quantityElement = document.getElementById("quanity");

    // Set the initial quantity
    var quantity = 0;

    // Event listener for the decrease button
    decreaseButton.addEventListener("click", function () {
      if (quantity > 0) {
        quantity--;
        updateQuantity();
      }
    });

    // Event listener for the increase button
    increaseButton.addEventListener("click", function () {
      quantity++;
      updateQuantity();
    });

    // Function to update the quantity in the middle
    function updateQuantity() {
      quantityElement.innerText = quantity;
    }
  });
  function openLightbox(imageSrc) {
    // Create a lightbox container
    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
  
    // Create an image element inside the lightbox
    var enlargedImage = document.createElement('img');
    enlargedImage.src = imageSrc;
  
    // Append the image to the lightbox
    lightbox.appendChild(enlargedImage);
  
    // Append the lightbox to the body
    document.body.appendChild(lightbox);
  
    // Close the lightbox when clicked
    lightbox.onclick = function () {
      document.body.removeChild(lightbox);
    };
  }
  let currentImageIndex = 0;
    const images = [
        'assets/images/services/services-single/craiyon_233615_Chocolate_brownies_in_space.png',
        'assets/images/services/services-single/1.jpg',
        'assets/images/services/services-single/2.jpg',
        'assets/images/services/services-single/3.jpg',
        'assets/images/services/services-single/4.jpg'
    ];

    function navigateLightbox(direction) {
        currentImageIndex += direction;

        if (currentImageIndex < 0) {
            currentImageIndex = images.length - 1;
        } else if (currentImageIndex >= images.length) {
            currentImageIndex = 0;
        }

        const imagePath = images[currentImageIndex];
        const bigImage = document.getElementById('lightboxImage');
        bigImage.src = imagePath;
        bigImage.setAttribute('onclick', `openLightbox('${imagePath}')`);
    }


    function changePrice(option) {
      let priceElement = document.getElementById('price');
      let discount = document.getElementsByClassName('discount')[0];
      let oldPrice = document.getElementsByClassName('oldPrice')[0];
  
      if (option === 'retail') {
          // Default prices for lyftoffbrownies.html
          let retailPrice = 18;
          let wholesalePrice = 9;
  
          if (window.location.pathname.includes('elgallomix.html')) {
              retailPrice = 12;
              wholesalePrice = 6;
              if (discount.innerText === "20%") {
                  discount.innerText = "10%";
              } else {
                  discount.innerText = "20%";
              }
          } else if (window.location.pathname.includes('cannagar.html')) {
              // Logic for the cannagar page
              retailPrice = 20.50.toFixed(2);
              wholesalePrice = 11.65;
              discount.innerText = "18%";
              // Additional logic for the cannagar page if needed
          } else {
              discount.innerText = "18%";
          }
  
          priceElement.innerText = `$${retailPrice}`;
          discount.style.display = 'inline';
          discount.style.padding = '0px';
          oldPrice.style.display = 'inline';
          discount.style.padding = '0px 10px';
          // Additional logic for retail pricing here
      } else if (option === 'wholesale') {
          // Default prices for lyftoffbrownies.html
          let wholesalePrice = 9;
          discount.innerText = 'Minimum order quantity of 10 units';
          oldPrice.style.display = 'none';
          discount.style.padding = '0px 10px';
  
          if (window.location.pathname.includes('elgallomix.html')) {
              // Override prices for elgallomix.html
              wholesalePrice = 6;
              minOrderQuantity = 'Minimum order quantity of 70 units';
          } else if (window.location.pathname.includes('cannagar.html')) {
              // Logic for the cannagar page
              wholesalePrice = 11.65;
              minOrderQuantity = 'Minimum order quantity of 10 units';
              // Additional logic for the cannagar page if needed
          }
  
          priceElement.innerText = `$${wholesalePrice}`;
          discount.innerText = minOrderQuantity;
          discount.style.padding = '0px 10px';
          oldPrice.style.display = 'none';
      }
  }
  

    