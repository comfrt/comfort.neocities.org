// Theme images object mapping theme names to image URLs
const themeImages = {
    'debut.css': 'https://www.bjork.fr/IMG/jpg/bjork-1993-kevin-cummins-3-01.jpg',
    'post.css': 'https://www.bjork.fr/IMG/jpg/bjork-1996-eiichiro-sakata-01.jpg',
    'homogenic.css': 'homogenic.png',
    'vespertine.css': 'https://www.bjork.fr/IMG/jpg/bjork-2001-du-preez-thornton-jones-vesp2-05b.jpg',
    'medulla.css': 'https://www.bjork.fr/IMG/jpg/bjork-2005-erez-sabag-02b.jpg',
    'volta.css': 'https://www.bjork.fr/IMG/jpg/inez-vinoodh-volta-02-o.jpg',
    'biophilia.css': 'https://www.bjork.fr/IMG/jpg/bjork-2011-inez-vinoodh-14.jpg',
    'vulnicura.css': 'https://www.bjork.fr/IMG/jpg/bjork-2016-family-avatar-01b-andrew-thomas-huang.jpg',
    'utopia.css': 'https://www.bjork.fr/IMG/jpg/bjork-2017-warren-dupreez-nick-thornton-jones-utopia-cornucopia.jpg',
    'fossora.css': 'https://www.bjork.fr/IMG/jpg/vidar-logi-bjork-fossora-2022-pitchfork-01.jpg'
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
    lastTheme = "utopia.css";
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
        'debut.css': "come to me, i'll take care of you",
        'post.css': "to be safe up here with you",
        'homogenic.css': "all is full of love, all around you",
        'vespertine.css': "if you're crying, darling, undo",
        'medulla.css': "i want to go out of my way for you, i want to help you",
        'volta.css': "love is all, i dare to drown to be proven wrong",
        'biophilia.css': "you are a light-bearer, receiving radiance from others",
        'vulnicura.css': "i raise a monument of love, and we can get healed by it",
        'utopia.css': "hold fort for love forever",
        'fossora.css': "safe inside the fabric of our love-woven membrane"
    };
    
    // Retrieve the lyrics placeholder
    const lyricsElement = document.getElementById('lyrics-placeholder');
    
    // Set the lyrics based on the selected theme
    lyricsElement.textContent = themeLyrics[themeName] || "";
}
