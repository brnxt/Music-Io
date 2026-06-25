-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE musicIo;

USE musicIo;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(90) UNIQUE,
    senha VARCHAR(20)
);

CREATE TABLE quiz (
	idQuizTentativa INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
		CONSTRAINT ctFkUsuario
			FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
	pontuacao_total INT,
    dtHora DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE pontuacaoMateriasQuiz (
	idMateria INT PRIMARY KEY AUTO_INCREMENT,
    fkQuizTentativa INT,
		CONSTRAINT ctFkfkQuizTentativa
			FOREIGN KEY (fkQuizTentativa) REFERENCES quiz(idQuizTentativa),
	m1 INT,
	m2 INT,
	m3 INT,
	m4 INT,
	m5 INT,
	m6 INT
);
