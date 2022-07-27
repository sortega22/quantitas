import React from 'react';
import Image from 'next/image'
import style from './styles.module.scss';
import Link from 'next/link';
import Shake from 'react-reveal/Shake';

const BackTo = () => {
  return (<>
    <Link href={"/home"}>
      <a>
        <div className={style.backContainer}>
          <Shake>
            <Image src={"/icons/seta.png"} width={82} height={82} alt="seta" />
          </Shake>
        </div>
      </a>
    </Link>
  </>);
}

export default BackTo;