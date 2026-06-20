<?php

    // Importa a conexão com o banco
    require_once "../config/conexao.php";

    // Busca todas as vagas ativas no banco
    $sql = "SELECT * FROM vagas WHERE status = 'ativa' ORDER BY data_publicacao DESC";

    // Executa a consulta
    $resultado = mysqli_query($conexao, $sql);

?>
<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vagas - DáUmHelp</title>
    <link rel="stylesheet" href="../css/style.css?v=1">

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@300;400;500;600&display=swap"
        rel="stylesheet">
</head>

<body>

    <nav>
        <div class="nav-logo">
            Dá<span>Um</span>Help
        </div>

        <div class="nav-links">
            <a href="../index.html">Home</a>

            <a href="../sobre.html">Sobre</a>

            <a href="php/vagas.php" class="active">Vagas</a>

            <a href="../postar-vaga.html">Postar Vaga</a>

            <a href="../contato.html">Contato</a>

        </div>

        <a href="login.html" class="nav-cta">
            Entrar
        </a>
    </nav>

    <main>

        <section class="section">

            <div class="section-tag">
                Oportunidades
            </div>

            <h1 class="section-title">
                Vagas Disponíveis
            </h1>

            <p>
                Confira as oportunidades cadastradas pelas empresas.
            </p>

            <div class="jobs-grid">

                <div class="job-card">

                    <?php while($vaga = mysqli_fetch_assoc($resultado)){ ?> 

                    <div class="job-title">
                        <?php echo $vaga["cargo"]; ?>
                    </div>

                    <div class="job-company">
                        Empresa ID: <?php echo $vaga["empresa_id"]; ?>
                    </div>

                    <div class="job-salary">
                        <?php echo $vaga["salario"]; ?>
                    </div>
                    
                    
                </div>
                <?php } ?>
            </div>
        </section>

    </main>

    <footer>

    </footer>

</body>

</html>