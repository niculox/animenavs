import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import imagem from "./imgcadastro.jpg";
import style from "./Cadastro.module.css";

function Cadastro() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/cadastro", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert("Erro ao realizar cadastro.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro ao conectar com o servidor.");
        }
    };

    return (
        <section className={style.cadastro}>
            <div>
                <form onSubmit={handleSubmit}>
                    <h1>Olá! Fico feliz em te ver aqui!</h1>
                    <h2>Já tem cadastro? Realize o login: <Link to="/Login">Login</Link></h2>
                    <label htmlFor="nome">Nome:</label>
                    <input 
                        type="text" 
                        id="nome" 
                        name="nome" 
                        value={formData.nome} 
                        onChange={handleChange} 
                        required 
                    />
                    <label htmlFor="email">E-mail:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <label htmlFor="senha">Senha:</label>
                    <input 
                        type="password" 
                        id="senha" 
                        name="senha" 
                        value={formData.senha} 
                        onChange={handleChange} 
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
