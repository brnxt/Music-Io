var quizModel = require("../models/quizModel");

function receberDados(req,res){

    var pontuacaoTotal = req.body.pontuacaoTotal;
    var m1 = req.body.m1;
    var m2 = req.body.m2;
    var m3 = req.body.m3;
    var m4 = req.body.m4;
    var m5 = req.body.m5;
    var m6 = req.body.m6;
    var fkUsuarioServer = req.body.fkUsuarioServer
    
    // Controller chamando o quizModel
    quizModel.salvarResultadoGeral(fkUsuarioServer, pontuacaoTotal) 
        .then(function (resultado){

            var fkQuizTentativa = resultado.insertId;

            return quizModel.salvarResultadosMateria(fkQuizTentativa, m1, m2, m3, m4, m5, m6)
        })

        .then(function (respostaDoBanco) {
            
            
            // status 200 = Operação realizada com sucesso
            res.status(200).send("Resultado salvos");
        })
        .catch(function (erro) {

            // status 500 = Error
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    receberDados
}