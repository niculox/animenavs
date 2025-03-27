import style from "./Estrelas.module.css";
import estrela from "./estrela.png";

function Estrelas({ estrelas }) {
    const totalEstrelas = 5;

    return (
        <section className={style.estrela}>
            {[...Array(totalEstrelas)].map((_, index) => (
                <img 
                    key={index} 
                    src={estrela} 
                    alt="estrela" 
                    style={{ 
                        width: "24px", 
                        opacity: index < estrelas ? 1 : 0.3 
                    }} 
                />
            ))}
        </section>
    );
}

export default Estrelas;