import React, { useRef } from "react";
import workBlocks from "Data/works.json";
import WorkBlock from "Components/WorkBlock";
import LocoScroll from "Utils/LocoScroll";
import clsx from "clsx";

const Home = () => {
  const containerRef = useRef(null);

  return (
    <LocoScroll innerRef={containerRef} direction="vertical">
      <main data-scroll-container ref={containerRef}>
        <header className="c-hero" data-scroll-section>
          <div className="c-hero__wrapper" data-scroll data-scroll-offset="0, -2000%" data-scroll-speed="-2">
            <div className="c-hero__heading">
              <h1 className="c-hero__heading__title">
                {"Benoît Petit".split('').map((character, i) =>
                  <span key={i} className={clsx(`-delay-${i + 20}`)}>{character === ' ' ? '\u00A0' : character}</span>
                )}
              </h1>
            </div>
            <h2 className="c-hero__subtitle">modest frontend developer based in paris 🤠</h2>
          </div>
        </header>
        <div id="scroll-section">
          <section className="work-section" data-scroll-section>
            <div className="work-section__works o-wrapper">
              <h2 className="work-section__works__heading u-anim" data-scroll data-scroll-offset="0, -1000%">my works</h2>
              {workBlocks.map(workBlock =>
                <WorkBlock key={workBlock.id} work={workBlock} />
              )}
            </div>
            <div className="work-section__background" id="anchor" data-scroll data-scroll-offset="32%">
            </div>
          </section>
        </div>
      </main>
    </LocoScroll>
  );
};

export default Home;
