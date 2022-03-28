import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import workBlocks from "Data/works.json";
import Arche from 'Components/Arche';
import Link from 'Components/Link';
import HideBlock from 'Components/HideBlock';
import LineBreak from 'Components/LineBreak';
import RoundedBackground from 'Components/RoundedBackground';
import LocoScroll from 'Utils/LocoScroll';

const CaseStudy = () => {
  const { pathname } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const workContent = workBlocks.find(work => work.pagePath === pathname);

  useEffect(() => {
    if (!workBlocks.some(work => work.pagePath === pathname)) {
      navigate('/', { replace: true });
    }
  }, [navigate, pathname]);

  return (
    <LocoScroll innerRef={containerRef} direction="vertical">
      {workContent &&
        <main data-scroll-container ref={containerRef}>
          <header className="c-hero-study" data-scroll-section>
            <div className="c-hero-study__wrapper" data-scroll data-scroll-speed="-2">
              <h1>{workContent.title}</h1>
              <h2>{workContent.subtitle}</h2>
            </div>
          </header>
          <div id="scroll-section">
            <section className="case-study-section" data-scroll-section>
              <div className="case-study-section__view-case">
                <a className="case-study-section__view-case__link" rel="noreferrer" href={workContent.article.demoPath} target="_blank">
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
                  <Arche src={process.env.PUBLIC_URL + '/img/' + workContent.article.images[0]} alt="Page d'accueil de Spotify" />
                </header>
                <div className="case-study-section__article__content">
                  <LineBreak />
                  <HideBlock>{workContent.article.text[0]}</HideBlock>
                  <div className="o-block">
                    <div className="o-block o-block--image" tabIndex="0">
                      <img src={process.env.PUBLIC_URL + '/img/' + workContent.article.images[1]} alt="Spotify replica card" />
                    </div>
                    <p className="o-block o-block--text">{workContent.article.text[1]}</p>
                  </div>
                  <LineBreak />
                  <HideBlock>{workContent.article.text[2]}</HideBlock>
                  <div className="c-underline-explanation" data-scroll data-scroll-offset="0, -1000%">
                    <div className="o-block o-block--image" tabIndex="0">
                      <img src={process.env.PUBLIC_URL + '/img/' + workContent.article.images[2]} alt="Spotify replica card" />
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
                    <Link path="/about" className="c-button u-no-mt">
                      <span className="c-button__inner -visible">About</span>
                      <span className="c-button__inner -hidden">About</span>
                    </Link>
                  </footer>
                </div>
              </div>
              <RoundedBackground />
            </section>
          </div>
        </main>
      }
    </LocoScroll>
  )
}

export default CaseStudy;