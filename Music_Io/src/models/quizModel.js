var database = require("../database/config")

function salvarResultadoGeral(fkUsuarioServer, pontuacaoTotal){

    var instrucaoSql = `
        INSERT INTO quiz (fkUsuario, pontuacao_total) VALUES ('${fkUsuarioServer}','${pontuacaoTotal}')
    
        `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

function salvarResultadosMateria(fkQuizTentativa, m1, m2, m3, m4, m5, m6){

    var instrucaoSql = `
        INSERT INTO pontuacaoMateriasQuiz (fkQuizTentativa, m1, m2, m3, m4, m5, m6) VALUES ('${fkQuizTentativa}', '${m1}', '${m2}', '${m3}', '${m4}', '${m5}', '${m6}');
    `

    return database.executar(instrucaoSql);
}

module.exports = {
    salvarResultadoGeral, 
    salvarResultadosMateria
};