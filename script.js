// Controle do Tema (Dark / Light Mode)
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

// Verifica se já existe uma preferência salva no navegador
const savedTheme = localStorage.getItem('theme');

// Se tiver salvo "light", aplica o tema claro imediatamente
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeBtn.textContent = '☀️'; // Muda o ícone para sol
}

themeBtn.addEventListener('click', () => {
    // Alterna a classe 'light-mode' no corpo do site
    body.classList.toggle('light-mode');

    // Verifica se o modo claro está ativo para salvar a preferência e mudar o ícone
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeBtn.textContent = '☀️';
    } else {
        localStorage.setItem('theme', 'dark');
        themeBtn.textContent = '🌙';
    }
});

// Animação de Scroll
const elementsToAnimate = document.querySelectorAll('.section, .skill-card, .project-card');

const observerOptions = {
    threshold: 0.1 // A animação dispara quando 10% do elemento estiver visível
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

elementsToAnimate.forEach(el => {
    el.classList.add('hidden'); 
    observer.observe(el);
});