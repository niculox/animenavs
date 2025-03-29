import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner"
import Cards from "../../components/Cards";
import style from "./MyPage.module.css";
import foto from "./niculos.png";

function MyPage() {
  return (
      <>
        <Header />
        <Banner />
          <section className={style.mypage}>
            <div>
              <img src={ foto } alt="foto-perfil-niculos" />
              <h1>@niculos</h1>
            </div>
            <h2>Recomendações</h2>
          </section>
        <Footer />
      </>
  );
}

export default MyPage;
