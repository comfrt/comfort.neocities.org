document.addEventListener("DOMContentLoaded", function() {
    loadSidebarContent('navbar', '../navbar.html');
});

function loadSidebarContent(elementId, filePath, callback) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
            if (callback) callback();
        })
        .catch(err => console.error(err));
}