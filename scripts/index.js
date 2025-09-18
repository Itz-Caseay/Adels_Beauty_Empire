// Simple animations and interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.product-actions .btn');
            const cartCount = document.querySelector('.cart-count');
            let count = 0;
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    count++;
                    cartCount.textContent = count;
                    
                    // Animation for button
                    button.textContent = "Added!";
                    button.style.background = "linear-gradient(45deg, #8a2be2, #ff69b4)";
                    
                    setTimeout(() => {
                        button.textContent = "Add to Cart";
                        button.style.background = "linear-gradient(45deg, var(--primary), var(--secondary))";
                    }, 1500);
                });
            });
            
            // Form submission
            const bookingForm = document.querySelector('.booking-form');
            bookingForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your booking! We will contact you shortly to confirm your appointment.');
                bookingForm.reset();
            });
            
            // Animate elements on scroll
            const animateOnScroll = function() {
                const elements = document.querySelectorAll('.product-card, .service-card, .review-card');
                
                elements.forEach(element => {
                    const position = element.getBoundingClientRect();
                    
                    // If element is in viewport
                    if(position.top < window.innerHeight - 100) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            };
            
            // Set initial state for animated elements
            const animatedElements = document.querySelectorAll('.product-card, .service-card, .review-card');
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(40px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            });
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            // Trigger once on load
            animateOnScroll();
        });