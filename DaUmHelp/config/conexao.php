<?php

$servidor = "localhost";
$usuario = "root";
$senha = "projetoveros";
$banco = "daumhelp";

$conexao = mysqli_connect(
    $servidor,
    $usuario,
    $senha,
    $banco
);

if(!$conexao){

    die("Erro ao conectar");

}

?>