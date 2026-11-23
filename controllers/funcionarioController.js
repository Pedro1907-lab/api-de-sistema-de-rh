const Funcionario = require('../models/funcionarioModel');

// CREATE
exports.createFuncionario = async (req, res) => {
  try {
    const funcionario = new Funcionario(req.body);
    await funcionario.save();

    res.status(201).json({ mensagem: 'Funcionário criado com sucesso', funcionario });
  } catch (error) {
    res.status(error.code === 11000 ? 409 : 400).json({ mensagem: 'Erro ao criar funcionário', error: error.message });
  };
}

// READ de listar
exports.listarFuncionarios = async (req, res) => {
  try { const funcionarios = await Funcionario.find();
    res.status(200).json(funcionarios);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao listar funcionários', error: error.message });
  }
}

// READ de buscar por ID
exports.buscarFuncionarioPorId = async (req, res) => {
  try {
    const funcionario = await Funcionario.findById(req.params.id);
    if (!funcionario) {
      return res.status(404).json({ mensagem: 'Funcionário não encontrado' });
    }
    res.status(200).json(funcionario);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao buscar funcionário ou ID inválido', error: error.message });
  }
}

// UPDATE
exports.atualizarFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!funcionario) {
      return res.status(404).json({ mensagem: 'Funcionário não encontrado' });
    }
    res.status(200).json({ mensagem: 'Funcionário atualizado com sucesso', funcionario });
  } catch (error) {
    res.status(error.code === 11000 ? 409 : 400).json({ mensagem: 'Erro ao atualizar funcionário', error: error.message });
  }
}

// DELETE
exports.excluirFuncionario = async (req, res) => {
  try {
    const funcionario = await Funcionario.findByIdAndDelete(req.params.id);
    if (!funcionario) {
      return res.status(404).json({ mensagem: 'Funcionário não encontrado' });
    }
    res.status(200).json({ mensagem: 'Funcionário deletado com sucesso', funcionario });
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao deletar funcionário ou ID inválido', error: error.message });
  }
}
