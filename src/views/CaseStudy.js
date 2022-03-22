import React, { useEffect } from 'react';
import { useParams } from "react-router";
import Arche from 'Components/Arche';
import Link from 'Components/Link';

const CaseStudy = () => {
  const { pathname } = useParams();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

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
            <div className="case-study-section__article">
              <header className="case-study-section__article__header u-anim" data-scroll data-scroll-offset="20%" data-scroll-id="case-study-img">
                <Arche />
              </header>
              <div className="case-study-section__article__content">
                <div className="c-underline-explanation" data-scroll data-scroll-offset="0, -1000%">
                  <span></span>
                  <div>
                    <p>
                      Made using HTML &amp; SCSS, this little project allowed me to train myself for frontend
                      applications with interresting layouts such as Spotify.
                    </p>
                  </div>
                </div>
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
                    <img src="./ressources/images/spotify_audio.png" alt="Spotify replica card"/>
                  </div>
                </div>
                <footer className="case-study-section__article__content__footer">
                  <Link path="/" className="back-to-home" data-scroll>
                    <img className="arrow" src="./ressources/icons/arrow.svg" alt="White arrow" />
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="58"></circle>
                    </svg>
                  </Link>
                  <Link path="/contact" className="c-button">
                    <span className="visible">Contact</span>
                    <span className="hidden">Contact</span>
                  </Link>
                </footer>
              </div>
            </div>
            <div className="case-study-section__background">
              <div className="case-study-section__background__arche" data-scroll data-scroll-offset="20%" data-scroll-id="case-study-bg"></div>
              <div className="case-study-section__background__solid"></div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default CaseStudy;