import React from 'react';
import style from './styles.module.scss';

// import { Container } from './styles';

const timeline = () => {
  return (
    <section className={style.pstimelinesec}>
    <div className={style.container}>
        <ol className={style.pstimeline}>
            <li>
                <div className={style.imghandlertop}>
                    <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_03.png" alt=""/>
                </div>
                <div className={style.psbot}>
                    <p>Do you have a recent injury or long term pain?</p>
                </div>
                <span className={style.pssptop}>01</span>
            </li>
            <li>
                <div className={style.imghandlerbot}>
                    <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_13.png" alt=""/>
                </div>
                <div className={style.pstop}>
                    <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
                </div>
                <span className={style.psspbot}>02</span>
            </li>
            <li>
                <div className={style.imghandlertop}>
                    <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_05.png" alt=""/>
                </div>
                <div className={style.psbot}>
                    <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
                </div>
                <span className={style.pssptop}>03</span>
            </li>
            <li>
                <div className={style.imghandlerbot}>
                    <img src="http://www.physology.co.uk/wp-content/uploads/2016/02/ps-elem_10.png" alt=""/>
                </div>
                <div className={style.pstop}>
                    <p>Join our happy family of pain free clients.</p>
                </div>
                <span className={style.psspbot}>04</span>
            </li>
        </ol>
    </div>
</section>
  )
}

export default timeline;