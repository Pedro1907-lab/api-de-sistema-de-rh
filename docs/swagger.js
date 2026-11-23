const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "API de Funcionários-RH",
        version: "1.0.0",
        description: "API para gerenciamento de funcionários"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Servidor de desenvolvimento"
        }
    ],
    tags: [{
        name: "Funcionários",
        description: "Operações relacionadas a gerenciamento de funcionários"
    }],
    paths: {
        "/api/funcionarios": {
            post: {
                tags: ["Funcionários"],
                summary: "Cadastrar funcionário",
                requestBody: {
                    required : true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Funcionario"
                            }
                        }
                    }
                },
                responses: {
                    201: {description: "Funcionário cadastrado com sucesso"},
                    400: {description: "Requisição inválida"},
                    409: {description: "Funcionário já existe"}
                }
            },
            get: {
                tags: ["Funcionários"],
                summary: "Listar todos os funcionários",
                responses: {
                    200: {description: "Lista de funcionários listada com sucesso"},
                    500: {description: "Erro interno do servidor"}
                }
            }
        },
        "/api/funcionarios/{id}": {
            get: {
                tags: ["Funcionários"],
                summary: "Obter detalhes de um funcionário",
                parameters: [{
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {type: "string"}
                }],
                responses: {
                    200: {description: "Detalhes do funcionário retornados com sucesso"},
                    404: {description: "Funcionário não encontrado"},
                    500: {description: "Erro interno do servidor"}
                }
            },
            put: {
                tags: ["Funcionários"],
                summary: "Atualizar dados de um funcionário",
                parameters: [{
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {type: "string"}
                }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                $ref: "#/components/schemas/Funcionario"
                            }
                        }
                    }
                },
                responses: {
                    200: {description: "Dados do funcionário atualizados com sucesso"},
                    404: {description: "Funcionário não encontrado"},
                    500: {description: "Erro interno do servidor"}
                }
            },
            delete: {
                tags: ["Funcionários"],
                summary: "Excluir um funcionário",
                parameters: [{
                    name: "id",
                    in: "path",
                    required: true,
                    schema: {type: "string"}
                }],
                responses: {
                    200: {description: "Funcionário excluído com sucesso"},
                    404: {description: "Funcionário não encontrado"},
                    500: {description: "Erro interno do servidor"}
                }
            }
        }
    },
    components: {
        schemas: {
            Funcionario: {
                type: "object",
                required: [
                    "nome",
                    "cpf",
                    "email",
                    "telefone",
                    "cargo",
                    "departamento",
                    "salario",
                    "dataAdmissao",
                    "status"
                ],
                properties: {
                    nome: {type: "string", example: "João da Silva"},
                    cpf: {type: "string", example: "123.456.789-00"},
                    email: {type: "string", example: "joao.silva@example.com"},
                    telefone: {type: "string", example: "(11) 99999-9999"},
                    cargo: {type: "string", example: "Desenvolvedor"},
                    departamento: {type: "string", example: "TI"},
                    salario: {type: "number", example: 5000.00},
                    dataAdmissao: {type: "string", format: "date", example: "2026-01-01"},
                    status: {type: "string", enum: ["Ativo", "Inativo"], example: "Ativo"}
                },
            }
        }
    }
};

module.exports = swaggerDocument;