import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../provider/AuthContext'; // Importa o hook de autenticação
import imagem from "./imglogin.jpg";
import style from "./Login.module.css";

function Login() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const { login } = useAuth(); // Obtém a função de login do contexto


    return (
        <section className={style.login}>
            <div>
                <img src={imagem} alt="background-login" />
                <form onSubmit={login}>
                    <h1>Bem-vindo de volta!</h1>
                    <h2>Ainda não tem cadastro? Realize-o aqui: <Link to="/Cadastro">Cadastro</Link></h2>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                    <button id="logar" type="submit">Entrar</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
