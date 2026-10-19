const menu = document.querySelector(".cabecalho-menu");
const botaoMenu = document.querySelector(".cabecalho-botao-menu");
const itens = document.querySelectorAll(".cabecalho-menu .item");

// abre e fecha o menu no celular
botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// fecha o menu quando clica em um item
itens.forEach(function (item) {
  item.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});
