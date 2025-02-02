import 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      simularLogin();
    }
  });

  togglePasswordBtn.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    togglePasswordBtn.querySelector('i').classList.toggle('bi-eye');
    togglePasswordBtn.querySelector('i').classList.toggle('bi-eye-slash');
  });

  function validateForm() {
    let isValid = true;

    if (!emailInput.value || !isValidEmail(emailInput.value)) {
      shakeElement(emailInput);
      isValid = false;
    }

    if (!passwordInput.value || passwordInput.value.length < 6) {
      shakeElement(passwordInput);
      isValid = false;
    }

    return isValid;
  }

  function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => {
      element.classList.remove('shake');
    }, 500);
  }

  function simularLogin() {
    const loginBtn = loginForm.querySelector('button[type="submit"]');
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Entrando...';

    setTimeout(() => {
      alert('Login realizado com sucesso!');
      loginBtn.disabled = false;
      loginBtn.innerHTML = 'Entrar';
      loginForm.reset();
    }, 2000);
  }
});
