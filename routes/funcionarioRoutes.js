const express = require("express")
const router = express.Router()
const funcionarioController = require("../controllers/funcionarioController")

router.post("/", funcionarioController.createFuncionario)
router.get("/", funcionarioController.listarFuncionarios)
router.get("/:id", funcionarioController.buscarFuncionarioPorId)
router.put("/:id", funcionarioController.atualizarFuncionario)
router.delete("/:id", funcionarioController.excluirFuncionario)

module.exports = router