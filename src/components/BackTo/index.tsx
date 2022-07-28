import React from 'react';
import Image from 'next/image'
import style from './styles.module.scss';
import Link from 'next/link';
import Shake from 'react-reveal/Shake';
import Lottie from 'react-lottie-player'
import lottieJson from '../../setas.json'

const BackTo = () => {
  return (<>
    <Link href={"/home"}>
      <a>
      <div className={style.backContainer}>
         <Lottie
            loop
            animationData={lottieJson}
            play
            style={{ width: 70, height: 70 }}
          />
        </div>
      </a>
    </Link>
  </>);
}

export default BackTo;