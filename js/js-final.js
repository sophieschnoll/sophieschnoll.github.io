document.addEventListener("DOMContentLoaded", function() {
  const phoneNumber = "1234567890";
  const floatingNumbers = document.createElement("div");
  floatingNumbers.classList.add("floating-number-container");
  document.body.appendChild(floatingNumbers);

  let clickedNumbers = [];
  const displayedNumberElement = document.getElementById("displayed-number");
  const clearButton = document.getElementById("clear-button");
  const submitButton = document.getElementById("submit-button");
  const errorMessage = document.getElementById("error-message");

  for (let i = 0; i < phoneNumber.length; i++) {
      const number = document.createElement("div");
      number.classList.add("floating-number");
      number.textContent = phoneNumber[i];
      updatePosition(number); 

      number.addEventListener("click", function() {
          if (clickedNumbers.length < 9) {
              const wrongNumber = Math.floor(Math.random() * 10);
              clickedNumbers.push(wrongNumber);
              displayedNumberElement.textContent = clickedNumbers.join('');
          }
      });

      floatingNumbers.appendChild(number);
  }

  function updatePosition(element) {
      element.style.left = `${Math.random() * window.innerWidth}px`;
      element.style.top = `${Math.random() * window.innerHeight}px`;
  }

  function animateFloatingNumbers() {
      for (let i = 0; i < floatingNumbers.children.length; i++) {
          updatePosition(floatingNumbers.children[i]);
      }
      setTimeout(function() {
          requestAnimationFrame(animateFloatingNumbers);
      }, 980); //milliseconds
  }

  animateFloatingNumbers();

  clearButton.addEventListener("click", function() {
      clickedNumbers = [];
      displayedNumberElement.textContent = "";
      hideErrorMessage();
  });

  submitButton.addEventListener("click", function() {
      if (clickedNumbers.length >= 9) {
          const submittedPhoneNumber = displayedNumberElement.textContent || "No number submitted";
          alert("Thank you for submitting your number: " + submittedPhoneNumber + ". We promise it will not be shared on the dark web.");
          hideErrorMessage();
      } else {
          showErrorMessage();
          setTimeout(hideErrorMessage, 5000); 
      }
  });

  function showErrorMessage() {
      errorMessage.style.display = "block";
  }

  function hideErrorMessage() {
      errorMessage.style.display = "none";
  }
});
