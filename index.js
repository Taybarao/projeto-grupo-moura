const botaoMenu = document.querySelector('.botao-menu')
const menu = document.querySelector('.menu-lateral')
const pagina = document.querySelector('.conteudo-pagina')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
    pagina.classList.toggle('desfoque-pagina')
})

const botaoServiço = document.querySelector('.botao-serviços')
const listaServiços = document.querySelector('.container-serviços')
const btServiço = document.querySelector('.btn-serviço')


botaoServiço.addEventListener('click', () => {
    listaServiços.classList.toggle('container-serviços-ativo')
    btServiço.classList.toggle('btn-serviço-ativo')
    pagina.classList.toggle('desfoque-pagina')
})









window.sr = ScrollReveal({reset: true });
sr.reveal('.titulo-conteudo-principal', {duration: 2000 });
sr.reveal('.texto-conteudo-principal', {duration: 4000 });
sr.reveal('.logo-empresa', {duration: 6000 });