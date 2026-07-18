const produtos = [
    {
        id: 1,
        nome: "Conjunto estofado 3 e 2 lugares Oslo marrom",
        categoria: "sofas",
        categoriaTexto: "Sofás",
        marca: "Leppos",
        imagem: "img/produtos/sofas/leppos oslo 3 e 2 lugares.jpeg",
        whatsapp: "551637284266",
        destaque: true,
        disponivel: true,
        cores: ["Marrom"]
    },
    {
        id: 2,
        nome: "Conjunto estofado 3 e 2 lugares Nassau cor: 560",
        categoria: "sofas",
        categoriaTexto: "Sofás",
        marca: "Leppos",
        imagem: "img/produtos/sofas/Conjunto estofado 3 e 2 lugares  Nassau.jpeg",
        whatsapp: "551637284266",
        destaque: false,
        disponivel: true,
        cores: ["560"]
    },
    {
        id: 3,
        nome: "Conjunto estofado 3 e 2 lugares Aruba",
        categoria: "sofas",
        categoriaTexto: "Sofás",
        marca: "Leppos",
        imagem: "img/produtos/sofas/sofa_3x2_lugaruba_marrom_a536_leppos_estofados_1_20260120115218_d1c6397fea72.webp",
        whatsapp: "551637284266",
        destaque: true,
        disponivel: true,
        cores: ["Marrom"]
    },
    {
        id: 4,
        nome: "Conjunto estofado 3 e 2 lugares Toronto",
        categoria: "sofas",
        categoriaTexto: "Sofás",
        marca: "Leppos",
        imagem: "img/produtos/sofas/toronto.jpeg",
        whatsapp: "551637284266",
        destaque: true,
        disponivel: true,
        cores: []
    },
    {
        id: 5,
        nome: "Colchão Casal",
        categoria: "colchoes",
        categoriaTexto: "Colchões",
        marca: "",
        imagem: "img/produtos/colchao1.jpg",
        whatsapp: "551637284266",
        destaque: false,
        disponivel: true,
        cores: []
    },
    {
        id: 6,
        nome: "Guarda-roupa Modena 4 portas duas gavetas",
        categoria: "guarda-roupas",
        categoriaTexto: "Guarda-roupas",
        marca: "Incorplac",
        imagem: "img/produtos/guarda roupas/05-guarda-roupa-solteiro-4-portas-modena.webp",
        whatsapp: "551637284266",
        destaque: false,
        disponivel: true,
        cores: []
    },
    {
        id: 7,
        nome: "Guarda-roupa Capelinha Plus 4 portas 2 gavetas",
        categoria: "guarda-roupas",
        categoriaTexto: "Guarda-roupas",
        marca: "Santos Andirá",
        imagem: "img/produtos/guarda roupas/capelinha plus.webp",
        whatsapp: "551637284266",
        destaque: false,
        disponivel: true,
        cores: []
    },
    {
        id: 8,
        nome: "Cozinha Completa",
        categoria: "cozinhas",
        categoriaTexto: "Cozinhas",
        marca: "",
        imagem: "img/produtos/cozinha1.jpg",
        whatsapp: "551637284266",
        destaque: false,
        disponivel: true,
        cores: []
    }
];


function renderizarProdutosDestaque() {
    const containerDestaques = document.getElementById("produtos-destaque");

    if (!containerDestaques) {
        return;
    }

    const produtosDestaque = produtos.filter(produto =>
        produto.destaque === true &&
        produto.disponivel === true
    );

    containerDestaques.innerHTML = "";

    produtosDestaque.forEach(produto => {
        const coluna = document.createElement("div");

        coluna.className = "col-md-6 col-lg-4";

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

                    ${
                        produto.marca
                            ? `<p class="produto-marca">Marca: ${produto.marca}</p>`
                            : ""
                    }

                    <a
                        href="https://wa.me/${produto.whatsapp}?text=${encodeURIComponent(
                            `Olá! Gostaria de saber mais sobre o produto: ${produto.nome}`
                        )}"
                        target="_blank"
                        class="btn btn-success w-100"
                    >
                        <i class="bi bi-whatsapp"></i>
                        Consultar produto
                    </a>

                </div>

            </article>
        `;

        containerDestaques.appendChild(coluna);
    });
}