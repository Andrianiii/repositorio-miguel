<?php

// Inicia a sessão do usuário
session_start();

// Importa a conexão com o banco
require_once "../config/conexao.php";

// Recene ps dadps enviados pelo formulário
$tipo_usuario = $_POST["tipo_usuario"];

$email = $_POST["email"];

$senha = $_POST["senha"];



// Verifica qual tabela será consultada
if($tipo_usuario == "candidato"){

    $sql = "SELECT * FROM cadastro_candidato
            WHERE email = '$email'";

}else{
    die("Tipo de usuário inválido");
}

// Executa a consulta no banco
$resultado = mysqli_query($conexao, $sql);

// Verifica se encontrou algum usuário
if(mysqli_num_rows($resultado) == 1){

    $usuario = mysqli_fetch_assoc($resultado);

    if(password_verify($senha, $usuario["senha"])){

        // Guarda informações do usuário na sessão
        $_SESSION["id"] = $usuario["id"];

        $_SESSION["nome"] = $usuario["nome"];

        $_SESSION["tipo_usuario"] = $tipo_usuario;

        // Redireciona para o painel
        header("Location: painel.php");
        exit();

}else{
    
    echo "Senha incorreta";
}

}else{

    echo "Usuário não encontrado";

}
?>