import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Favorites from "../../components/Favorites";
import style from "./MyPage.module.css";
import foto from "./niculos.png";
import Recomendacoes from "../../components/Recomendacoes";
import { useAuth } from '../../provider/AuthContext';
import { useFavoriteContext } from "../../contexts/Favorito"; // Importando o hook do contexto de favoritos
import Card from "."; // Importando o componente de Card

const MyPage = () => {
    const { getIdentity } = useAuth();
    const user = getIdentity(); // Obtém os dados do usuário
    const { favorite } = useFavoriteContext(); // Acessando a lista de favoritos

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
                <button>Sair</button>
            </section>
            <Footer />
        </>
    );
};

export default MyPage;
