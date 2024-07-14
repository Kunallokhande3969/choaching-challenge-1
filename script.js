
function validateForm() {

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    if (!name || !email || !password) {
      errorMessage.textContent = 'Please fill out all fields.';
      return;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = 'Invalid email format.';
      return;
    } 

    alert('Form submitted successfully!');
    document.getElementById('myForm').reset();
  }
  