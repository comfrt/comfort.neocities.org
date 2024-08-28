// Theme images object mapping theme names to image URLs
const themeImages = {
    'bjork/debut.css': 'bjork/debut1.jpg',
    'bjork/post.css': 'bjork/post1.jpg',
    'bjork/homogenic.css': 'bjork/homogenic1.png',
    'bjork/vespertine.css': 'bjork/vespertine1.jpg',
    'bjork/medulla.css': 'bjork/medulla1.jpg',
    'bjork/volta.css': 'bjork/volta1.jpg',
    'bjork/biophilia.css': 'bjork/biophilia1.jpg',
    'bjork/vulnicura.css': 'bjork/vulnicura1.jpg',
    'bjork/utopia.css': 'bjork/utopia1.jpg',
    'bjork/fossora.css': 'bjork/fossora1.jpg'
    // Add more themes and corresponding image URLs
};

// Get the theme image element
const themeImage = document.getElementById('theme-image');

// Get the theme links container
const themeLinksContainer = document.getElementById('theme-links');

// Retrieve the last selected theme from localStorage
let lastTheme = localStorage.getItem('selectedTheme');

// If no last theme is found, set "utopia.css" as the default theme
if (!lastTheme) {
    lastTheme = "bjork/utopia.css";
}

// Apply the default theme
applyTheme(lastTheme);

// Update the lyrics based on the selected theme
updateLyrics(lastTheme);

// Listen for clicks on theme links
themeLinksContainer.addEventListener('click', function(event) {
    // Prevent default behavior of anchor tags
    event.preventDefault();
    
    // Check if the clicked element is a theme link
    if (event.target.tagName === 'A') {
        // Get the selected theme filename from the data-theme attribute
        const selectedTheme = event.target.getAttribute('data-theme');
        
        // Apply the selected theme
        applyTheme(selectedTheme);
        
        // Update the lyrics based on the selected theme
        updateLyrics(selectedTheme);
        
        // Store the selected theme in localStorage
        localStorage.setItem('selectedTheme', selectedTheme);
    }
});

// Function to apply the selected theme
function applyTheme(themeName) {
    // Remove all existing theme stylesheets
    const existingThemes = document.querySelectorAll('link[rel="stylesheet"][id^="theme"]');
    existingThemes.forEach(theme => {
        theme.remove();
    });
    
    // Create a new link element for the selected theme
    const newTheme = document.createElement('link');
    newTheme.setAttribute('rel', 'stylesheet');
    newTheme.setAttribute('id', 'theme-link');
    newTheme.setAttribute('href', themeName);
    
    // Append the new theme stylesheet to the document head
    document.head.appendChild(newTheme);
    
    // Set the theme image source based on the selected theme
    themeImage.src = themeImages[themeName] || "";
} 

// Function to update the lyrics based on the selected theme
function updateLyrics(themeName) {
    // Define the lyrics for each theme
    const themeLyrics = {
        'bjork/debut.css': "come to me, i'll take care of you",
        'bjork/post.css': "to be safe up here with you",
        'bjork/homogenic.css': "all is full of love, all around you",
        'bjork/vespertine.css': "if you're crying, darling, undo",
        'bjork/medulla.css': "i want to go out of my way for you, i want to help you",
        'bjork/volta.css': "love is all, i dare to drown to be proven wrong",
        'bjork/biophilia.css': "you are a light-bearer, receiving radiance from others",
        'bjork/vulnicura.css': "i raise a monument of love, and we can get healed by it",
        'bjork/utopia.css': "hold fort for love forever",
        'bjork/fossora.css': "safe inside the fabric of our love-woven membrane"
    };
    
    // Retrieve the lyrics placeholder
    const lyricsElement = document.getElementById('lyrics-placeholder');
    
    // Set the lyrics based on the selected theme
    lyricsElement.textContent = themeLyrics[themeName] || "";
}
