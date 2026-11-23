const mongoose = require('mongoose');

const funcionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },

  cpf: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  telefone: {
    type: String,
    required: true,
    trim: true
  },

    cargo: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    departamento: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    dataAdmissao: {
        type: Date,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ['ativo', 'inativo'],
        lowercase: true,
        default: 'ativo'
    }
});

module.exports = mongoose.model('Funcionario', funcionarioSchema);