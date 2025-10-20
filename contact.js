document.addEventListener('DOMContentLoaded', function() {
    // Get form and success message elements
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    
    // Hide success message initially
    successMessage.style.display = 'none';
    
    // Add form submission handler
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Reset previous error messages
        clearErrors();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Validate form fields
        let isValid = true;
        
        // Validate name (required)
        if (!nameInput.value.trim()) {
            displayError('name-error', 'Please enter your name');
            isValid = false;
        }
        
        // Validate email (required and format)
        if (!emailInput.value.trim()) {
            displayError('email-error', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            displayError('email-error', 'Please enter a valid email address (e.g., name@example.com)');
            isValid = false;
        }
        
        // Validate subject (required)
        if (!subjectInput.value.trim()) {
            displayError('subject-error', 'Please enter a subject');
            isValid = false;
        }
        
        // Validate message (required and min length)
        if (!messageInput.value.trim()) {
            displayError('message-error', 'Please enter your message');
            isValid = false;
        } else if (messageInput.value.trim().length < 10) {
            displayError('message-error', 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        // If all validations pass, show success message
        if (isValid) {
            contactForm.reset();
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
            
            // For demo purposes: Reset form after 5 seconds
            setTimeout(function() {
                contactForm.style.display = 'block';
                successMessage.style.display = 'none';
            }, 5000);
        }
    });
    
    // Helper function to display error messages
    function displayError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        
        // Add invalid class to highlight input
        const inputId = errorId.replace('-error', '');
        document.getElementById(inputId).classList.add('invalid');
    }
    
    // Helper function to clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(function(element) {
            element.textContent = '';
            element.style.display = 'none';
        });
        
        // Remove invalid class from all inputs
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(function(input) {
            input.classList.remove('invalid');
        });
    }
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Add input event listeners to clear errors when user starts typing
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(function(input) {
        input.addEventListener('input', function() {
            this.classList.remove('invalid');
            const errorId = this.id + '-error';
            const errorElement = document.getElementById(errorId);
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.style.display = 'none';
            }
        });
    });
});