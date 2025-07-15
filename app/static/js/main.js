// Smooth scroll (optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark mode toggle
const toggle = document.getElementById('dark-toggle');

// On page load, apply saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
    toggle.textContent = '☀️ Light Mode';
} else {
    document.documentElement.classList.remove('dark');
    toggle.textContent = '🌙 Dark Mode';
}

toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        toggle.textContent = '☀️ Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggle.textContent = '🌙 Dark Mode';
    }
});
