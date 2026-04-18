/* ============================================================
   RUDRA KITS – contact.js
   ============================================================ */

/* ── CHIPS DE MOTIVO ── */
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', function () {
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
    this.classList.add('chip--active');
    document.getElementById('motivo').value = this.dataset.value;
  });
});


/* ── VALIDACIÓN Y ENVÍO DE FORMULARIO ── */
const form       = document.getElementById('contactForm');
const submitBtn  = document.getElementById('submitBtn');
const submitText = document.getElementById('submitText');
const formSuccess = document.getElementById('formSuccess');

function showError(inputId, errorId, msg) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.add('error');
  if (error)  error.textContent = msg;
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.remove('error');
  if (error)  error.textContent = '';
}

function validateForm() {
  let valid = true;

  // Nombre
  const nombre = document.getElementById('nombre').value.trim();
  if (!nombre) {
    showError('nombre', 'errNombre', 'El nombre es requerido.');
    valid = false;
  } else { clearError('nombre', 'errNombre'); }

  // Apellido
  const apellido = document.getElementById('apellido').value.trim();
  if (!apellido) {
    showError('apellido', 'errApellido', 'El apellido es requerido.');
    valid = false;
  } else { clearError('apellido', 'errApellido'); }

  // Email
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    showError('email', 'errEmail', 'El correo electrónico es requerido.');
    valid = false;
  } else if (!emailRegex.test(email)) {
    showError('email', 'errEmail', 'Ingresa un correo válido.');
    valid = false;
  } else { clearError('email', 'errEmail'); }

  // Mensaje
  const mensaje = document.getElementById('mensaje').value.trim();
  if (!mensaje) {
    showError('mensaje', 'errMensaje', 'El mensaje no puede estar vacío.');
    valid = false;
  } else if (mensaje.length < 10) {
    showError('mensaje', 'errMensaje', 'El mensaje debe tener al menos 10 caracteres.');
    valid = false;
  } else { clearError('mensaje', 'errMensaje'); }

  return valid;
}

// Clear errors on input
['nombre', 'apellido', 'email', 'mensaje'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const errEl = document.getElementById('err' + id.charAt(0).toUpperCase() + id.slice(1));
      if (errEl) errEl.textContent = '';
    });
  }
});

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate sending
    submitBtn.disabled = true;
    submitText.textContent = 'Enviando...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitText.textContent = 'Enviar Mensaje';
      formSuccess.classList.add('visible');
      form.reset();

      // Reset chips
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('chip--active'));
      const firstChip = document.querySelector('.chip');
      if (firstChip) {
        firstChip.classList.add('chip--active');
        document.getElementById('motivo').value = firstChip.dataset.value;
      }

      // Hide success after 6s
      setTimeout(() => formSuccess.classList.remove('visible'), 6000);
    }, 1200);
  });
}


/* ── FAQ ACCORDION ── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    const answer    = this.nextElementSibling;
    const isOpen    = this.getAttribute('aria-expanded') === 'true';

    // Close all
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });

    // Toggle clicked
    if (!isOpen) {
      this.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  });
});
