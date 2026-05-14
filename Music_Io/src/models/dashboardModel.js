var database = require("../database/config")

function plotarGraficoLinha(id) {

    var instrucaoSql1 = `
        SELECT 
        DATE_FORMAT(dtHora, '%d/%m %H:%i') AS dtHora,
        pontuacao_total 
        FROM quiz WHERE fkUsuario = ${id} ORDER BY dtHora DESC LIMIT 5;
    `

    return database.executar(instrucaoSql1)
}

function plotarGraficoBarra(idUsuario) {

    var instrucaoSql = `SELECT 
    p.m1,
    p.m2,
    p.m3,
    p.m4,
    p.m5,
    p.m6
    FROM pontuacaoMateriasQuiz AS p 
    JOIN quiz AS q ON p.fkQuizTentativa = q.idQuizTentativa
    JOIN usuario AS u ON q.fkUsuario = u.idUsuario
    WHERE u.idUsuario = ${idUsuario}
    ORDER BY q.dtHora DESC
    LIMIT 1
;
    `

    return database.executar(instrucaoSql)
}

function listarKpi1(ids) {

    var instrucaoSql2 = `
        SELECT posicao_atual FROM (
	SELECT fkUsuario,
		MAX(pontuacao_total) AS pontuacao_total,
        RANK () OVER (ORDER BY MAX(pontuacao_total) DESC) AS posicao_atual
        FROM quiz
        GROUP BY fkUsuario
	) AS tabela_ranking
    WHERE fkUsuario = ${ids};
    `
    return database.executar(instrucaoSql2)
}

function listarKpi3(ids3) {

    var instrucaoSql3 = `
    SELECT
    SUM(p.m1) AS m1,
    SUM(p.m2) AS m2,
    SUM(p.m3) AS m3,
    SUM(p.m4) AS m4,
    SUM(p.m5) AS m5,
	SUM(p.m6) AS m6
    FROM pontuacaoMateriasQuiz AS p 
    JOIN quiz AS q ON p.fkQuizTentativa = q.idQuizTentativa
    JOIN usuario AS u ON q.fkUsuario = u.idUsuario
    WHERE q.fkUsuario = ${ids3}
    GROUP BY q.fkUsuario;
    `
    return database.executar(instrucaoSql3)
}

function listarKpi2(ids2) {

    var instrucaoSql4 = `
    SELECT ROUND((SUM(p.m1) + SUM(p.m2) + SUM(p.m3) + SUM(p.m4) + SUM(p.m5) + SUM(p.m6)) / COUNT(q.fkUsuario),2) AS media_geral,
    COUNT(q.fkUsuario) qtd_tentativas
    FROM pontuacaoMateriasQuiz AS p
    JOIN quiz AS q ON p.fkQuizTentativa = q.idQuizTentativa
    WHERE q.fkUsuario = ${ids2};	
    `
    return database.executar(instrucaoSql4)
}

function listarTabela(tab) {

    var instrucaoSql5 = `
    SELECT u.nome AS Nome,
	MAX(q.pontuacao_total) AS pontuacao_total
    FROM usuario AS u
    JOIN quiz AS q ON u.idUsuario = q.fkUsuario
    GROUP BY u.nome
    ORDER BY pontuacao_total DESC;	
    `
    return database.executar(instrucaoSql5)
}

module.exports = {
    plotarGraficoBarra,
    plotarGraficoLinha,
    listarKpi1,
    listarKpi2,
    listarKpi3,
    listarTabela
};