// Get DOM elements
const placeNameInput = document.getElementById('place-name');
const latitudeInput = document.getElementById('latitude');
const longitudeInput = document.getElementById('longitude');
const selectMapButton = document.getElementById('select-map');
const leadTimeInput = document.getElementById('lead-time');
const notificationMethodSelect = document.getElementById('notification-method');
const landsatGrid = document.querySelector('.landsat-grid');
const sceneMetadataDiv = document.querySelector('.scene-metadata');
const spectralSignatureDiv = document.querySelector('.spectral-signature');
const downloadDataButton = document.getElementById('download-data');

// ... (rest of your code)

// Add animation for navigation links
const navLinks = document.querySelectorAll('nav ul li a'); // Declare navLinks only once
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = '#ccc';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = '';
    });
});

// ... (rest of your code)

// Add blur effect on navigation link clicks
navLinks.forEach(link => {  // Use the previously declared navLinks
    link.addEventListener('click', () => {
        document.body.style.filter = 'blur(5px)';
        setTimeout(() => {
            document.body.style.filter = 'none';
        }, 300);
    });
});


// ... (existing code in index.js)

// Add animation for navigation links (already implemented)

// Add blur effect on navigation link clicks (already implemented)

// Add fade-out animation on page redirection (requires additional code)

// This code needs to be placed before the existing blur effect code
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', (event) => {
        // Prevent default link behavior (important for fade-out animation)
        event.preventDefault();

        // Get the target URL from the link's href attribute
        const targetUrl = link.href;

        // Add a fade-out animation to the body element
        document.body.style.opacity = 1;
        document.body.style.transition = 'opacity 0.3s ease-in-out';

        const fadeOutInterval = setInterval(() => {
            const currentOpacity = parseFloat(document.body.style.opacity);
            if (currentOpacity <= 0) {
                clearInterval(fadeOutInterval);
                // Redirect to the target URL after the fade-out is complete
                window.location.href = targetUrl;
            } else {
                document.body.style.opacity = currentOpacity - 0.1;
            }
        }, 30);
    });
});