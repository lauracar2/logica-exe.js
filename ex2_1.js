//criar referencia ao form e ao elemento h3(onde será exibida a resposta).
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// crie um "ouvinte" de eventos, quando o botão for acionado//
frm.addEventListener("submit", (e) => {

    const nome = inNome.value; // corrige a captura do valor do campo de input
    resp.innerText = `Olá ${nome}!`; // exibe a resposta do programa
    e.preventDefault(); // evita o envio do formulário
});




