document.addEventListener('DOMContentLoaded', () => {
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Check the user's saved theme in localStorage, or use system preference
  const savedTheme = localStorage.getItem('theme');
  const currentTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

  // Apply the current theme
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
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
