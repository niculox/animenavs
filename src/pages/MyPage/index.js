// src/pages/MyPage/index.js
import React from 'react';
import { useAuth } from '../../provider/AuthContext'; // Importa o hook de autenticação
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import style from "./MyPage.module.css";
import foto from "./niculos.png";
import Recomendacoes from "../../components/Recomendacoes";

function MyPage() {
    const { getIdentity } = useAuth(); // Obtém a função getIdentity do contexto
    const user = getIdentity(); // Chama a função para obter informações do usuário

    return (
        <>
            <Header />
            <Banner />
            <section className={style.mypage}>
                <div>
                    <img src={foto} alt="foto-perfil-niculos" />
                    <h1>{user ? `@${user.username}` : 'Usuário Desconhecido'}</h1> {/* Renderiza o nome de usuário */}
                </div>
                <h2>Favoritados</h2>
                <h2>Recomendações</h2>
                <Recomendacoes />
            </section>
            <Footer />
        </>
    );
}

export default MyPage;
