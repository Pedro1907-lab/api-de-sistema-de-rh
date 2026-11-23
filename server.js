require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger")

const funcionarioRoutes = require ("./routes/funcionarioRoutes")

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/funcionarios", funcionarioRoutes);

connectDB();

app.get("/", (req, res) => {
    res.json({
        mensagem:"Bem-vindo à API de Funcionários-RH",
        status: "online",
        documentacao: "/api-docs"
    });
});

app.use("/api/funcionarios", funcionarioRoutes);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});