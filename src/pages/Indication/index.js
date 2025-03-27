import style from './Indication.module.css';
import indication from "../../json/indication.json";
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Estrelas from '../../components/Estrelas';
import estilo from './Indication.module.css';

function Indication() {
  const params = useParams();
  const ind = indication.find((ind) => String(ind.id) === params.id);

  return (
      <>
        <Header />
          <div className={style.indication}>
          <img src={ind.imagem} alt={ind.titulo} className={estilo.imagem}/>
          <h1>{ind.titulo}</h1>
                <Estrelas estrelas={ind.estrelas} />
                <p>{ind.descricao}</p>
          </div>
        <Footer />
      </>
  );
}

export default Indication;
