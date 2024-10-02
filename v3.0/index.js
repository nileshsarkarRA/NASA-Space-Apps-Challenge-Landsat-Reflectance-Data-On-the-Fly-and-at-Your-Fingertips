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

// Implement logic for determining Landsat overpass
function determineOverpass(latitude, longitude) {
    // Use a satellite overpass API or calculate overpass times based on satellite ephemeris data
    // ...
}

// Implement logic for acquiring Landsat data
function acquireLandsatData(latitude, longitude, startDate, endDate, cloudCoverThreshold) {
    // Use a cloud data catalog or Landsat API to fetch data based on the specified criteria
    // ...
    return data; // Return the acquired data
}

// Implement logic for displaying Landsat data
function displayLandsatData(data) {
    // Populate the landsatGrid, sceneMetadataDiv, and spectralSignatureDiv with the acquired data
    // ...
}

// Implement logic for downloading data
function downloadData(data) {
    // Convert the data to a CSV format and offer it for download
    // ...
}

// Handle form submission
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const placeName = placeNameInput.value;
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const leadTime = leadTimeInput.value;
    const notificationMethod = notificationMethodSelect.value;
    const leadTimeMinutes = parseInt(leadTimeInput.value);
    const now = new Date();
    const startDate = new Date(now);
    const endDate = new Date(now);

    startDate.setMinutes(startDate.getMinutes() - leadTimeMinutes);
    endDate.setMinutes(endDate.getMinutes() + leadTimeMinutes);

    // Determine Landsat overpass
    determineOverpass(latitude, longitude);

    // Acquire Landsat data
    const data = acquireLandsatData(latitude, longitude, startDate, endDate, 15); // Example cloud cover threshold

    // Display Landsat data
    displayLandsatData(data);

    // Handle notifications (based on notificationMethod)
    // ...

    // Download data (if needed)
    downloadData(data);
});


// ... (rest of your JavaScript code)

// Handle "Download Data" button click
downloadDataButton.addEventListener('click', () => {
    // Create a CSV string (replace with your actual data)
    const csvData = "header1,header2,header3\nvalue1,value2,value3\nvalue4,value5,value6";

    // Create a Blob object with the CSV data
    const blob = new Blob([csvData], { type: 'text/csv' });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a download link
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landsat_data.csv'; // Specify the desired file name

    // Trigger the download
    a.click();

    // Revoke the URL to free up resources
    window.URL.revokeObjectURL(url);
});