import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner"
import style from "./MyPage.module.css";
import foto from "./niculos.png";

function MyPage() {
  return (
      <>
        <Header />
        <Banner />
          <div className={style.mypage}>
            <img src={ foto } alt="foto-perfil-niculos" />
            <h1>niculos</h1>
            <h2>Recomendações salvas</h2>
            <p>"Recomendações"</p>
          </div>
        <Footer />
      </>
  );
}

export default MyPage;
