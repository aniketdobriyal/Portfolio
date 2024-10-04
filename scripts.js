// Toggle the mobile navigation menu
//document.getElementById('mobile-menu-toggle').addEventListener('click', () => {
  //  document.querySelector('.navbar').classList.toggle('active');
//});

// Close the menu when a link is clicked (optional)
//document.querySelectorAll('.navbar a').forEach(link => {
  //  link.addEventListener('click', () => {
    //    document.querySelector('.navbar').classList.remove('active');
  //  });
//});

//for darkmode switching 
        document.addEventListener('DOMContentLoaded', () => {
          const toggle = document.getElementById('dark-mode-toggle');
          const currentTheme = localStorage.getItem('theme') || 'light';
      
          if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggle.classList.add('active');
          }
      
          toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggle.classList.toggle('active');
            const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
            localStorage.setItem('theme', theme);
          });
        });
      
