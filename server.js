import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

// Porta dinâmica injetada pelo Render
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configuração do MySQL com suporte a variáveis de ambiente
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'dbanimenavs',
    port: process.env.DB_PORT || 3306,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL com sucesso!');
});

// 1. Rota raiz (para testar se a API está online no navegador)
app.get('/', (req, res) => {
    res.send('API AnimeNavs está rodando com sucesso!');
});

// 2. Rota de cadastro (usando endpoint relativo e em minúsculo)
app.post('/Cadastro', (req, res) => {
    const { username, email, senha } = req.body;
    const hashedPassword = bcrypt.hashSync(senha, 8);

    db.query('SELECT * FROM usuario WHERE username = ? OR email = ?', [username, email], (err, results) => {
        if (err) {
            console.error('Erro ao verificar usuário:', err);
            return res.status(500).json({ erro: "Erro ao verificar usuário." });
        }

        if (results.length > 0) {
            return res.status(400).json({ erro: "Usuário ou email já existe." });
        }

        db.query('INSERT INTO usuario (username, email, senha) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
            if (err) {
                console.error('Erro ao cadastrar o usuário:', err);
                return res.status(500).json({ erro: "Erro ao cadastrar o usuário." });
            }
            res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
        });
    });
});

// 3. Rota de login
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

        const secret = process.env.JWT_SECRET || 'seu_segredo';
        
        // Corrigido para ler user.idusuario (conforme o nome da coluna no seu SQL)
        const token = jwt.sign({ id: user.idusuario, username: user.username }, secret, { expiresIn: '1h' });
        res.status(200).json({ auth: true, token });
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
