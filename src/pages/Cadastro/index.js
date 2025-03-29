import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import imagem from "./imgcadastro.jpg";
import style from "./Cadastro.module.css";

function Cadastro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        // Verifica se os campos estão preenchidos
        if (!username || !email || !senha) {
            return alert("Preencha os campos corretamente para realizar o seu cadastro");
        }

        try {
            const response = await axios.post('http://localhost:3000/Cadastro', {
                username,
                email,
                senha: senha 
            });
            alert(response.data); // Exibe a mensagem de sucesso
        } catch (error) {
            alert('Erro ao cadastrar: ' + error.response.data);
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
                        type="text" 
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
