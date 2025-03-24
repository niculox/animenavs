import style from "./PageNotFound.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import erro404 from "./imgnotfound.png";

function PageNotFound() {
  return (
    <>
      <Header/>
      <div className={style.pagenotfound}>
        
        <h1>erro 404</h1>
        <h2>Página não encontrada</h2>
        <img src={erro404} alt="notfound" class="rotating"/>
        <Footer />
      </div>
    </>
  );
}

export default PageNotFound;
