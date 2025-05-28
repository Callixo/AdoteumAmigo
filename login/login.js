        // Toggle password visibility
        const passwordInput = document.getElementById('password');
        const togglePassword = document.querySelector('[aria-label="Mostrar senha"]');
        
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.querySelector('i').classList.toggle('fa-eye-slash');
        });

        // Mobile menu toggle (simplified version)
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would normally handle the login logic
            console.log('Login form submitted');
        });