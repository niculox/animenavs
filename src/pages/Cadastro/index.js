import imagem from "./imgcadastro.jpg";

function Cadastro(){
    return (
        <>
            <form>
                <h1>Olá! Fico feliz em te ver aqui!</h1>
                <h2>Preencha os campos para realizar seu cadastro.</h2>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                <label for="email">E-mail:</label>
                <input type="text" id="email" name="email" required/>
                <label for="senha">Senha:</label>
                <input type="text" id="senha" name="senha" required/>
                <input type="submit" value="Entrar"/>
            </form>
            <img src={imagem} alt="background-login"/>
        </>
    );
}

function verificacaocadastro(id, pass){
    if(id === '' || pass === ''){
        return alert("Preencha os campos corretamente para realizar o seu cadastro");
    }
}

export default Cadastro;
