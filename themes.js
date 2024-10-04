document.addEventListener('DOMContentLoaded', () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Check for saved theme, fallback to system preference
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem('theme');
    } catch (e) {
        console.error('LocalStorage is disabled or inaccessible:', e);
    }

    const currentTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

    // Apply the current theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newSystemTheme = e.matches ? 'dark' : 'light';

        if (!savedTheme) { // Only adapt to system changes if no manual theme is saved
            if (newSystemTheme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    });
});
