document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements object with null checks
    const elements = {
        greeting: document.getElementById('greeting') || null,
        darkModeToggle: document.getElementById('darkModeToggle') || null,
        hamburger: document.getElementById('hamburger') || null,
        navMenu: document.getElementById('navMenu') || null,
        contactForm: document.getElementById('contactForm') || null,
        formContainer: document.getElementById('formContainer') || null,
        gallery: document.getElementById('gallery') || null,
        portfolioItems: document.querySelectorAll('.portfolio-item') || [],
        filterButtons: document.querySelectorAll('.filter-btn') || []
    };

    // Safe element access function
    const safeAccess = (element, action) => {
        if (!element) return;
        try {
            return action(element);
        } catch (error) {
            console.warn(`Error accessing element:`, error);
        }
    };

    // Initialize features only if required elements exist
    const initializeFeatures = () => {
        // Initialize navigation
        if (elements.hamburger && elements.navMenu) {
            elements.hamburger.addEventListener('click', () => {
                elements.navMenu.classList.toggle('visible');
                const isExpanded = elements.navMenu.classList.contains('visible');
                elements.hamburger.setAttribute('aria-expanded', isExpanded.toString());
            });
        }

    };

    try {
        initializeFeatures();
    } catch (error) {
        console.error('Error during initialization:', error);
        // Show error to user if we have the notification system
        if (window.showError) {
            window.showError('Initialization Error', 'Failed to initialize some features. Please refresh the page.');
        }
    }
});