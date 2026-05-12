var database = require("../database/config")

function plotarGraficoLinha(id) {

    var instrucaoSql1 = `
        SELECT 
        DATE_FORMAT(dtHora, '%d/%m/%Y %H:%i:%s') AS dtHora,
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

function listarKpi1(ids){

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

module.exports = {
    plotarGraficoBarra,
    plotarGraficoLinha,
    listarKpi1
};