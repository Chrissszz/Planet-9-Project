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

    let addToCartClicked = false

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
  
      // Call updateShoppingCart with the current quantity
      updateShoppingCart();
  }
  document.querySelector('.btn.center').addEventListener('click', function () {
    addToCartClicked = true; // Set the flag to true
    let selectedOption = document.querySelector('.dropbtn').innerText.trim().toLowerCase();
    let quantityElement = document.getElementById('quantityInput');
    let quantity = parseInt(quantityElement.value);

    if (selectedOption === 'wholesale' && quantity < 10) {
        alert('Minimum order quantity must be 10 units for wholesale');
        addToCartClicked = false; // Reset the flag if the condition is not met
        return;
    }

    // Update the shopping cart quantity
    updateShoppingCart(quantity);
});
  
  function updateShoppingCart(quantity) {
    // Check if the "Add to Cart" button was clicked
    if (addToCartClicked) {
        // Get the quantity from the input field
        let quantityElement = document.getElementById('quantityInput');
        let quantity = parseInt(quantityElement.value);

        // Update the quantity in the shopping cart
        let shoppingCartElement = document.getElementById('shoppingCart');
        if (quantity > 0) {
            // Display the quantity in the shopping cart
            shoppingCartElement.innerHTML = `<a href="#"><i class="fa-solid fa-cart-shopping"></i> <span>${quantity}</span></a>`;
        } else {
            // If quantity is 0, remove the quantity display
            shoppingCartElement.innerHTML = `<a href="#"><i class="fa-solid fa-cart-shopping"></i></a>`;
        }

        // Reset the flag
        addToCartClicked = false;
    }
}
  