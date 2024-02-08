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
  
  