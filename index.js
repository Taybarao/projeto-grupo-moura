//efeito slide section apresentaçao//
let time = 5000,
 imagemVista = 0,
  imagens = document.querySelectorAll("#slider img"),
   max = imagens.length;
 function nextImage(){
  imagens[imagemVista].classList.remove("selected")
   imagemVista++
    if (imagemVista >= max){
     imagemVista = 0;
}
       imagens[imagemVista].classList.add("selected")
}
 function start(){
           setInterval(() => {
            nextImage();
             }, time)
}
window.addEventListener("load",start)

//efeito fade ao rolar tela
 window.sr = ScrollReveal({reset: true });
  sr.reveal('.titulo-apresentaçao', {duration: 4000 });
   sr.reveal('.texto-apresentaçao', {duration: 8000 });
    sr.reveal('.logo-empresa', {duration: 6000 });
    sr.reveal('.beneficios', {duration: 6000 });
//botao aba menu lateral
const botaoMenu = document.querySelector('.botao-menu')
 const menu = document.querySelector('.menu-lateral')
  const pagina = document.querySelector('.conteudo-pagina')
   botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral-ativo')
    pagina.classList.toggle('desfoque-pagina')
})

//botao da janela de soluçoes + efeito desfoque restante tela
const botaoServiço = document.querySelector('.botao-serviços')
 const listaServiços = document.querySelector('.container-serviços') 
  const btServiço = document.querySelector('.btn-serviço')
   const margemCabeçalho = document.querySelector('.cabeçalho')
botaoServiço.addEventListener('click', () => {
 listaServiços.classList.toggle('container-serviços-ativo')
  btServiço.classList.toggle('btn-serviço-ativo')
   pagina.classList.toggle('desfoque-pagina')
    margemCabeçalho.classList.toggle('cabeçalho-ativo')
})


const sliderPrincipal = document.querySelector('.m1');
const btSlideEsquerdo = document.querySelector('.bt-esquerdo');
const btSlideDireito = document.querySelector('.bt-direito');

btSlideDireito.addEventListener('click', () => {
  sliderPrincipal.classList.remove('m1-desativado');
  sliderPrincipal.classList.add('m1-ativo');
});

btSlideEsquerdo.addEventListener('click', () => {
  sliderPrincipal.classList.remove('m1-ativo');
  sliderPrincipal.classList.add('m1-desativado');
});
