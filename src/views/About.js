import RevealLetters from 'Components/RevealLetters';
import React, { useRef } from 'react';
import LocoScroll from 'Utils/LocoScroll';
import { getRandomNumber } from 'Utils/Math';

const About = () => {
  const containerRef = useRef(null);

  return (
    <LocoScroll innerRef={containerRef} direction="horizontal">
      <main className="about-section" data-scroll-container ref={containerRef}>
        <section className="about-section__first o-horizontal" data-scroll-section>
          <h1 className="about-section__title" data-scroll data-scroll-speed="-1">About me</h1>
          <div className="u-relative">
            <div className="c-hide-block" data-scroll data-scroll-offset="0, -1000%">
              {"interested in my profile ?".split(' ').map((word, i) =>
                <p key={i} className="c-hide-block__paragraph" data-scroll data-scroll-speed={getRandomNumber(3, true).toString()}>
                  <span className="c-hide-block__hide-wrapper">
                    <span className={`c-hide-block__hide-wrapper__inside -delay-${i * 2 + 13}`}>{word}</span>
                  </span>
                </p>
              )}
            </div>
            <div className="about-section__maxi-arrow" data-scroll data-scroll-repeat="false">
              <svg viewBox="0 0 285.4 185.2">
                <polyline points="147,2.2 281,92.7 147,183.2 "></polyline>
                <line x1="281" y1="92.7" x2="1.4" y2="92.4"></line>
              </svg>
            </div>
          </div>
        </section>
        <section className="about-section__second o-horizontal" data-scroll-section>
          <div className="about-section__container u-anim" data-scroll data-scroll-offset="35%, -1000%">
            <div className="about-section__presentation">
              <div className="about-section__presentation__left">
                <h2 className="about-section__presentation__left__title c-reveal-letters" data-scroll data-scroll-offset="35%, -1000%">
                  <RevealLetters text="My story" />
                </h2>
                <img className="about-section__presentation__left__pic" src={process.env.PUBLIC_URL + '/img/me.jpg'} alt="Face of Benoît Petit" data-scroll data-scroll-speed="-2" />
              </div>
              <div className="about-section__presentation__right">
                <h3 className="about-section__presentation__right__title">Hey,</h3>
                <div className="about-section__presentation__right__paragraphs o-block">
                  <p>I am 20 years old and i live next to Paris</p>
                  <p>After a DUT MMI at Troyes and a Professional License web at Sorbonne University, I am now trying to integrate Les Gobelins school!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section__third o-horizontal" data-scroll-section>
          <div className="about-section__container u-anim" data-scroll>
            <h2 className="about-section__title c-reveal-letters" data-scroll>
              <RevealLetters text="Contact" />
            </h2>
            <p className="about-section__paragraph o-block">Contact me through the (soon fonctionnal 🛠) form on the website or by clicking on email <a href="mailto:petitbenoit3@gmail.com">petitbenoit3@gmail.com</a></p>
          </div>
        </section>
      </main>
    </LocoScroll>
  );
};

export default About;
