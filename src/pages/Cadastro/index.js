import { Link } from 'react-router-dom';
import imagem from "./imgcadastro.jpg";
import style from "./Cadastro.module.css";

function Cadastro(){
    return (
        <section className={style.cadastro}>
            <div>
                <form>
                    <h1>Olá! Fico feliz em te ver aqui!</h1>
                    <h2>Já tem cadastro? Realize o login: <Link to="/Login">Login</Link></h2>
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" required/>
                    <label for="email">E-mail:</label>
                    <input type="text" id="email" name="email" required/>
                    <label for="senha">Senha:</label>
                    <input type="text" id="senha" name="senha" required/>
                    <button id="cadastrar" value="cadastrar">Cadastrar</button>
                </form>
                <img src={imagem} alt="background-login"/>
            </div>
        </section>
    );
}

function verificacaocadastro(id, pass){
    if(id === '' || pass === ''){
        return alert("Preencha os campos corretamente para realizar o seu cadastro");
    }
}

export default Cadastro;
