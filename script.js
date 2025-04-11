/*============================
    MAIN SCRIPT
============================*/

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initHeader();
    initNavigation();
    initScrollToTop();
    initFormValidation();
    initGallery();
});

/*============================
    PRELOADER
============================*/
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    
    // Hide preloader after content is loaded
    window.addEventListener('load', function() {
        preloader.classList.add('hidden');
        
        // Remove from DOM after animation
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
}

/*============================
    HEADER SCROLL EFFECTS
============================*/
function initHeader() {
    const header = document.getElementById('header');
    const scrollThreshold = 100;
    
    // Add scrolled class on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initial check in case page is loaded scrolled down
    if (window.scrollY > scrollThreshold) {
        header.classList.add('scrolled');
    }
}

/*============================
    NAVIGATION
============================*/
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Toggle navigation menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Close navigation when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            
            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Update active link on scroll
    window.addEventListener('scroll', highlightActiveLink);
    
    function highlightActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }
    
    // Initial check for active link
    highlightActiveLink();
}

/*============================
    SCROLL TO TOP
============================*/
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollThreshold = 300;
    
    // Show/hide button depending on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });
    
    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*============================
    FORM VALIDATION
============================*/
function initFormValidation() {
    const reservationForm = document.getElementById('reservation-form');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const guests = document.getElementById('guests').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            
            let isValid = true;
            let errorMessage = '';
            
            // Check required fields
            if (!name || !email || !phone || !guests || !date || !time) {
                isValid = false;
                errorMessage = 'Please fill in all required fields.';
            }
            
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email && !emailRegex.test(email)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address.';
            }
            
            // Validate phone format (basic check)
            const phoneRegex = /^\+?[0-9\s\-\(\)]{8,20}$/;
            if (phone && !phoneRegex.test(phone)) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number.';
            }
            
            // Check if date is not in the past
            const selectedDate = new Date(date);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0);
            
            if (selectedDate < currentDate) {
                isValid = false;
                errorMessage = 'Please select a future date.';
            }
            
            if (isValid) {
                // Show success message
                const formData = new FormData(reservationForm);
                const formValues = Object.fromEntries(formData.entries());
                
                showReservationConfirmation(formValues);
                reservationForm.reset();
            } else {
                // Show error
                alert(errorMessage);
            }
        });
    }
}

function showReservationConfirmation(data) {
    // Create a modal or use alert for simplicity
    const message = `Thank you, ${data.name}! Your reservation has been received.\n\n` +
                    `Date: ${data.date}\n` +
                    `Time: ${data.time}\n` +
                    `Guests: ${data.guests}\n\n` +
                    `We'll contact you at ${data.email} or ${data.phone} to confirm your reservation.`;
    
    alert(message);
}

/*============================
    GALLERY MODAL
============================*/
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('gallery-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalClose = document.querySelector('.modal-close');
    
    // Open modal when gallery item is clicked
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const galleryImage = this.querySelector('.gallery-image');
            const backgroundImage = getComputedStyle(galleryImage).backgroundImage;
            const imageUrl = backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            const title = galleryImage.getAttribute('data-title');
            const description = galleryImage.getAttribute('data-description');
            
            modalImage.src = imageUrl;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            galleryModal.classList.add('open');
            
            // Prevent scrolling when modal is open
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when close button is clicked
    modalClose.addEventListener('click', function() {
        galleryModal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the image
    galleryModal.addEventListener('click', function(e) {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && galleryModal.classList.contains('open')) {
            galleryModal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
}

/*============================
    TESTIMONIALS SLIDER
============================*/
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    
    let currentIndex = 0;
    const testimonialCount = testimonials.length;
    
    // Initialize the testimonial slider
    function initTestimonialSlider() {
        if (!testimonials.length) return;
        
        showTestimonial(currentIndex);
        
        // Event listeners for controls
        prevBtn.addEventListener('click', showPreviousTestimonial);
        nextBtn.addEventListener('click', showNextTestimonial);
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
            });
        });
        
        // Auto slide
        setAutoSlide();
    }
    
    function showTestimonial(index) {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonialCount;
        showTestimonial(currentIndex);
    }
    
    function showPreviousTestimonial() {
        currentIndex = (currentIndex - 1 + testimonialCount) % testimonialCount;
        showTestimonial(currentIndex);
    }
    
    let slideInterval;
    
    function setAutoSlide() {
        // Clear any existing intervals
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        
        // Set a new interval
        slideInterval = setInterval(showNextTestimonial, 6000);
        
        // Pause auto-sliding when hovering over the testimonial
        const testimonialContainer = document.querySelector('.testimonial-container');
        
        testimonialContainer.addEventListener('mouseenter', function() {
            clearInterval(slideInterval);
        });
        
        testimonialContainer.addEventListener('mouseleave', function() {
            setAutoSlide();
        });
    }
    
    // Initialize testimonial slider
    initTestimonialSlider();
});

/*============================
    DOWNLOAD MENU
============================*/
document.addEventListener('DOMContentLoaded', function() {
    const downloadMenuBtn = document.getElementById('download-menu');
    
    if (downloadMenuBtn) {
        downloadMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would download a PDF
            // For this example, we'll just show a message
            alert('Menu download feature will be implemented soon. Thank you for your interest.');
        });
    }
});
