// Toggle the mobile navigation menu
document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close the menu when a link is clicked (optional)
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
    });
});

