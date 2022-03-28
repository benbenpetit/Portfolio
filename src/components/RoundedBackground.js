import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

const RoundedBackground = ({ src, alt }) => {
  const { scroll } = useLocomotiveScroll();
  const bgRef = useRef(null);

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (instance) => {
        if (instance.currentElements['case-study-bg']) {
          let progress = instance.currentElements['case-study-bg'].progress;
          let width = bgRef.current.offsetWidth;
          let multiplier = width * 1.2;
          let borderRadius = (width / 2) - (progress * multiplier);
          bgRef.current.style.borderRadius = borderRadius + "px " + borderRadius + "px 0 0";
        }
      });
    }
  }, [scroll]);


  return (
    <div className="case-study-section__background">
      <div className="case-study-section__background__arche" ref={bgRef} data-scroll data-scroll-offset="20%" data-scroll-id="case-study-bg"></div>
      <div className="case-study-section__background__solid"></div>
    </div>
  )
}

export default RoundedBackground;
