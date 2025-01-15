// script.js

// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Adiciona a classe 'visible' para elementos visíveis
function handleScroll() {
    const projects = document.querySelectorAll('.project');
    const skills = document.querySelectorAll('.skill');
    const aboutSection = document.querySelector('#sobre-mim');

    // Animação para os projetos
    projects.forEach((project) => {
        if (isElementInViewport(project)) {
            project.classList.add('visible');
        }
    });

    // Animação para as competências
    skills.forEach((skill) => {
        if (isElementInViewport(skill)) {
            skill.classList.add('visible');
        }
    });

    // Animação para a seção "Sobre Mim"
    if (isElementInViewport(aboutSection)) {
        aboutSection.classList.add('visible');
    }
}

// Evento de rolagem para acionar a função handleScroll
window.addEventListener('scroll', handleScroll);
