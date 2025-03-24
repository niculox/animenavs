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
    totoro
];

//função que sorteia uma imagem do array imgContainer
function sorteiaCardContainer(){
    //sorteia um indicie aleatorio de acordo o tamanho do array
    const indice = Math.floor(Math.random() * imgContainer.length);
    //retorna o indice sorteado
    return imgContainer[indice];
}

export default Container;
