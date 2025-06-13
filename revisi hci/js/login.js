const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  // Reset styles
  form.classList.remove('shake');
  message.textContent = '';
  message.style.color = '#e74c3c';

  // Validate fields
  if (!email || !password) {
    form.classList.add('shake');
    message.textContent = "Please enter your email and password.";
    return;
  }

  // In a real application, you would send this data to a server for authentication.
  // For now, we'll use credentials stored during signup (WARNING: Insecure for production!).
  const storedEmail = localStorage.getItem('userEmail');
  const storedPassword = localStorage.getItem('userPassword');

  if (email === storedEmail && password === storedPassword) {
    message.style.color = 'green';
    message.textContent = "Login successful!";
    form.reset();
    // Redirect to the index page after a short delay
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500);
  } else {
    form.classList.add('shake');
    message.textContent = "Invalid email or password.";
  }
}); 