document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
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
    toggle.classList.add('active');
  }

  // Toggle dark mode on button click
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('active');

    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Failed to store theme preference:', e);
    }
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const newSystemTheme = e.matches ? 'dark' : 'light';

    if (!savedTheme) { // Only adapt to system changes if no manual theme is saved
      if (newSystemTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.classList.add('active');
      } else {
        document.body.classList.remove('dark-mode');
        toggle.classList.remove('active');
      }
    }
  });
});
