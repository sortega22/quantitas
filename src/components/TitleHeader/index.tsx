import React from 'react';

interface TitleHeaderProps {
  title: string;
  secoendTitle?: string;
  divider?: boolean;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  secoendTitle,
  divider
}) => {
  return (
    <>
      <div>
        <h2>{title}</h2>
        {divider && <hr/>}
        <h2>{secoendTitle}</h2>
      </div>
    </>
  );
}

export default TitleHeader;