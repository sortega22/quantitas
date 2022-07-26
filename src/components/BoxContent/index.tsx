import React from 'react';
import Image from 'next/image'
import style from './styles.module.scss';

interface BoxContentProps {
  iconName: string;
  color: "blueDark" | "blueLight";
  title: string;
  titleLink?: string;
  titleContato?: string;
  isDiferent?: boolean;
}

const BoxContent: React.FC<BoxContentProps> = ({
  iconName,
  color,
  title,
  titleLink,
  isDiferent,
  titleContato
}) => {
  return (
    <>
      <div className={`${style.boxContent} ${ color == "blueDark" ? style.blueDark : style.blueLight    }`}>
        <div className={`${style.boxWrapper}`}>
          <Image src={`/icons/${iconName}.svg`} className={`${style.boxIcon}`} height={118} width={118} alt={title}/>
          <div className={`${style.boxContentTitle}`}>
            {!isDiferent ? <h2>{title} <span>{titleLink}</span></h2> : <h2>{titleLink} {title} <span>{titleContato}</span></h2>}
            <Image src={"/icons/seta.png"} width={82} height={82} alt="seta" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxContent;