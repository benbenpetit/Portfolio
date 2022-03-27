import React, { useContext, useEffect } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useLocation } from 'react-router';
import { LoadingContext } from "Utils/context";

const LocoScroll = ({ direction, innerRef, children }) => {
  const location = useLocation();
  const { loadingStateRef } = useContext(LoadingContext);

  const checkScreenHeight = () => {
    if (window.innerHeight > innerRef.current.scrollHeight || !document.querySelector(".c-scrollbar_thumb")) return;
    document.querySelector(".c-scrollbar_thumb").removeAttribute("style");
  };

  useEffect(() => {
    loadingStateRef.current.classList.add('is-loaded');
  }, [loadingStateRef]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        repeat: true,
        lerp: 0.12,
        class: "in-view",
        direction: direction,
        scrollbarContainer: document.getElementById("root"),
      }}
      watch={[]}
      containerRef={innerRef}
      location={location}
      onLocationChange={(scroll) => {
        checkScreenHeight();
        scroll.update();
        scroll.scrollTo(0, { duration: 0, disableLerp: true });
      }}
    >
      {children}
    </LocomotiveScrollProvider>
  )
}

export default LocoScroll;