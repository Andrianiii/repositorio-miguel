<?php

// Importa o arquivo de conexão com o banco
require_once "../config/conexao.php";

// Recebe os dados enviados pelo formulário
$tipo_usuario = $_POST["tipo_usuario"];

$nome = $_POST["nome"];

$email = $_POST["email"];

$telefone = $_POST["telefone"];

$cidade = $_POST["cidade"];

$senha = $_POST["senha"];

$confirmar_senha = $_POST["confirmar_senha"];

// Verifica se as senhas são iguais
if ($senha != $confirmar_senha) {

    die("As senhas não coincidem");

}

// Criptografa a senha antes de salvar no banco
$senha_criptografada = password_hash(
    $senha,
    PASSWORD_DEFAULT
);

// Se for candidato, salva na tabela cadastro_candidato
if ($tipo_usuario == "candidato") {

    $sql = "INSERT INTO cadastro_candidato
    (nome, email, telefone, cidade, senha)

    VALUES

    ('$nome', '$email', '$telefone', '$cidade', '$senha_criptografada')";

    $resultado = mysqli_query(
        $conexao,
        $sql
    );

// Se for empresa, salva na tabela empresas
} else if ($tipo_usuario == "empresa") {

    $sql = "INSERT INTO empresas
    (nome, email, telefone, cidade, senha)

    VALUES

    ('$nome', '$email', '$telefone', '$cidade', '$senha_criptografada')";

    $resultado = mysqli_query(
        $conexao,
        $sql
    );

} else {

    die("Tipo de usuário inválido");

}

// Verifica se o cadastro foi realizado
if ($resultado) {

    echo "Cadastro realizado com sucesso";

} else {

    echo "Erro ao cadastrar";

}

?>