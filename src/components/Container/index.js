import style from './Container.module.css';
import logo from '../../assets/BLEACH.jpg';

function Container(){
    return (
        <section className={style.container}>
            <img src={logo} alt="card-image-anime" />
            <div>
                <div>
                    <h1>Bem vindo ao Anime Navs!</h1>
                    <h2>Seu site de recomendações e feedbacks dos animes mais assistidos do momento</h2>
                </div>
                <span>oi</span>
            </div>
        </section>
    );
}

export default Container;
