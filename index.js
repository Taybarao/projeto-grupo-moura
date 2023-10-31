const botaoMenu = document.querySelector('.botao-menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
})

window.sr = ScrollReveal({reset: true });
sr.reveal('.titulo-conteudo-principal', {duration: 2000 });
sr.reveal('.texto-conteudo-principal', {duration: 4000 });
sr.reveal('.logo-empresa', {duration: 6000 });