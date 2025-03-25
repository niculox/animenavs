import imagem from "./imglogin.jpg";

function Login(){
    return (
        <>
            <img src={imagem} alt="background-login"/>
            <form>
                <h1>Bem vindo de volta!</h1>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
                <label for="senha">Senha:</label>
                <input type="text" id="senha" name="senha" required/>
                <input type="submit" value="Entrar"/>
            </form>
        </>
    );
}

function verificacaoLogin(id, pass){
    if(id === '' || pass === ''){
        return alert("Preencha os campos corretamente. Tente novamente!");
    }
}

export default Login;