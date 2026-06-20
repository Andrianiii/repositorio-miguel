<?php

// Importa a conexão com o banco
require_once "../config/conexao.php";

if($_SERVER["REQUEST_METHOD"] !="POST"){
    die("Acesso inválido");
}

// Recebe os dados enviados pelo formulário
$empresa = $_POST["empresa"];
$cargo = $_POST["cargo"];
$area = $_POST["area"];
$localizacao = $_POST["localizacao"];
$salario = $_POST["salario"];
$tipo = $_POST["tipo"];
$modalidade = $_POST["modalidade"];
$descricao = $_POST["descricao"];

// Por enquanto usamos empresa_id fixo
// Depois vamos trocar pelo id da empresa logada
$empresa_id = 1;

// Monta o comando SQL para inserir a vaga
$sql = "INSERT INTO vagas
(empresa_id, cargo, area, tipo, modalidade, localizacao, salario, descricao)
VALUES
('$empresa_id', '$cargo', '$area', '$tipo', '$modalidade', '$localizacao', '$salario', '$descricao')";

// Executa o comando no banco
$resultado = mysqli_query($conexao, $sql);

// Verifica se deu certo
if($resultado){

    echo "Vaga publicada com sucesso";

}else{

    echo "Erro ao publicar vaga";

}

?>