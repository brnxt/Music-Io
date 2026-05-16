var dashboardModel = require("../models/dashboardModel")

function obterDados(req, res) {

    var pontuacaoTotal = req.body.pontuacaoTotal;
    var m1 = req.body.m1;
    var m2 = req.body.m2;
    var m3 = req.body.m3;
    var m4 = req.body.m4;
    var m5 = req.body.m5;
    var m6 = req.body.m6;
    var idUsuario = req.body.sessionStorage.ID_USUARIO;


    // Mandando para o Model plotarGraficoLinha

    dashboardModel.plotarGraficoLinha(idUsuario)
        .then(function (resultado) {

            return dashboardModel.plotarGraficoLinha(idUsuario)
        })

        .then(function (respostaDoBanco) {


            // status 200 = Operação realizada com sucesso
            res.status(200).send("Resultado salvos");
        })
        .catch(function (erro) {

            // status 500 = Error
            res.status(500).json(erro.sqlMessage);
        });

    // Mandando para o Model plotarGraficoBarra

    dashboardModel.plotarGraficoBarra(idUsuario)
        .then(function (resultado) {

            return dashboardModel.plotarGraficoBarra(idUsuario)
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

// Função pra listar o id 
function listar(req, res) {

    // Pegando o Id da URL
    var idUsuario = req.params.idUsuario

    console.log(`Teste ${idUsuario}`)

    dashboardModel.plotarGraficoBarra(idUsuario)

        .then(function (resultado) {

            if (resultado.length > 0) {

                res.status(200).json(resultado)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })

}

function listarUltimos5(req, res) {

    var id = req.params.idUsuario;

    dashboardModel.plotarGraficoLinha(id)

        .then(function (resultadoLinha) {

            if (resultadoLinha.length > 0) {

                res.status(200).json(resultadoLinha)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}

function listarGraficoDonut(req, res) {

    var ids4 = req.params.idUsuario;

    dashboardModel.plotarGraficoDonut(ids4)

        .then(function (resultadoDonut) {

            if (resultadoDonut.length > 0) {

                res.status(200).json(resultadoDonut)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}



function listarKpi1(req, res) {

    var ids = req.params.idUsuario;

    dashboardModel.listarKpi1(ids)

        .then(function (resultadoKpi1) {


            if (resultadoKpi1.length > 0) {

                res.status(200).json(resultadoKpi1)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}

function listarKpi2(req, res) {

    var ids2 = req.params.idUsuario;

    dashboardModel.listarKpi2(ids2)

        .then(function (resultadoKpi2) {


            if (resultadoKpi2.length > 0) {

                res.status(200).json(resultadoKpi2)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}



function listarKpi3(req, res) {

    var ids3 = req.params.idUsuario;

    dashboardModel.listarKpi3(ids3)

        .then(function (resultadoKpi3) {


            if (resultadoKpi3.length > 0) {

                res.status(200).json(resultadoKpi3)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}


function listarTabela(req, res) {

    var tab = req.params.idUsuario;

    dashboardModel.listarTabela(tab)

        .then(function (resultadoTabela) {


            if (resultadoTabela.length > 0) {

                res.status(200).json(resultadoTabela)
            }
            else {

                res.status(204).send("Nenhum resultado")
            }
        })

        .catch(function (erro) {

            res.status(500).json(erro.sqlMessage);
        })
}

module.exports = {
    listarGraficoDonut,
    obterDados,
    listar,
    listarUltimos5,
    listarKpi1,
    listarKpi2,
    listarKpi3,
    listarTabela
}