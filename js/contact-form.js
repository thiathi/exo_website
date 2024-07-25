document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    function validateField(input) {
        if (input.value.trim() === '') {
            input.classList.add('is-invalid');
            return false;
        } else {
            input.classList.remove('is-invalid');
            return true;
        }
    }

    function validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            return false;
        } else {
            emailInput.classList.remove('is-invalid');
            return true;
        }
    }

    nameInput.addEventListener('blur', () => validateField(nameInput));
    emailInput.addEventListener('blur', () => validateEmail());
    messageInput.addEventListener('blur', () => validateField(messageInput));

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateField(nameInput) && validateEmail() && validateField(messageInput)) {
            // Code pour envoyer le formulaire via AJAX ici
            alert('Formulaire soumis avec succès !');
            form.reset();
        } else {
            alert('Veuillez remplir correctement le formulaire.');
        }
    });
});
