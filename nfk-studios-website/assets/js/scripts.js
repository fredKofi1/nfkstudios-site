// Function to display a dynamic greeting message
const displayGreeting = () => {
    const greetingElement = document.getElementById('greeting');
    if (!greetingElement) return;

    const currentHour = new Date().getHours();
    const greetingMessage = currentHour < 12
        ? 'Good Morning!'
        : currentHour < 18
        ? 'Good Afternoon!'
        : 'Good Evening!';
    greetingElement.textContent = greetingMessage;
};

// Call the function when the page loads
window.onload = function () {
    displayGreeting();

    // Preserve dark mode on reload
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }

    // Hide preloader after load
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }
};

// Toggle hamburger menu
function toggleMenu() {
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('active');
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Event listener for dark mode toggle
document.getElementById('darkModeToggle')?.addEventListener('click', toggleDarkMode);

// Sound toggle
const sound = new Audio('click.mp3'); // Replace with your actual sound file
sound.volume = 0.2;

function toggleSound() {
    soundOn = !soundOn;
    const soundStatus = document.getElementById('soundStatus');
    if (soundStatus) {
        soundStatus.innerText = soundOn ? 'On' : 'Off';
    }
}

// Play sound on interaction
interactiveEls.forEach(el => {
    el.addEventListener('click', () => {
        if (soundOn) {
            sound.play().catch(() => {});
        }
    });
});

// Scroll-triggered animation
window.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("article");
    let scrollTriggered = false;

    window.addEventListener("scroll", () => {
        if (!scrollTriggered) {
            const container = document.querySelector(".container");
            if (container) {
                const containerTop = container.getBoundingClientRect().top;
                if (containerTop <= window.innerHeight / 2) {
                    articles.forEach((el, i) => {
                        el.style.animationDelay = `${0.4 + i * 0.2}s`;
                    });
                    scrollTriggered = true;
                }
            }
        }
    });
});

// Event listeners for greeting buttons
document.getElementById('changeGreetingButton')?.addEventListener('click', () => {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) greetingElement.textContent = 'Hello!';
});

document.getElementById('resetGreetingButton')?.addEventListener('click', displayGreeting);

// Function to toggle the visibility of a form
const toggleFormVisibility = () => {
    const formElement = document.getElementById('formContainer');
    if (formElement) {
        formElement.style.display = formElement.style.display === 'block' ? 'none' : 'block';
    }
};

// Create and style the form dynamically
const formContainer = document.createElement('div');
formContainer.id = 'formContainer';
Object.assign(formContainer.style, {
    position: 'absolute',
    top: '10px',
    left: '10px',
    width: '400px',
    height: '300px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ccc',
    padding: '20px',
    display: 'none',
    zIndex: '1000',
});

// Add form content
formContainer.innerHTML = `
    <h2>Contact Us</h2>
    <form id="contactForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" style="width: 100%;"><br><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" style="width: 100%;"><br><br>
        <label for="message">Message:</label><br>
        <textarea id="message" name="message" style="width: 100%; height: 100px;"></textarea><br><br>
        <button type="submit" style="margin-top: 10px;">Submit</button>
        <button type="button" id="closeFormButton" style="margin-top: 10px;">Close</button>
    </form>
`;

// Append the form to the body
document.body.appendChild(formContainer);

// Event listeners for form buttons
document.getElementById('showFormButton')?.addEventListener('click', toggleFormVisibility);
document.getElementById('closeFormButton')?.addEventListener('click', toggleFormVisibility);

// Handle form submission
document.getElementById('contactForm')?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
        const response = await fetch('submit_form.php', {
            method: 'POST',
            body: formData,
        });
        alert(response.ok ? 'Form submitted successfully!' : 'Form submission failed!');
    } catch (error) {
        alert('An error occurred while submitting the form.');
    }
});

// Function to toggle navigation menu visibility
const toggleNavigationMenu = () => {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
        navMenu.style.display = navMenu.style.display === 'block' ? 'none' : 'block';
    }
};

// Event listener for navigation menu toggle
document.getElementById('navToggleButton')?.addEventListener('click', toggleNavigationMenu);

// Close navigation menu when clicking outside
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    const navToggleButton = document.getElementById('navToggleButton');
    if (navMenu && navToggleButton && !navMenu.contains(event.target) && !navToggleButton.contains(event.target)) {
        navMenu.style.display = 'none';
    }
});

// Add hover effects to images
const handleImageHover = (event) => {
    const image = event.target;
    image.style.transform = 'scale(1.1)';
    image.style.opacity = '0.8';
};

const handleImageMouseOut = (event) => {
    const image = event.target;
    image.style.transform = 'scale(1)';
    image.style.opacity = '1';
};

document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('mouseover', handleImageHover);
    image.addEventListener('mouseout', handleImageMouseOut);
});

// Toggle between Sign Up and Sign In forms
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const signupForm = document.getElementById('signupForm');
    const signinForm = document.getElementById('signinForm');
    const toggleButtons = document.querySelectorAll('.toggle-button');

    // Toggle navigation menu visibility
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('visible');
    });

    // Toggle between Sign Up and Sign In forms
    toggleButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetForm = button.textContent.trim() === 'Sign Up' ? signupForm : signinForm;
            signupForm.classList.add('hidden');
            signinForm.classList.add('hidden');
            targetForm.classList.remove('hidden');
        });
    });
});

// Hamburger menu toggle
function toggleMenu() {
    const menu = document.getElementById('menuItems');
    menu.classList.toggle('active');
}

// Scroll-triggered animation
window.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll("article");
    let scrollTriggered = false;

    window.addEventListener("scroll", () => {
        if (!scrollTriggered) {
            const container = document.querySelector(".container");
            if (container) {
                const containerTop = container.getBoundingClientRect().top;
                if (containerTop <= window.innerHeight / 2) {
                    articles.forEach((el, i) => {
                        el.style.animationDelay = `${0.4 + i * 0.2}s`;
                    });
                    scrollTriggered = true;
                }
            }
        }
    });
});

// Sound toggle
let soundOn = true;
const sound = new Audio('click.mp3'); // replace with your actual sound file
sound.volume = 0.2;

function toggleSound() {
    soundOn = !soundOn;
    document.getElementById('soundStatus').innerText = soundOn ? 'On' : 'Off';
}
// Play sound on interaction
const interactiveEls = document.querySelectorAll('button, a');
interactiveEls.forEach(el => {
    el.addEventListener('click', () => {
        if (soundOn) {
            sound.play().catch(() => {});
        }
    });
});
