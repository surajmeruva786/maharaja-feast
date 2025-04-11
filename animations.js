/*============================
    ANIMATIONS
============================*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initIntersectionObserver();
});

/*============================
    INTERSECTION OBSERVER
============================*/
function initIntersectionObserver() {
    // Options for the observer
    const options = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // element is 15% visible
    };
    
    // Create observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, options);
    
    // Get all elements to observe
    const animatedElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up, .reveal-down');
    
    // Observe each element
    animatedElements.forEach(element => {
        observer.observe(element);
        
        // Add delay attribute support
        const delay = element.getAttribute('data-delay');
        if (delay) {
            element.style.transitionDelay = `${delay}ms`;
        }
    });
}

/*============================
    PARALLAX EFFECT
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Apply parallax effect to the hero section
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        });
    }
});

/*============================
    HOVER ANIMATIONS
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Add subtle animations for hover states on cards
    const cards = document.querySelectorAll('.cuisine-card, .feature, .contact-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
});

/*============================
    SMOOTH ANCHOR SCROLLING
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Offset for fixed header
                const headerOffset = 80;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

/*============================
    ANIMATE NUMBER COUNTERS
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Setup for number counters if they exist
    const numberCounters = document.querySelectorAll('.counter-number');
    
    if (numberCounters.length) {
        const counterObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        numberCounters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }
    
    function animateCounter(counter) {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000; // ms
        const step = Math.ceil(target / (duration / 16)); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            counter.textContent = current;
            
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            }
        }, 16);
    }
});

/*============================
    TYPING EFFECT
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to specific text elements if they exist
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeText(element, text);
                    observer.unobserve(element);
                }
            });
        }, { threshold: 0.8 });
        
        observer.observe(element);
    });
    
    function typeText(element, text) {
        let index = 0;
        
        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 100);
            }
        }
        
        type();
    }
});

/*============================
    BACKGROUND PATTERN ANIMATIONS
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Animate pattern backgrounds if they exist
    const patternBgs = document.querySelectorAll('.pattern-bg');
    
    if (patternBgs.length) {
        window.addEventListener('scroll', function() {
            const scrollY = window.pageYOffset;
            
            patternBgs.forEach(pattern => {
                const section = pattern.closest('section');
                const sectionTop = section.offsetTop;
                const offset = (scrollY - sectionTop) * 0.1;
                
                // Subtle pattern movement on scroll
                pattern.style.backgroundPosition = `${offset}px ${offset}px`;
            });
        });
    }
});

/*============================
    FADE IN SECTION CONTENT
============================*/
document.addEventListener('DOMContentLoaded', function() {
    // Fade in content of sections
    const sections = document.querySelectorAll('section');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('fade-in-section');
        sectionObserver.observe(section);
    });
});
