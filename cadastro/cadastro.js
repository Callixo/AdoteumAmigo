// Toggle password visibility
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirm-password');
        const togglePasswordButtons = document.querySelectorAll('[aria-label="Mostrar senha"]');
        
        togglePasswordButtons.forEach(button => {
            button.addEventListener('click', function() {
                const input = this.parentElement.querySelector('input');
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                this.querySelector('i').classList.toggle('fa-eye-slash');
            });
        });

        // Password strength indicator
        passwordInput.addEventListener('input', function() {
            const strengthBars = [
                document.getElementById('strength-1'),
                document.getElementById('strength-2'),
                document.getElementById('strength-3'),
                document.getElementById('strength-4')
            ];
            
            const password = this.value;
            let strength = 0;
            
            // Check password length
            if (password.length > 0) strength += 1;
            if (password.length >= 8) strength += 1;
            
            // Check for special characters
            if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
            
            // Check for numbers and letters
            if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password)) strength += 1;
            
            // Update strength bars
            strengthBars.forEach((bar, index) => {
                if (index < strength) {
                    if (strength === 1) bar.style.backgroundColor = '#EF4444'; // Weak (red)
                    else if (strength === 2) bar.style.backgroundColor = '#F59E0B'; // Medium (yellow)
                    else if (strength === 3) bar.style.backgroundColor = '#3B82F6'; // Strong (blue)
                    else if (strength === 4) bar.style.backgroundColor = '#10B981'; // Very strong (green)
                } else {
                    bar.style.backgroundColor = '#E5E7EB'; // Default (gray)
                }
            });
        });

        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check if passwords match
            if (passwordInput.value !== confirmPasswordInput.value) {
                alert('As senhas não coincidem!');
                return;
            }
            
            // Check if terms are accepted
            if (!document.getElementById('terms').checked) {
                alert('Você precisa aceitar os termos e condições para se cadastrar.');
                return;
            }
            
            // Here you would normally handle the registration logic
            console.log('Registration form submitted');
            alert('Cadastro realizado com sucesso!');
        });

        // Mobile menu toggle (simplified version)
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });