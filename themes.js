document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-mode-toggle');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme based on system preference
  updateTheme(systemPrefersDark ? 'dark' : 'light');

  // Toggle dark mode on button click
  toggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('active', isDarkMode);
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    updateTheme(e.matches ? 'dark' : 'light');
  });

  // Function to update theme and toggle button state
  function updateTheme(theme) {
    const isDarkMode = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDarkMode);
    toggle.classList.toggle('active', isDarkMode);
  }
});
