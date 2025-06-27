// Dark mode toggle
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});
