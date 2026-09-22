document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Initial check on load
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    }

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust offset for fixed navbar
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; // Extra 20px padding
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal Animation on Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});

// Global Form Submission to WhatsApp
window.submitToWhatsApp = function(event) {
    if (event && event.preventDefault) {
        event.preventDefault(); // Prevent page reload if event exists
    }
    
    // Get field values
    const name = document.getElementById('waName').value.trim();
    const phone = document.getElementById('waPhone').value.trim();
    const messageText = document.getElementById('waMessage').value.trim();
    
    // Construct WhatsApp message
    const message = `🌟 Website Enquiry\n\nHello Shopno Team,\n\nYou have received a new enquiry from your website.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n💬 Message: ${messageText}\n\nPlease get in touch with the customer at your earliest convenience.\n\nThank you.`;
    
    // Encode for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Target WhatsApp Number
    const waNumber = "917016268071";
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/${waNumber}?text=${encodedMessage}`, '_blank');
};
