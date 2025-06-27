// Dark mode toggle
const toggle = document.getElementById('toggle');
const body = document.body;

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
});
// Sauvegarder le thème
toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Charger le thème
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}
