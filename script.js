
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    const overlay = document.getElementById('overlay');
    let isMenuOpen = false;
    
    // Toggle menu function
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
            menuOverlay.classList.add('active');
            overlay.classList.add('active');
            menuToggle.classList.remove('fa-bars');
            menuToggle.classList.add('fa-times');
        } else {
            menuOverlay.classList.remove('active');
            overlay.classList.remove('active');
            menuToggle.classList.remove('fa-times');
            menuToggle.classList.add('fa-bars');
        }
    }
    
    // Click event for menu toggle
    menuToggle.addEventListener('click', toggleMenu);
    
    // Click event for overlay to close menu
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on a link (optional)
    const menuLinks = document.querySelectorAll('.menu-content a');
    menuLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
});