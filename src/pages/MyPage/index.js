import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import style from "./MyPage.module.css";
import foto from "./niculos.png";
import Recomendacoes from "../../components/Recomendacoes";
import { useAuth } from '../../provider/AuthContext';

const MyPage = () => {
    const { getIdentity } = useAuth();
    const user = getIdentity(); // Obtém os dados do usuário

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
};

export default MyPage;
