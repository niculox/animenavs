import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner"
import style from "./MyPage.module.css";

function MyPage() {
  return (
      <>
        <Header />
        <Banner />
          <div className={style.mypage}>
            
          </div>
        <Footer />
      </>
  );
}



export default MyPage;
