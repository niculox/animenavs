const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;
    if (!nome || !email || !senha) {
        return res.status(400).json({ error: "Todos os campos são obrigatórios" });
    }
    // Simulação de salvamento no banco de dados
    console.log("Usuário cadastrado:", { nome, email, senha });
    res.status(201).json({ message: "Cadastro realizado com sucesso!" });
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
