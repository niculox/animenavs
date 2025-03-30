import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'; // Para decodificar o token
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import style from "./MyPage.module.css";
import foto from "./niculos.png";
import Recomendacoes from "../../components/Recomendacoes";

function MyPage() {
    const { token } = useParams(); // Captura o token da URL
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login'); // Caso não tenha token, redireciona
            return;
        }

        try {
            const decoded = jwt_decode(token); // Decodifica o token
            setUser(decoded); // Setar o estado com as informações do usuário
        } catch (error) {
            console.error('Erro ao decodificar o token:', error);
            navigate('/login'); // Caso o token seja inválido, redireciona
        }
    }, [token, navigate]);

    if (!user) {
        return <div>Carregando...</div>;
    }

    return (
        <>
            <Header />
            <Banner />
            <section className={style.mypage}>
                <div>
                    <img src={foto} alt="foto-perfil-niculos" />
                    <h1>{`@${user.username}`}</h1>
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
