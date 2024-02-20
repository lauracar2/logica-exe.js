

const frm = document.querySelector("form"); 
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  
  const remedio = frm.inRemedio.value;
  const preco = Number(frm.inValor.value);

  const valor = (preco * 2) - 3;

  resp1.innerHTML = `Promoção de ${remedio}`;
  resp2.innerHTML = `Leve 2 por R$: ${valor}`;

  e.preventDefault();

});


