
const formulario = document.querySelector("form");
const mensagemSucesso = document.querySelector("#mensagem-sucesso");

formulario.addEventListener("submit", async function (evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);

    try {
        const resposta = await fetch(
            "https://formsubmit.app/f/s8pqgfb4h4",
            {
                method: "POST",
                headers: {
                    Accept: "application/json"
                },
                body: dados
            }
        );

        const resultado = await resposta.json();

        if (!resposta.ok || !resultado.ok) {
            throw new Error(
                resultado.error?.message || "O serviço recusou o envio."
            );
        }

        formulario.reset();
        formulario.hidden = true;
        mensagemSucesso.hidden = false;

    } catch (erro) {
        alert("Erro no envio: " + erro.message);
        console.error("Erro ao enviar candidatura:", erro);
    }
});
