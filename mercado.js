const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inPreco.value);
  const respo = frm.inProduto.value;
  const resul = valor * 2 + 3;

  resp1.innerHTML = `${respo} - Promoção: Leve 3 por: R$${resul.toFixed(2)}`; 
  resp2.innerHTML = `O terceiro produto sai por R$ 3,00`;  
});
