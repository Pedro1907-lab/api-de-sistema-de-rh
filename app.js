require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./docs/swagger");
const funcionarioRoutes = require("./routes/funcionarioRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/funcionarios", async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    res.status(503).json({ mensagem: "Banco de dados indisponível", error: error.message });
  }
});
app.use("/api/funcionarios", funcionarioRoutes);

app.get("/", (req, res) => {
  res.json({ mensagem: "Bem-vindo à API de Funcionários-RH", status: "online", documentacao: "/api-docs" });
});

module.exports = app;
