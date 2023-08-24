let number = "";

// Listen for the `keypress` event on the document.
document.addEventListener("keypress", function(e) {
  // Check if the keycode of the pressed key is between 48 and 57, which are the numbers from 0 to 9.
  if (e.which >= 48 && e.which <= 57) {
    // Get the number that the user has entered.
    number += String.fromCharCode(e.which);
  }
});

// Listen for the `keyup` event on the document.
document.addEventListener("keyup", function() {
  // Check if the user has entered a number.
  if (number.length > 0) {
    // Display the number on the screen.
    document.querySelector("output").textContent = number;

    // Clear the number variable.
    number = "";
  }
});

 
 