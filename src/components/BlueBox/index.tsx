import React from 'react';
import Image from 'next/image'
import style from './styles.module.scss';

interface BlueBoxProps {
  iconName: string;
  color: "blueDark" | "blueLight";
  title: string;
}

const BlueBoxContent: React.FC<BlueBoxProps> = ({
  iconName,
  color,
  title
}) => {
  return (
    <>
      <div className={`${style.boxContent} ${ color == "blueDark" ? style.blueDark : style.blueLight    }`}>
        <div className={`${style.boxWrapper}`}>
          <Image src={`/icons/${iconName}.svg`} className={`${style.boxIcon}`} height={118} width={118} alt={title}/>
          <div className={`${style.boxContentTitle}`}>
            <h2>{title}</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlueBoxContent;