import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const Arche = ({ src, alt }) => {
  const { scroll } = useLocomotiveScroll();
  const imageRef = useRef(null);

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (instance) => {
        if (instance.currentElements['case-study-arche']) {
          let progress = instance.currentElements['case-study-arche'].progress;
          progress = Math.round((1 + (progress / 4)) * Math.pow(10, 4)) / Math.pow(10, 4);;
          imageRef.current.style.transform = `translate(-50%, -50%) scale(${progress})`;
        }
      });
    }
  }, [scroll]);

  return (
    <figure className="c-arche" data-scroll data-scroll-offset="20%" data-scroll-id="case-study-arche">
      <img className="c-arche__image" ref={imageRef} src={src} alt={alt} />
    </figure>
  )
}

export default Arche;
