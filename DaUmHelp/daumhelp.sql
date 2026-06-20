-- Cria o banco de dados
CREATE DATABASE daumhelp;

-- Usa o banco
USE daumhelp;

-- Tabela de candidatos
CREATE TABLE cadastro_candidato(

    id INT PRIMARY KEY AUTO_INCREMENT,
    -- Identificador único

    nome VARCHAR(100) NOT NULL,
    -- Nome completo

    email VARCHAR(100) NOT NULL UNIQUE,
    -- E-mail único

    senha VARCHAR(255) NOT NULL,
    -- Senha criptografada

    telefone VARCHAR(20) NOT NULL,
    -- Telefone

    cidade VARCHAR(100) NOT NULL,
    -- Cidade

    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- Data do cadastro

);

-- Tabela de empresas
CREATE TABLE empresas(

    id INT PRIMARY KEY AUTO_INCREMENT,
    -- Identificador único

    nome VARCHAR(100) NOT NULL,
    -- Nome da empresa

    email VARCHAR(100) NOT NULL UNIQUE,
    -- E-mail da empresa

    senha VARCHAR(255) NOT NULL,
    -- Senha criptografada

    telefone VARCHAR(20),
    -- Telefone

    cidade VARCHAR(100),
    -- Cidade

    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    -- Data do cadastro

);

-- Tabela de vagas
CREATE TABLE vagas(

    id INT PRIMARY KEY AUTO_INCREMENT,
    -- ID da vaga

    empresa_id INT NOT NULL,
    -- Empresa que publicou

    cargo VARCHAR(100) NOT NULL,
    -- Cargo

    area VARCHAR(100) NOT NULL,
    -- Área

    tipo VARCHAR(50) NOT NULL,
    -- CLT, PJ, Estágio...

    modalidade VARCHAR(50) NOT NULL,
    -- Presencial, Remoto, Híbrido

    localizacao VARCHAR(100),
    -- Cidade

    salario VARCHAR(100),
    -- Faixa salarial

    descricao TEXT NOT NULL,
    -- Descrição da vaga

    data_publicacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status VARCHAR(30) DEFAULT 'ativa',

    FOREIGN KEY (empresa_id)
    REFERENCES empresas(id)

);

-- Tabela de candidaturas
CREATE TABLE candidaturas(

    id INT PRIMARY KEY AUTO_INCREMENT,

    vaga_id INT NOT NULL,

    candidato_id INT NOT NULL,

    link_portfolio VARCHAR(255),

    mensagem TEXT,

    data_candidatura TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    status VARCHAR(30) DEFAULT 'pendente',

    FOREIGN KEY (vaga_id)
    REFERENCES vagas(id),

    FOREIGN KEY (candidato_id)
    REFERENCES cadastro_candidato(id),

    UNIQUE(vaga_id, candidato_id)

);