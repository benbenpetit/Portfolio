import React from 'react';

const Arche = ({ src, alt }) => {
  return (
    <figure className="c-arche" data-scroll data-scroll-offset="20%" data-scroll-id="case-study-arche">
      <img className="c-arche__image" src={src} alt={alt} />
    </figure>
  )
}

export default Arche;
