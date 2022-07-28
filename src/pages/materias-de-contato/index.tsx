import React from 'react';
import Image from 'next/image';
import style from './styles.module.scss';
import BackTo from '@root/components/BackTo';
import TitleHeader from '@root/components/TitleHeader';

export async function getStaticProps() {
  return { props: { body: "body-dark" } };
}

const qrcode = () => {
  return (
    <>
      <TitleHeader title="" left="42px" dark strong='Materiais e canais de contato' />
      <BackTo />
      <div className={style.flex}>
        <div>
          <div className={style.containerBlue01}>
            <div className={style.containerContentBlue01}>
              <h2 className={style.title}>Além do mailing tradicional, <strong> a Quantitas possui um canal alternativo de contato com seus parceiros e clientes através do WhatsApp.</strong></h2>
              <div className={style.containerChannelBox}>
                <div className={style.channelBox}>
                  <Image src={`/icons/whats.svg`} width={70} height={70} alt="good" />
                  <p className={style.titleChannelBox}>ATENDIMENTO AOS ASSESSORES</p>
                </div>
                <div className={style.channelBox}>
                  <Image src={`/icons/diner.svg`} width={70} height={70} alt="good" />
                  <p className={style.titleChannelBox}>RELATÓRIOS DE GESTÃO DOS FUNDOS</p>
                </div>
                <div className={style.channelBox}>
                  <Image src={`/icons/volume.svg`} width={70} height={70} alt="good" />
                  <p className={style.titleChannelBox}>ÁUDIOS COM ANÁLISES DO TIME DE GESTÃO</p>
                </div>
              </div>
              <h2 className={style.title}>Os relatórios e áudios são enviados mensalmente até o 5 d.u.</h2>
            </div>
          </div>
          <div className={style.qrCodeText}>
            <div>
            <p>Outro conteúdo disponibilizado através da nossa lista de transmissão são as  <strong>análises do nosso economista-chefe</strong>, Ivo Chermont, a respeito de algum <strong>evento econômico relevante</strong>. Este conteúdo não é periódico, mas o disponibilizamos sempre que nosso time de economia realiza alguma revisão de call ou a partir de algum acontecimento de impacto direto em cenário.
            </p>
            <span className={style.qrCodeTextLasTitle} style={{
              paddingTop: '10px',
            }}><strong>Use o QRcode para salvar o contato da nossa equipe </strong></span>
            </div>
            <Image src={"/images/qrcode.png"} width={258} height={258} alt="qrcode" />
          </div>
        </div>
        <div className={style.containerBlue02}>
          <div className={style.containerContentBoxBigTitle}>
            <h2>EQUIPE DE RELACIONAMENTO COM INVESTIDORES</h2>
          </div>
          <div className={style.containerContentBox}>
            <Image src={"/images/louise.png"} width={159} height={159} alt="louise" />
            <h2 className={style.containerContentBoxTitle}>Louise Scheid</h2>
            <span className={style.containerContentBoxDesc}>Sócia e head de Relacionamento com Investidores</span>
          </div>
          <div className={style.containerContentBox}>
            <Image src={"/images/arthur.png"} width={159} height={159} alt="arthur" />
            <h2 className={style.containerContentBoxTitle}>Arthur Amaral</h2>
            <span className={style.containerContentBoxDesc}>Relacionamento com Investidores</span>
          </div>
          <div className={style.containerContentBox}>
            <h2 className={style.containerContentBoxTitle}><Image src={"/icons/phone.svg"} width={20} height={20} alt="phone" /> (51) 9 9656-9763</h2>
            <h2 className={style.containerContentBoxDesc}><Image src={"/icons/email.svg"} width={20} height={20} alt="phone" /> <span>investidores@quantitas.com.br</span></h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default qrcode;