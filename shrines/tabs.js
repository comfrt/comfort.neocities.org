document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('input[type="radio"][name="tab"]');
    const sections = document.querySelectorAll('main section');

    tabs.forEach(tab => {
        tab.addEventListener('change', function() {
            sections.forEach(section => {
                section.style.display = 'none';
            });

            const selectedTab = document.querySelector('input[type="radio"][name="tab"]:checked');
            const selectedSection = document.getElementById(selectedTab.id.replace('tab-', '') + '-tab');
            selectedSection.style.display = 'block';
        });
    });
});

window.onload = function() {
    // Select the "Home" tab by default
    document.getElementById("tab-home").checked = true;
};