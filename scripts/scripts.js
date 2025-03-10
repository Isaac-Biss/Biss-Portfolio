// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Theme Toggle
const themeSwitch = document.getElementById('theme-switch');

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeSwitch.checked = savedTheme === 'dark';
}

// Toggle theme and save preference
themeSwitch.addEventListener('change', function() {
  const isDark = this.checked;
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Parallax Effect for Home Section
window.addEventListener('scroll', () => {
  const homeSection = document.getElementById('home');
  const scrollPosition = window.scrollY;
  homeSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});

// Project Filters
const filters = document.querySelectorAll('.filter-button');
const projects = document.querySelectorAll('.project-card');

filters.forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      projects.forEach(project => {
          if (filter === 'all' || project.classList.contains(filter)) {
              project.style.display = 'block';
          } else {
              project.style.display = 'none';
          }
      });
  });
});
