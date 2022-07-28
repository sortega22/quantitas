import BoxContent from "@root/components/BoxContent";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Fade from 'react-reveal/Fade';

import style from './styles.module.scss';
import Link from "next/link";

export async function getStaticProps() {
  return { props: { body: "body" } };
}

const Home = () => {
  return (
    <>
      <div className={style.generalContent}>
      <Fade left>
        <div className={style.titleGeneral}>
          <div style={{
            margin: "63px",
            marginLeft: "18px"
          }}>
            <Image src={`/images/titulo.svg`} height={86} width={1300} alt="image"/>
          </div>
        </div>
      </Fade>
        <div className={`${style.container}`}>
          <Fade left>
            <Link href={"/timeline"}>
              <a>
                <BoxContent color="blueDark" iconName="institutional" title="INSTITUCIONAL" />
              </a>
            </Link>
          </Fade>
          <Fade top>
            <Link href={"/quantias-mallorca"}>
              <a>
                <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIC FIM" titleLink="MALLORCA" />
              </a>
            </Link>
          </Fade>
          <Fade right>
            <Link href={"/quantias-galapagos"}>
              <a>
                <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIM" titleLink="GALÁPAGOS" />
              </a>
            </Link>
          </Fade>
          <Fade left>
            <Link href={"/materias-de-contato"}>
              <a>
                <BoxContent color="blueDark" iconName="contato" isDiferent={true} titleLink="MATERIAIS" title=" E CANAIS DE" titleContato="CONTATO" />
              </a>
            </Link>
          </Fade>
          <Fade bottom>
            <Link href={"/quantias-montecristo"}>
              <a>
                <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIA" titleLink="MONTECRISTO" />
              </a>
            </Link>
          </Fade>
          <Fade right>
            <Link href={"https://quantitas.com.br/nossos-fundos/"}>
              <a>
              <BoxContent color="blueDark" iconName="fundos" title="SAIBA MAIS SOBRE OS" titleLink="FUNDOS"  />
              </a>
            </Link>
          </Fade>
          
        </div>
      </div>
    </>
  );
}

export default Home;