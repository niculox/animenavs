import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Favorites from "../../components/Favorites";
import style from "./MyPage.module.css";
import foto from "./niculos.png";
import Recomendacoes from "../../components/Recomendacoes";
import { useAuth } from '../../provider/AuthContext'; // Importando o hook de autenticação

const MyPage = () => {
    const { getIdentity, logout } = useAuth(); // Obtendo a função logout
    const user = getIdentity(); // Obtém os dados do usuário

    const handleLogout = () => {
        logout(); // Chama a função de logout
    };

    return (
        <>
            <Header />
            <Banner />
            <section className={style.mypage}>
                <div>
                    <img src={foto} alt="foto-perfil-niculos" />
                    <h1>{`@${user.username}`}</h1>
                </div>
                <h2>Favoritos</h2>
                <Favorites />
                <h2>Recomendações</h2>
                <Recomendacoes />
                <button onClick={handleLogout}>Sair</button> {/* Adiciona o manipulador de clique */}
            </section>
            <Footer />
        </>
    );
};

export default MyPage;
