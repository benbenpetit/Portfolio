import React, { useRef } from 'react';
import LocoScroll from 'Utils/LocoScroll';

const About = () => {
  const containerRef = useRef(null);

  return (
    <LocoScroll innerRef={containerRef} direction="horizontal">
      <main className="about-section" data-scroll-container ref={containerRef}>
        <section className="o-horizontal" data-scroll-section>
          <h1 className="about-section__title" data-scroll data-scroll-speed="-1">About me</h1>
          <div className="u-relative">
            <div className="c-hide-block" data-scroll data-scroll-offset="0, -1000%">
              <p className="c-hide-block__paragraph" data-scroll data-scroll-speed="-2">
                <span className="c-hide-block__hide-wrapper">
                  <span className={`c-hide-block__hide-wrapper__inside -delay-13`}>interrested</span>
                </span>
              </p>
              <p className="c-hide-block__paragraph" data-scroll data-scroll-speed="-3">
                <span className="c-hide-block__hide-wrapper">
                  <span className={`c-hide-block__hide-wrapper__inside -delay-14`}>in</span>
                </span>
              </p>
              <p className="c-hide-block__paragraph" data-scroll data-scroll-speed="-1">
                <span className="c-hide-block__hide-wrapper">
                  <span className={`c-hide-block__hide-wrapper__inside -delay-15`}>my</span>
                </span>
              </p>
              <p className="c-hide-block__paragraph" data-scroll data-scroll-speed="0">
                <span className="c-hide-block__hide-wrapper">
                  <span className={`c-hide-block__hide-wrapper__inside -delay-16`}>profile</span>
                </span>
              </p>
              <p className="c-hide-block__paragraph" data-scroll data-scroll-speed="-2">
                <span className="c-hide-block__hide-wrapper">
                  <span className={`c-hide-block__hide-wrapper__inside -delay-17`}>?</span>
                </span>
              </p>
            </div>
            <div class="about-section__maxi-arrow" data-scroll data-scroll-repeat="false">
              <svg viewBox="0 0 285.4 185.2">
                <polyline points="147,2.2 281,92.7 147,183.2 "></polyline>
                <line x1="281" y1="92.7" x2="1.4" y2="92.4"></line>
              </svg>
            </div>
          </div>
        </section>
        <section className="o-horizontal" data-scroll-section>
          azeaezaez
        </section>
        <section className="o-horizontal" data-scroll-section>
          azeaezaez
        </section>
      </main>
    </LocoScroll>
  );
};

export default About;
