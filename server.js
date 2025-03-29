const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000; // ou qualquer porta que você preferir

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbanimenavs'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota de cadastro
app.post('/Cadastro', (req, res) => {
    const { username, senha } = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 8);

    db.query('INSERT INTO usuario (username, senha) VALUES (?, ?)', [username, hashedPassword], (err, results) => {
        if (err) return res.status(500).send("Erro ao cadastrar o usuário.");
        res.status(201).send("Usuário cadastrado com sucesso!");
    });
});

// Rota de login
app.post('/Login', (req, res) => {
    const { username, senha } = req.body;

    db.query('SELECT * FROM usuario WHERE username = ?', [username], (err, results) => {
        if (err) return res.status(500).send("Erro ao fazer login.");
        if (results.length === 0) return res.status(404).send("Usuário não encontrado.");

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(senha, user.senha); // Corrigido para usar 'senha'

        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.id }, 'seu_segredo', { expiresIn: 86400 }); // expira em 24 horas
        res.status(200).send({ auth: true, token });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
