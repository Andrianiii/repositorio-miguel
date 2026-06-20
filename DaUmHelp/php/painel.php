<?php
require_once "../config/conexao.php";
// Inicia a sessão
session_start();

// Verifica se o usúario está logado
if (!isset($_SESSION["id"])) {

    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">

    <title>Painel - DáUmHelp</title>
</head>

<body>

    <h1>Bem-vindo, <?php echo $_SESSION["nome"]; ?>!</h1>

    <p>Você está logado no sistema.</p>

</body>
<a href="logout.php">Sair</a>

</html>