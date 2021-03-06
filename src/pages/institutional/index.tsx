import Fade from 'react-reveal/Fade';
import React from "react";
import Image from 'next/image';
import style from './styles.module.scss';

const Institutional = () => {
  return (
    <>
      <div className={style.generalContent}>
        {/* First Container */}
        <Fade left>
        <div>
          <div className={style.blueLightBox}>
            <div className={style.blueLightBoxInside}>
              <div className={style.blueLightBoxInsideTitle}>
                <Image src={`/images/slash.svg`} width={66} height={65} alt="good" />
              </div>
              <div className={style.divider}></div>
              <div>
                <p className={style.paragraphBox} >Fundo multimercado com múltiplas estratégias nos mercados de juros, câmbio e bolsa, caracterizado por retornos consistentes ao longo do tempo.</p>
              </div>
            </div>
            <div className={style.bluBoxTimeLine}>
              <ul>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/perfil-quantia.svg"} width={68} height={68} alt="good" />
                  <p className={style.listItemText}><strong>PERFIL DE RISCO:</strong> MODERADO</p>
                </li>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/objetivo.svg"} width={68} height={68} alt="good" />
                  <p className={style.listItemText}><strong>OBJETIVO DE RETORNO:</strong> CDI+ 4% a.a</p>
                </li>
                <li className={style.listItem}>
                  <div className={style.listItemDivider}></div>
                  <Image src={"/icons/curva.svg"} width={68} height={68} alt="good" />
                  <p className={style.listItemText}><strong>OBJETIVO DE VOL:</strong> 5% ANUAL</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.blueLightBoxBottom}>
            <div className={style.timeLineTitle}>
              <h2>INFORMAÇÕES ADICIONAIS</h2>
            </div>
            <div className={style.aditionals}>
              <ul>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
              </ul>
              <ul>
              <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
                <li>
                  <p><span>Taxa de administração:</span><strong>1,8% a.a.</strong></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </Fade>
        <Fade top>
        {/* Second Container */}
        <div className={style.blueDarkBox}>
          <div className={style.blueDarkTitle}>
            <h2>CLASSES DE ATIVOS</h2>
          </div>
          <div>
            <Image src={"/icons/juros.svg"} width={154} height={154} alt="juros"/>
            <span>JUROS</span>
          </div>

          <div>
            <Image src={"/icons/cambio.svg"} width={154} height={154} alt="juros"/>
            <span>CAMBIO</span>
          </div>

          <div>
            <Image src={"/icons/bolsa.svg"} width={154} height={154} alt="juros"/>
            <span>BOLSA</span>
          </div>
        </div>
        </Fade>
        <Fade right>
        {/* Third Container */}
        <div className={style.blueLightBoxLast}>
          <div className="timeline">
          <div className={style.timeLineTitle}>
            <h2>EQUIPE DE GESTÃO</h2>
          </div>
          <div className={style.box}>
            <div className={style.container}>
              <div className={style.lines}>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>
                <div className={style.line}></div>
                <div className={style.dot}></div>

              </div>
              
              <div className={style.cards}>
                <div style={{ height: "243px" }} className={style.card}>
                  <Image src={"/images/rogério.png"} width={156} height={157} alt="rogerio" />
                  <h4>Rogério Braga</h4>
                  <p>Sócio e gestor de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Matheus Gallina</h4>
                  <p>Sócio e trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Lucas Monteiro</h4>
                  <p>Sócio e trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>João Pedro</h4>
                  <p>Trader de multimercados</p>
                </div>

                <div className={style.card}>
                  <h4>Ivo Chermont</h4>
                  <p>Sócio e economista-chefe</p>
                </div>

                <div className={style.card}>
                  <h4>João Fernandes</h4>
                  <p>Sócio e economista</p>
                </div>
              </div>
              
              
              
            </div>
          </div>
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
}

export default Institutional;