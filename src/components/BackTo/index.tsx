import React from 'react';
import Image from 'next/image'
import style from './styles.module.scss';
import Link from 'next/link';

const BackTo = () => {
  return (<>
    <Link href={"/home"}>
      <a>
        <div className={style.backContainer}>
          <Image src={"/icons/seta.png"} width={82} height={82} alt="seta" />
        </div>
      </a>
    </Link>
  </>);
}

export default BackTo;