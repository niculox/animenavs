import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../provider/AuthContext'; // Importa o hook de autenticação
import imagem from "./imglogin.jpg";
import style from "./Login.module.css";

function Login() {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Obtém a função de login do contexto

    const handleLogin = async (e) => {
        e.preventDefault(); // Evita o comportamento padrão do formulário

        try {
            await login({ username, senha }); // Chama a função de login do authProvider
            alert('Login bem-sucedido!');
            navigate('/mypage'); // Redireciona para a página MyPage após login
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Tente novamente mais tarde.');
        }
    };

    return (
        <section className={style.login}>
            <div>
                <img src={imagem} alt="background-login" />
                <form onSubmit={handleLogin}>
                    <h1>Bem vindo de volta!</h1>
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
