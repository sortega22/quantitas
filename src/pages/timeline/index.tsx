import React from 'react';
import style from './styles.module.scss';

export async function getStaticProps() {
    return { props: { isDark: true } };
  }

const timeline = () => {
  return (
    <section className={style.pstimelinesec}>
    <div className={style.container}>
        <ol className={style.pstimeline}>
            <li>
                <div className={style.psbot}>
                    <p>Do you have a recent injury or long term pain?</p>
                </div>
                <span className={style.psspbot}>2011</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Have you tried Physiotherapy, Chiropractor or your GP without the pain free results?</p>
                </div>
                <span className={style.pssptop}>2014</span>
            </li>
            <li>
                <div className={style.psbot}>
                    <p>Let Physology assess and treat your pain with our trusted revolusionary approach.</p>
                </div>
                <span className={style.psspbot}>2016</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Join our happy family of pain free clients.</p>
                </div>
                <span className={style.psspbot}>2018</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Join our happy family of pain free clients.</p>
                </div>
                <span className={style.psspbot}>2019</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Join our happy family of pain free clients.</p>
                </div>
                <span className={style.psspbot}>2019</span>
            </li>
            <li>
                <div className={style.pstop}>
                    <p>Join our happy family of pain free clients.</p>
                </div>
                <span className={style.psspbot}>2020</span>
            </li>
        </ol>
    </div>
</section>
  )
}

export default timeline;