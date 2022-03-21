import React from 'react'

const WorkBlock = () => {
  return (
    <article className="work" data-scroll data-scroll-offset="10%, -1000%">
      <aside className="work__infos">
        <div className="infos-container" data-scroll data-scroll-offset="20%, -1000%">
          <div className="title-container">
            <div className="title-container__icon" data-scroll data-scroll-offset="0, -1000%">
              <span>.01</span>
              <svg className="title-container__icon__svg" preserveAspectRatio="none"
                viewBox="0 0 338 172">
                <path vectorEffect="non-scaling-stroke"
                  d="M169,3.5c91.1,0,165,36.9,165,82.5s-73.9,82.5-165,82.5S4,131.6,4,86C4,40.4,77.9,3.5,169,3.5">
                </path>
              </svg>
            </div>
            <h3 className="title-container__title">Spotify replica</h3>
          </div>
          <span className="underline"></span>
        </div>
        <figure className="img-container">
          <img src="./src/ressources/images/spotify.jpg" alt="Spotify replica" />
        </figure>
      </aside>
      <div className="work__content" data-scroll data-scroll-offset="0, -1000%" data-scroll-speed="-1">
        <div className="hide-container" data-scroll>
          <div className="h-div">
            <p className="s-div">Made a spotify replica</p>
          </div>
          <div className="h-div">
            <p className="s-div">using SCSS to enhance</p>
          </div>
          <div className="h-div">
            <p className="s-div">basic CSS possibilities and</p>
          </div>
          <div className="h-div">
            <p className="s-div">clearer file management.</p>
          </div>
          <div className="h-div">
            <p className="s-div">Used vanilla Javascript</p>
          </div>
          <div className="h-div">
            <p className="s-div">to manipulate music with</p>
          </div>
          <div className="h-div">
            <p className="s-div">audio API</p>
          </div>
        </div>
        <div className="no-hide">
          <p>
            Made a spotify replica using SCSS to enhance basic CSS possibilities and clearer file
            management.<br />
            Used vanilla Javascript to manipulate music with audio API.
          </p>
        </div>
        <a href="./src/spotify.html" className="btn --light">
          <span className="visible">View case</span>
          <span className="hidden">View case</span>
        </a>
      </div>
    </article>
  )
}

export default WorkBlock