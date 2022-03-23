import React from 'react';
import Link from 'Components/Link';
import HideBlock from './HideBlock';

const WorkBlock = ({ work }) => {
  return (
    <article className="c-workblock u-anim" data-scroll data-scroll-offset="10%, -1000%">
      <aside className="c-workblock__infos">
        <header className="c-workblock__infos__header" data-scroll data-scroll-offset="20%, -1000%">
          <div className="c-workblock__infos__header__wrapper">
            <div className="c-workblock__infos__header__num" data-scroll data-scroll-offset="0, -1000%">
              <span>.0{work.id}</span>
              <svg className="u-anim-circle-svg" preserveAspectRatio="none" viewBox="0 0 338 172">
                <path vectorEffect="non-scaling-stroke"
                  d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                </path>
              </svg>
            </div>
            <h3 className="c-workblock__infos__header__title">{work.title}</h3>
          </div>
          <span className="c-workblock__infos__underline u-anim-underline"></span>
        </header>
        <figure className="c-workblock__infos__figure">
          <img src={process.env.PUBLIC_URL + '/img' + work.imagePath} alt={work.title} />
        </figure>
      </aside>
      <div className="c-workblock__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
        <HideBlock>{work.text}</HideBlock>
        <Link path={"/case-study/" + work.pagePath} className="c-button">
          <span className="c-button__inner -visible">View case</span>
          <span className="c-button__inner -hidden">View case</span>
        </Link>
      </div>
    </article>
  )
}

export default WorkBlock;
