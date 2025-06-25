document.addEventListener('DOMContentLoaded', function() {
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotToggle = document.getElementById('chatbotToggle');
    const closeChatbot = document.getElementById('closeChatbot');
    const enquiryForm = document.getElementById('enquiryForm');

    // Login Functionality
        const loginForm = document.getElementById('login-form');
        const loginSection = document.getElementById('login-section');
        const productPage = document.getElementById('product-page');
        const errorMsg = document.getElementById('error-msg');
        const logoutBtn = document.getElementById('logout-btn');

//  user data

if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'test' && password === 'test') {
             this.style.display = 'none';
                    productsPage.style.display = 'block';
               // loginSection.style.display = 'none';
             //   productPage.style.display = 'block';
               //   window.location.href = 'product.html'; // Redirect on success

                errorMsg.textContent = '';
            } else {
                errorMsg.textContent = 'Invalid credentials! Use "test" for both fields.';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            productPage.style.display = 'none';
            loginSection.style.display = 'block';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        });
    }


    // Toggle chatbot form
    chatbotToggle.addEventListener('click', function() {
        chatbotContainer.classList.toggle('active');
    });

    closeChatbot.addEventListener('click', function() {
        chatbotContainer.classList.remove('active');
    });

    // Form submission
    enquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            message: document.getElementById('message').value
        };

        // Using FormSubmit.co for email sending
        fetch('https://formsubmit.co/ajax/contactkrvineet@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Thank you! Your message has been sent.');
            enquiryForm.reset();
            chatbotContainer.classList.remove('active');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending your message. Please try again.');
        });
    });
});