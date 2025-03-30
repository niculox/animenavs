import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000; // ou qualquer porta que você preferir

app.use(cors());
app.use(bodyParser.json());

// Configuração do banco de dados
const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});


// Rota de cadastro
app.post('/Cadastro', (req, res) => {
    const { username, email, senha } = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 8);

    // Verifica se o usuário ou o email já existem
    db.query('SELECT * FROM usuario WHERE username = ? OR email = ?', [username, email], (err, results) => {
        if (err) {
            console.error('Erro ao verificar usuário:', err);
            return res.status(500).json({ erro: "Erro ao verificar usuário." });
        }

        if (results.length > 0) {
            return res.status(400).json({ erro: "Usuário ou email já existe." });
        }

        // Insere o novo usuário após a verificação
        db.query('INSERT INTO usuario (username, email, senha) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Erro ao cadastrar o usuário:', err);
                return res.status(500).json({ erro: "Erro ao cadastrar o usuário." });
            }
            console.log(`Usuário ${username} cadastrado com sucesso!`);
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        });
    });
});

// Backend (rota de login)
app.post('/Login', (req, res) => {
    const { username, senha } = req.body;

    db.query('SELECT * FROM usuario WHERE username = ?', [username], (err, results) => {
        if (err) {
            console.error('Erro ao fazer login:', err);
            return res.status(500).json({ erro: "Erro ao fazer login." });
        }
        if (results.length === 0) {
            return res.status(404).json({ erro: "Usuário não encontrado." });
        }

        const user = results[0];
        const passwordIsValid = bcrypt.compareSync(senha, user.senha);

        if (!passwordIsValid) {
            return res.status(401).json({ auth: false, token: null, erro: "Senha inválida." });
        }

        const token = jwt.sign({ id: user.id, username: user.username }, 'seu_segredo', { expiresIn: '1h' });
        res.status(200).json({ auth: true, token });
    });
});


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
