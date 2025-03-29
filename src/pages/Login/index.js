import { Link } from 'react-router-dom';
import imagem from "./imglogin.jpg";
import style from "./Login.module.css";

function Login(){
    return (
        <section className={ style.login }>
            <div>
                <img src={imagem} alt="background-login"/>
                <form>
                    <h1>Bem vindo de volta!</h1>
                    <h2>Ainda não tem cadastro? Realize-o aqui: <Link to="/Cadastro">Cadastro</Link></h2>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required/>
                    <label for="senha">Senha:</label>
                    <input type="text" id="senha" name="senha" required/>
                    <button id="logar" value="Entrar">Entrar</button>
                </form>
            </div>
        </section>
    );
}

export default Login;