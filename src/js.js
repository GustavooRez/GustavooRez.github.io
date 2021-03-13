/* Função para que quando seja descido o mouse, a cor da nav bar mude*/
/* Se o topo é igual a zero, ele adiciona a navbar transparente */
/* Se o topo é diferente de zero, ele adiciona a navbar preta*/
$(window).on("scroll", function () {
  if ($(window).scrollTop() == 0) {
    $("nav").addClass("nav-transparent");
    $("nav").removeClass("nav-black");
  } else {
    $("nav").addClass("nav-black");
    $("nav").removeClass("nav-transparent");
  }
});

/* Função que é carregada quando se inicia o site para mudar a cor da logotipo e iniciar as animações*/
/* Se o mouse entra na logo, ele muda a referencia de imagem, se sai muda a outra referencia*/

window.onload = function () {
  const logo = document.getElementById("logo");
  AOS.init();

  logo.addEventListener("mouseenter", (e) => {
    logo.setAttribute("src", "img/Logo_preta_tracobranco.png");
  });

  logo.addEventListener("mouseleave", (e) => {
    logo.setAttribute("src", "img/Logo_branca.png");
  });
};

/* Função que abre e fecha a navbar mobile*/
$(".navbar-collapse a").click(function () {
  $(".navbar-collapse").collapse("hide");
});
;

/* Função que inicia o carrossel*/
$(".carousel").carousel();
