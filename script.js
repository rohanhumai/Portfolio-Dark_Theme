document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const overlay = document.getElementById('overlay');
    let isMenuOpen = false;
    
    // Improved toggle function with animation handling
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        // Disable scrolling when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        
        if (isMenuOpen) {
            menuOverlay.classList.add('active');
            overlay.classList.add('active');
            menuToggle.classList.replace('fa-bars', 'fa-times');
        } else {
            menuOverlay.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.replace('fa-times', 'fa-bars');
        }
    }
    
    // Touch event for better mobile support
    menuToggle.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu-content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Small delay to allow animation to complete
            setTimeout(toggleMenu, 300);
        });
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });

    // Improved touch handling for all interactive elements
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        el.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });

    // Performance optimization - lazy loading for images
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.loading = 'lazy';
        });
    }

    // Viewport height adjustment for mobile browsers
    function adjustViewportHeight() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    adjustViewportHeight();
    window.addEventListener('resize', adjustViewportHeight);
});

// Add this to your CSS for the viewport height adjustment