import BoxContent from "@root/components/BoxContent";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

import style from './styles.module.scss';
import Link from "next/link";

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
          <Link href={"/institutional"}>
            <a>
              <BoxContent color="blueDark" iconName="institutional" title="INSTITUCIONAL" />
            </a>
          </Link>
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIC FIM" titleLink="MALLORCA" />
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIM" titleLink="GALÁPAGOS" />
          <BoxContent color="blueDark" iconName="contato" isDiferent={true} titleLink="MATERIAIS" title=" E CANAIS DE" titleContato="CONTATO" />
          <BoxContent color="blueLight" iconName="mallorca" title="QUANTITAS FIA" titleLink="MONTECRISTO" />
          <BoxContent color="blueDark" iconName="fundos" title="SAIBA MAIS SOBRE OS" titleLink="FUNDOS"  />
        </div>
      </div>
    </>
  );
}

export default Home;