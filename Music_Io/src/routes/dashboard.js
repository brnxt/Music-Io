var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

router.get("/obterDados", function (req, res) {
    dashboardController.obterDados(req, res);
})

//Pegando o idUsuario
router.get("/listar/:idUsuario", function (req, res) {
    dashboardController.listar(req, res)
})


router.get("/listarUltimos5/:idUsuario", function (req, res) {
    dashboardController.listarUltimos5(req, res)
})

router.get("/listarKpi1/:idUsuario", function (req, res) {
    dashboardController.listarKpi1(req, res)
})

router.get("/listarKpi3/:idUsuario", function (req, res) {
    dashboardController.listarKpi3(req, res)
})

router.get("/listarKpi2/:idUsuario", function (req, res) {
    dashboardController.listarKpi2(req, res)
})



module.exports = router;