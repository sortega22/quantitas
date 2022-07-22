import BoxContent from "@root/components/BoxContent";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

import style from './styles.module.scss';

const Home = () => {
  return (
    <>
      <div className={style.generalContent}>
        <div className={style.titleGeneral}>
          <div style={{
            margin: "63px",
            marginLeft: "18px"
          }}>
            <Image src={`/images/titulo.svg`} height={86} width={1300} alt="image"/>
          </div>
        </div>
        <div className={`${style.container}`}>
          <BoxContent color="blueDark" iconName="institutional" title="INSTITUCIONAL" />
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIC FIM MALLORCA" />
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIM GALÁPAGOS" />
          <BoxContent color="blueDark" iconName="contato" title="MATERIAIS E CANAIS DE CONTATO" />
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIA MONTECRISTO" />
          <BoxContent color="blueDark" iconName="fundos" title="SAIBA MAIS SOBRE OS FUNDOS" />
        </div>
      </div>
    </>
  );
}

export default Home;