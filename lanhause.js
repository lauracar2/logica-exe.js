const frm = document.querySelector("form");   // frm: Obtém a referência para o primeiro elemento <form> na página.                                                                                     
const resp = document.querySelector("h3");    // resp: Obtém a referência para o primeiro elemento <h3> na página.    

//Adiciona um ouvinte de evento para o evento de submissão do formulário. 
frm.addEventListener("submit", (e) => {
   // Obtém os valores dos campos de entrada do formulário com IDs "inNumero1" e "inNumero2".

   const valorporB =  parseFloat(frm.inNumero1.value);  //Converte o valor de "inNumero1" para um número de ponto flutuante (parseFloat).
   const TempoporP = parseInt(frm.inNumero2.value);      //Converte o valor de "inNumero2" para um número inteiro (parseInt).

   const valorTotal = (TempoporP + 5) / 15 * valorporB;  //Calcula o valor total usando a fórmula: (TempoporP + 5) / 15 * valorporB.

   resp.innerHTML = `Valor a pagar R$:${valorTotal.toFixed(2)}`;  //Atualiza o conteúdo do elemento <h3> na página para exibir o valor total formatado com duas casas decimais.
   e.preventDefault();  //Impede o comportamento padrão do formulário, que seria recarregar a página ao ser submetido.
   // Isso permite que o código JavaScript processe os dados do formulário antes de qualquer ação padrão.


})




