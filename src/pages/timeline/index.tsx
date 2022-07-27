import React from 'react';
import style from './styles.module.scss';

export async function getStaticProps() {
    return { props: { isDark: true } };
  }

const timeline = () => {
  return (
    <section className={style.pstimelinesec}>
    <div className={style.container}>
        <div className={style.timelineBar}></div>
        <ol className={style.pstimeline}>
            <li>
                <div className={style.psbot}>
                    <p>Fundada em agosto em Porto Alegre/RS</p>
                    <p style={{
                        width: "100%",
                        marginTop: "10px"
                    }}>Incorporação do Quantitas FIA Montecristo para gestão da Quantitas (fundo de ações disponível na XP)</p>
                </div>
                <span className={style.psspbot}>2011</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Criação do Quantitas FIM Arbitragem</p>
                </div>
                <span className={style.pssptop}>2014</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Criação do Quantitas FIC FIM Mallorca (multiestratégias disponível na XP)</p>
                </div>
                <span className={style.psspbot}>2016</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Criação do Quantitas FIM Galápagos (multimercado juros e inflação disponível na XP)</p>
                </div>
                <span className={style.pssptop}>2018</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Criação do Quantitas FIM Maldivas LS</p>
                </div>
                <span className={style.psspbot}>2019</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Quantitas FIC FIM Mallorca no B2C da XP</p>
                </div>
                <span className={style.pssptop}>2020</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Quantitas FIM Galápagos e Quantitas FIA Montecristo no B2C da XP</p>
                </div>
                <span className={style.psspbot}>2021</span>
            </li>
        </ol>
    </div>
</section>
  )
}

export default timeline;