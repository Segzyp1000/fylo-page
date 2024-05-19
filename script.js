function validateEmail(inputId, buttonId, errorId) {
    const emailInput = document.getElementById(inputId);
    const errorMessage = document.getElementById(errorId);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    document.getElementById(buttonId).addEventListener('click', function () {
      if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.color = 'red';
      } else {
        errorMessage.textContent = '';
        // Additional code to handle valid email input can be added here
        alert('Email is valid!');
      }
    });
  }
  
  // Reuse the function for different containers
  validateEmail('email1', 'submit-btn1', 'error-message1');
  validateEmail('email2', 'submit-btn2', 'error-message2');
  
  