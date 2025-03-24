import style from './Container.module.css';
import bleach from "../../assets/BLEACH.jpg";
import byakuya from "../../assets/byakuia.jpg";
import ichigo from "../../assets/ichigo.jpg";
import unohana from "../../assets/unohana.jpg";
import gatin from "../../assets/gatin.jpg";
import kisuke from "../../assets/kisuke.jpg";
import rukia from "../../assets/rukia.jpg";
import madara from "../../assets/madara.jpg";
import totoro from "../../assets/totoro.jpg";
import Aki from "../../assets/Aki.jpg";
import animeimg from "../../assets/animeimg.jpg";
import background from "../../assets/background.jpg";
import bankaiunohana from "../../assets/bankaiunohana.jpg";
import casteloghibli from "../../assets/casteloghibli.jpg";
import fantasmaghibli from "../../assets/fantasmaghibli.jpg";
import gatokiki from "../../assets/gatokiki.jpg";
import gatonolago from "../../assets/gatonolago.jpg";
import jujutsu from "../../assets/jujutsu.jpg";
import kakashihatake from "../../assets/kakashihatake.jpg";
import kiki from "../../assets/kiki.jpg";
import kimetsu from "../../assets/kimetsu.jpg";
import kurosakiichigo from "../../assets/kurosakiichigo.jpg";
import makima from "../../assets/makima.jpg";
import narutoasthetic from "../../assets/narutoaesthetic.jpg";
import narutoart from "../../assets/narutoart.jpg";
import narutocostas from "../../assets/narutocostas.jpg";
import narutowallpapper from "../../assets/narutowallpaper.jpg";
import princessmononoke from "../../assets/princessmononoke.jpg";
import princessmononokepink from "../../assets/princessmononokepink.jpg";
import shinjibleach from "../../assets/shinjibleach.jpg";
import studioghibliaesthetic from "../../assets/studioghibliaesthetic.jpg";
import totorochuva from "../../assets/totorochuva.jpg";
import yhwa from "../../assets/yhwa.jpg";
import yourname from "../../assets/yourname.jpg";

function Container(){
    return (
        <section className={style.container}>
            <img src={sorteiaCardContainer()} alt="card-image-anime" />
            <div>
                <div>
                    <h1>Bem vindo ao Anime Navs!</h1>
                    <h2>Seu site de recomendações e feedbacks dos animes mais assistidos do momento</h2>
                </div>
                <span>Indicação do dia!</span>
            </div>
        </section>
    );
}

//array com as imagens que serão exibidas no container
const imgContainer = [
    bleach,
    byakuya,
    ichigo,
    unohana,
    gatin,
    kisuke,
    rukia,
    madara,
    totoro,
    Aki,
    animeimg,
    background,
    bankaiunohana,
    casteloghibli,
    fantasmaghibli,
    gatokiki,
    gatonolago,
    jujutsu,
    kakashihatake,
    kiki,
    kimetsu,
    kurosakiichigo,
    makima,
    narutoasthetic,
    narutoart,
    narutocostas,
    narutowallpapper,
    princessmononoke,
    princessmononokepink,
    shinjibleach,
    studioghibliaesthetic,
    totorochuva,
    yhwa,
    yourname
];

//função que sorteia uma imagem do array imgContainer
function sorteiaCardContainer(){
    //sorteia um indicie aleatorio de acordo o tamanho do array
    const indice = Math.floor(Math.random() * imgContainer.length);
    //retorna o indice sorteado
    return imgContainer[indice];
}

export default Container;
