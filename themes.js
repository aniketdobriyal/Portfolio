document.addEventListener('DOMContentLoaded', () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let savedTheme = null;

    // Try-catch block to handle localStorage safely
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

    // Listen for system theme changes and adapt (only if no manual theme is saved)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const newSystemTheme = e.matches ? 'dark' : 'light';

        // Only adapt to system changes if no manual theme is saved
        if (!savedTheme) {
            if (newSystemTheme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
    });
});
