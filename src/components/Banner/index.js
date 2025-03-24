import dowload from "../../assets/imagesMyPage/download.jpg";
import style from "./Banner.module.css";

function Banner(){
    return (
        <img className={ style.banner} src={sorteiaFundoMyPage()} alt="fundo-anime" />
    );
}

const imgFundoMyPage = [
    dowload
];
  
  //função que sorteia uma imagem do array imgContainer
  function sorteiaFundoMyPage(){
    //sorteia um indicie aleatorio de acordo o tamanho do array
    const indice = Math.floor(Math.random() * imgFundoMyPage.length);
    //retorna o indice sorteado
    return imgFundoMyPage[indice];
  }

export default Banner;
