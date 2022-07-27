import React from 'react';
import style  from  './styles.module.scss';

interface TitleHeaderProps {
  title: string;
  strong?: string;
  divider?: boolean;
  dark?: boolean;
  left?: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  strong,
  dark,
  left

}) => {
  return (
    <>
      <div style={{
        background: dark ? '#298EC1' : '#1B365D',
        marginLeft: left ? left : '109px',
      }} className={style.container}>
        {
          strong ? <h2>{title} <strong>{strong}</strong></h2> : <h2>{title}</h2>
        }
      </div>
    </>
  );
}

export default TitleHeader;