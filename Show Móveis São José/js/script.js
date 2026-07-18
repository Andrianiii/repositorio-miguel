// ========================================
// ELEMENTOS DA PÁGINA DE PRODUTOS
// ========================================

// Área onde os produtos são exibidos em produtos.html
const listaProdutos = document.querySelector(".lista-produtos");

// Botões de filtro de produtos.html
const filtros = document.querySelectorAll(".filtros button");


// ========================================
// ELEMENTO DA HOME
// ========================================

// Área dos produtos em destaque em index.html
const listaDestaques = document.querySelector("#produtos-destaque");


// ========================================
// FUNÇÃO DOS PRODUTOS DA PÁGINA PRODUTOS
// ========================================

function mostrarProdutos(lista) {

    // Se a página não possuir .lista-produtos,
    // a função é encerrada
    if (!listaProdutos) {
        return;
    }

    // Limpa os produtos que já estavam na tela
    listaProdutos.innerHTML = "";

    // Percorre cada produto recebido
    lista.forEach(function (produto) {

        // Produtos indisponíveis não aparecem
        if (produto.disponivel === false) {
            return;
        }

        // Cria o card
        const card = document.createElement("div");

        card.classList.add("produto-card");

        card.setAttribute(
            "data-categoria",
            produto.categoria
        );

        // Monta o conteúdo do card
        card.innerHTML = `
            <img
                src="${produto.imagem}"
                alt="${produto.nome}"
            >

            <div class="produto-card-content">

                <h3>${produto.nome}</h3>

                <span class="categoria">
                    ${produto.categoriaTexto}
                </span>

                <p>
                    Marca: ${produto.marca || "Consultar"}
                </p>

                <a
                    class="btn-whatsapp"
                    href="https://wa.me/${produto.whatsapp}?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais sobre o produto: ${produto.nome}`
                    )}"
                    target="_blank"
                >
                    Consultar no WhatsApp
                </a>

            </div>
        `;

        listaProdutos.appendChild(card);
    });
}


// ========================================
// FUNÇÃO DOS DESTAQUES DA HOME
// ========================================

function mostrarDestaques() {

    // Se a página não possuir #produtos-destaque,
    // a função é encerrada
    if (!listaDestaques) {
        return;
    }

    // Seleciona somente produtos disponíveis
    // e marcados como destaque
    const produtosDestaque = produtos.filter(function (produto) {

        return (
            produto.destaque === true &&
            produto.disponivel === true
        );
    });

    // Limpa a área de destaques
    listaDestaques.innerHTML = "";

    // Percorre os produtos selecionados
    produtosDestaque.forEach(function (produto) {

        // Cria a coluna responsiva do Bootstrap
        const coluna = document.createElement("div");

        coluna.classList.add(
            "col-12",
            "col-md-6",
            "col-lg-4"
        );

        // Cria o conteúdo do card
        coluna.innerHTML = `
            <article class="produto-home">

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                    class="img-fluid"
                >

                <div class="produto-info">

                    <span class="produto-categoria">
                        ${produto.categoriaTexto}
                    </span>

                    <h3>${produto.nome}</h3>

                    <p class="produto-marca">
                        Marca: ${produto.marca || "Consultar"}
                    </p>

                    <a
                        class="btn btn-success w-100"
                        href="https://wa.me/${produto.whatsapp}?text=${encodeURIComponent(
                            `Olá! Gostaria de saber mais sobre o produto: ${produto.nome}`
                        )}"
                        target="_blank"
                    >
                        <i class="bi bi-whatsapp"></i>
                        Consultar produto
                    </a>

                </div>

            </article>
        `;

        listaDestaques.appendChild(coluna);
    });
}


// ========================================
// EXECUÇÃO INICIAL
// ========================================

// Mostra os produtos em produtos.html
mostrarProdutos(produtos);

// Mostra os destaques em index.html
mostrarDestaques();


// ========================================
// FILTROS DA PÁGINA DE PRODUTOS
// ========================================

filtros.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const filtro = botao.dataset.filtro;

        // Remove a classe ativo de todos
        filtros.forEach(function (botaoFiltro) {
            botaoFiltro.classList.remove("ativo");
        });

        // Adiciona ativo no botão clicado
        botao.classList.add("ativo");

        if (filtro === "todos") {

            mostrarProdutos(produtos);

        } else {

            const produtosFiltrados = produtos.filter(
                function (produto) {
                    return produto.categoria === filtro;
                }
            );

            mostrarProdutos(produtosFiltrados);
        }
    });
});
// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const elementosAnimados = document.querySelectorAll(".animar");

const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("apareceu");
        }

    });

}, {
    threshold: 0.1
});

elementosAnimados.forEach(function (elemento) {
    observer.observe(elemento);
});
// ========================================
// NAVBAR AO ROLAR
// ========================================

const navbar = document.querySelector(".navbar-showmoveis");

if (navbar) {

    function atualizarNavbar() {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", atualizarNavbar);

    atualizarNavbar();
}