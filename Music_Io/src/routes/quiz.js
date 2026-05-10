var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController")

router.post("/receberDados", function (req, res){
    quizController.receberDados(req, res);
});

module.exports = router;