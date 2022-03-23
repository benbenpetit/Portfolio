import React, { useEffect, useRef } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import { useParams } from "react-router";
import Arche from 'Components/Arche';
import Link from 'Components/Link';
import HideBlock from 'Components/HideBlock';
import LineBreak from 'Components/LineBreak';

const CaseStudy = () => {
  const { pathname } = useParams();
  const { scroll } = useLocomotiveScroll();
  const bgRef = useRef(null);

  useEffect(() => {
    console.log(pathname);

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
  }, [pathname, scroll]);

  useEffect(() => {

  }, [scroll]);

  return (
    <>
      <main data-scroll-container>
        <header className="c-hero-study" data-scroll-section>
          <div className="c-hero-study__wrapper" data-scroll data-scroll-speed="-2">
            <h1>Spotify replica</h1>
            <h2>just to train</h2>
          </div>
        </header>
        <div id="scroll-section">
          <section className="case-study-section" data-scroll-section>
            <div className="case-study-section__view-case">
              <a className="case-study-section__view-case__link" rel="noreferrer" href="https://benoitpetit.fr/test_creations/spotify_replica/" target="_blank">
                <img src={process.env.PUBLIC_URL + '/img/arrow.png'} alt="White arrow" />
                <span>view</span>
                <span>case</span>
              </a>
              <div className="case-study-section__view-case__ovale">
                <div className="case-study-section__view-case__ovale__symbol"></div>
                <div className="case-study-section__view-case__ovale__symbol"></div>
              </div>
            </div>
            <div className="case-study-section__article o-wrapper o-wrapper--big">
              <header className="case-study-section__article__header u-anim" data-scroll data-scroll-offset="20%" data-scroll-id="case-study-img">
                <Arche src={process.env.PUBLIC_URL + '/img/spotify_1.jpg'} alt="Page d'accueil de Spotify" />
              </header>
              <div className="case-study-section__article__content">
                <LineBreak />
                <HideBlock>
                  Made using HTML &amp; SCSS, this little project allowed me to train myself for frontend applications with interresting layouts such as Spotify.
                </HideBlock>
                <div>
                  <div className="img-container --short sm:max-w-md">
                    <img src="./ressources/images/spotify_main.png" alt="Spotify replica card" />
                  </div>
                  <p className="simple-p sm:max-w-xs flex flex-col">This layout includes the use of grid to place
                    blocks such as navigation, playbar, and user flow of albums and playlists.<span className="mt-2 mb-2"></span>Grid feature is used to design responsive design without even
                    touching to media queries.</p>
                </div>
                <div className="c-underline-explanation" data-scroll data-scroll-offset="0, -1000%">
                  <span></span>
                  <div>
                    <p>
                      This training project also was a great way to explore the navigator audio API using a
                      lot of events to catch audio attributes. As well as audio manipulation, I used mouse events to link the audio playbar and music
                      volume to the width of the element.
                    </p>
                  </div>
                  <div className="img-container mt-12 sm:max-w-md --reveal --min">
                    <img src="./ressources/images/spotify_audio.png" alt="Spotify replica card" />
                  </div>
                </div>
                <footer className="case-study-section__article__content__footer">
                  <Link path="/">
                    <div className="c-return-button" data-scroll>
                      <img className="c-return-button__arrow" src={process.env.PUBLIC_URL + '/img/arrow.png'} alt="White arrow" />
                      <svg className="c-return-button__svg" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="58"></circle>
                      </svg>
                    </div>
                  </Link>
                  <Link path="/contact" className="c-button u-no-mt">
                    <span className="c-button__inner -visible">Contact</span>
                    <span className="c-button__inner -hidden">Contact</span>
                  </Link>
                </footer>
              </div>
            </div>
            <div className="case-study-section__background">
              <div className="case-study-section__background__arche" ref={bgRef} data-scroll data-scroll-offset="20%" data-scroll-id="case-study-bg"></div>
              <div className="case-study-section__background__solid"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default CaseStudy;