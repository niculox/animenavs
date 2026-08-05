import { Link, useNavigate } from 'react-router-dom'; // opcional: useNavigate para redirecionar após cadastrar
import { useState } from 'react';
import axios from 'axios';
import imagem from "./imgcadastro.jpg";
import style from "./Cadastro.module.css";

function Cadastro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !email || !senha) {
            return alert("Preencha todos os campos para realizar o seu cadastro.");
        }

        try {
            const response = await axios.post('https://animenavs.onrender.com/Cadastro', {
                username,
                email,
                senha
            });

            // 1. Acessa a chave 'mensagem' enviada pelo Express
            alert(response.data.mensagem || "Usuário cadastrado com sucesso!");

            // Limpa os campos após sucesso
            setUsername('');
            setEmail('');
            setSenha('');

            // Redireciona para a tela de Login
            navigate('/Login');

        } catch (error) {
            // 2. Trata o erro com segurança contra falhas de rede
            const mensagemErro = error.response?.data?.erro || "Erro ao conectar com o servidor.";
            alert('Erro ao cadastrar: ' + mensagemErro);
        }
    };

    return (
        <section className={style.cadastro}>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Olá! Fico feliz em te ver aqui!</h1>
                    <h2>Já tem cadastro? Realize o login: <Link to="/Login">Login</Link></h2>
                    
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />

                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" // Alterado para type="email" para validação nativa de formato de e-mail
                        id="email" 
                        name="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        required 
                    />

                    <button id="cadastrar" type="submit">Cadastrar</button>
                </form>
                <img src={imagem} alt="background-login" />
            </div>
        </section>
    );
}

export default Cadastro;
